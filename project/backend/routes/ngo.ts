import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ngoDirectory, findNGOsByLocation, findNGOsByLanguage, getNGOById } from '../data/ngo-directory.js';

const router = Router();

// In-memory escalation store - use database in production
const escalations = new Map<string, any>();

router.get('/search', (req, res) => {
  try {
    const { district, state, language, service_type } = req.query;
    
    let ngos = ngoDirectory;
    
    if (district || state) {
      ngos = findNGOsByLocation(district as string, state as string, service_type as string);
    } else if (language) {
      ngos = findNGOsByLanguage(language as string, service_type as string);
    }
    
    // Filter by service type if specified
    if (service_type && !district && !state && !language) {
      ngos = ngos.filter(ngo => ngo.services.includes(service_type as string));
    }

    // Sort by rating
    ngos.sort((a, b) => b.rating - a.rating);

    res.json({
      ngos,
      count: ngos.length
    });
  } catch (error) {
    console.error('Error searching NGOs:', error);
    res.status(500).json({ error: 'Failed to search NGOs' });
  }
});

router.get('/:ngo_id', (req, res) => {
  try {
    const { ngo_id } = req.params;
    const ngo = getNGOById(ngo_id);
    
    if (!ngo) {
      return res.status(404).json({ error: 'NGO not found' });
    }

    res.json(ngo);
  } catch (error) {
    console.error('Error fetching NGO:', error);
    res.status(500).json({ error: 'Failed to fetch NGO details' });
  }
});

router.post('/escalate', async (req, res) => {
  try {
    const { 
      session_id, 
      document_id, 
      ngo_id, 
      user_contact,
      message,
      language = 'hi'
    } = req.body;

    if (!document_id || !ngo_id || !user_contact) {
      return res.status(400).json({ error: 'Document ID, NGO ID, and user contact are required' });
    }

    const ngo = getNGOById(ngo_id);
    if (!ngo) {
      return res.status(404).json({ error: 'NGO not found' });
    }

    // Create escalation record
    const escalation_id = uuidv4();
    const escalation = {
      escalation_id,
      session_id,
      document_id,
      ngo_id,
      user_contact,
      message,
      language,
      status: 'pending',
      created_at: new Date().toISOString(),
      ngo_contact: ngo.contact
    };

    escalations.set(escalation_id, escalation);

    // In production, send actual notifications
    const notificationSent = await sendNotificationToNGO(ngo, escalation);

    res.json({
      escalation_id,
      status: 'escalated',
      ngo_details: {
        name: ngo.name,
        contact: ngo.contact,
        working_hours: ngo.working_hours
      },
      message: getEscalationMessage(language),
      notification_sent: notificationSent
    });

  } catch (error) {
    console.error('Error escalating to NGO:', error);
    res.status(500).json({ error: 'Failed to escalate to NGO' });
  }
});

router.get('/escalations/:escalation_id', (req, res) => {
  try {
    const { escalation_id } = req.params;
    const escalation = escalations.get(escalation_id);
    
    if (!escalation) {
      return res.status(404).json({ error: 'Escalation not found' });
    }

    res.json(escalation);
  } catch (error) {
    console.error('Error fetching escalation:', error);
    res.status(500).json({ error: 'Failed to fetch escalation details' });
  }
});

router.put('/escalations/:escalation_id/status', (req, res) => {
  try {
    const { escalation_id } = req.params;
    const { status, ngo_response, contact_scheduled } = req.body;
    
    const escalation = escalations.get(escalation_id);
    if (!escalation) {
      return res.status(404).json({ error: 'Escalation not found' });
    }

    escalation.status = status; // 'pending', 'accepted', 'in_progress', 'resolved', 'closed'
    escalation.ngo_response = ngo_response;
    escalation.contact_scheduled = contact_scheduled;
    escalation.updated_at = new Date().toISOString();

    escalations.set(escalation_id, escalation);

    res.json({
      message: 'Escalation status updated',
      escalation
    });
  } catch (error) {
    console.error('Error updating escalation status:', error);
    res.status(500).json({ error: 'Failed to update escalation status' });
  }
});

// Mock function to send notification to NGO
async function sendNotificationToNGO(ngo: any, escalation: any): Promise<boolean> {
  try {
    // In production, integrate with:
    // - WhatsApp Business API
    // - Email service (SendGrid, SES)
    // - SMS gateway

    console.log(`📧 Sending notification to ${ngo.name}:`);
    console.log(`📱 WhatsApp: ${ngo.contact.whatsapp || 'Not available'}`);
    console.log(`📧 Email: ${ngo.contact.email}`);
    console.log(`📞 Phone: ${ngo.contact.phone}`);
    console.log(`📄 Document ID: ${escalation.document_id}`);
    console.log(`👤 User Contact: ${escalation.user_contact}`);
    console.log(`💬 Message: ${escalation.message}`);

    // Simulate notification success
    return true;
  } catch (error) {
    console.error('Failed to send notification to NGO:', error);
    return false;
  }
}

function getEscalationMessage(language: string): string {
  const messages = {
    hi: 'आपका मामला सफलतापूर्वक संबंधित NGO को भेज दिया गया है। वे जल्द ही आपसे संपर्क करेंगे।',
    ta: 'உங்கள் வழக்கு தொடர்புடைய NGO க்கு வெற்றிகரமாக அனுப்பப்பட்டது. அவர்கள் விரைவில் உங்களைத் தொடர்பு கொள்வார்கள்.',
    te: 'మీ కేసు సంబంధిత NGO కు విజయవంతంగా పంపబడింది. వారు త్వరలో మిమ్మల్ని సంప్రదిస్తారు.',
    kn: 'ನಿಮ್ಮ ಪ್ರಕರಣವನ್ನು ಸಂಬಂಧಿತ NGO ಗೆ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ. ಅವರು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
    en: 'Your case has been successfully escalated to the relevant NGO. They will contact you soon.'
  };

  return messages[language as keyof typeof messages] || messages.en;
}

export default router;