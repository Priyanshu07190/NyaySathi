export interface NGO {
  id: string;
  name: string;
  type: 'legal_aid' | 'labor_rights' | 'women_rights' | 'general';
  contact: {
    phone: string;
    whatsapp?: string;
    email: string;
  };
  address: {
    district: string;
    state: string;
    pincode: string;
    full_address: string;
  };
  languages_supported: string[];
  services: string[];
  working_hours: string;
  verified: boolean;
  rating: number;
}

// Sample NGO directory - in production, this would be in a database
export const ngoDirectory: NGO[] = [
  {
    id: 'ngo_001',
    name: 'Legal Aid Society Jharkhand',
    type: 'legal_aid',
    contact: {
      phone: '+91-9876543210',
      whatsapp: '+91-9876543210',
      email: 'help@legalaidsocietyjh.org'
    },
    address: {
      district: 'Ranchi',
      state: 'Jharkhand',
      pincode: '834001',
      full_address: 'Main Road, Ranchi, Jharkhand 834001'
    },
    languages_supported: ['hi', 'en'],
    services: ['wage_complaint', 'rti_request', 'legal_consultation'],
    working_hours: '9:00 AM - 6:00 PM (Mon-Fri)',
    verified: true,
    rating: 4.5
  },
  {
    id: 'ngo_002', 
    name: 'Tamil Nadu Workers Union',
    type: 'labor_rights',
    contact: {
      phone: '+91-9988776655',
      whatsapp: '+91-9988776655',
      email: 'support@tnworkersunion.org'
    },
    address: {
      district: 'Chennai',
      state: 'Tamil Nadu', 
      pincode: '600001',
      full_address: 'Anna Salai, Chennai, Tamil Nadu 600001'
    },
    languages_supported: ['ta', 'en'],
    services: ['wage_complaint', 'labor_dispute', 'workplace_harassment'],
    working_hours: '8:00 AM - 7:00 PM (Mon-Sat)',
    verified: true,
    rating: 4.2
  },
  {
    id: 'ngo_003',
    name: 'Karnataka Legal Rights Foundation',
    type: 'general',
    contact: {
      phone: '+91-9123456789',
      email: 'contact@klrf.org'
    },
    address: {
      district: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001', 
      full_address: 'MG Road, Bangalore, Karnataka 560001'
    },
    languages_supported: ['kn', 'hi', 'en'],
    services: ['rti_request', 'pension_claim', 'tenancy_dispute'],
    working_hours: '9:00 AM - 5:00 PM (Mon-Fri)',
    verified: true,
    rating: 4.0
  }
];

export function findNGOsByLocation(district: string, state: string, serviceType?: string): NGO[] {
  return ngoDirectory.filter(ngo => {
    const locationMatch = ngo.address.district.toLowerCase() === district.toLowerCase() || 
                         ngo.address.state.toLowerCase() === state.toLowerCase();
    
    const serviceMatch = !serviceType || ngo.services.includes(serviceType);
    
    return locationMatch && serviceMatch && ngo.verified;
  });
}

export function findNGOsByLanguage(language: string, serviceType?: string): NGO[] {
  return ngoDirectory.filter(ngo => {
    const languageMatch = ngo.languages_supported.includes(language);
    const serviceMatch = !serviceType || ngo.services.includes(serviceType);
    
    return languageMatch && serviceMatch && ngo.verified;
  });
}

export function getNGOById(id: string): NGO | undefined {
  return ngoDirectory.find(ngo => ngo.id === id);
}