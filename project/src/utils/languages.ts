export interface LanguageContent {
  // Header
  appName: string;
  appSubtitle: string;
  home: string;
  chat: string;
  help: string;
  admin: string;
  
  // Home Page
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeDescription: string;
  startNow: string;
  findLegalAid: string;
  languages: string;
  free: string;
  available24x7: string;
  
  // Features
  voiceFirst: string;
  voiceFirstDesc: string;
  legalDocuments: string;
  legalDocumentsDesc: string;
  ngoSupport: string;
  ngoSupportDesc: string;
  safePrivate: string;
  safePrivateDesc: string;
  
  // Use Cases
  wageIssues: string;
  wageIssuesDesc: string;
  rtiRequests: string;
  rtiRequestsDesc: string;
  pensionIssues: string;
  pensionIssuesDesc: string;
  rentDisputes: string;
  rentDisputesDesc: string;
  
  // How it Works
  howItWorks: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  
  // CTA
  startNowCta: string;
  startNowCtaDesc: string;
  talkToNyaysathi: string;
  
  // Conversation Page
  talkToAssistant: string;
  yourLegalAssistant: string;
  online: string;
  typing: string;
  suggestions: string;
  readyToGenerate: string;
  readyToGenerateDesc: string;
  generateDocument: string;
  tellYourProblem: string;
  speakOrType: string;
  needHelp: string;
  language: string;
  
  // Document View
  documentNotFound: string;
  documentNotFoundDesc: string;
  createNewDocument: string;
  backToChat: string;
  documentId: string;
  reliable: string;
  summary: string;
  documentDetails: string;
  factsAndDetails: string;
  petitioner: string;
  respondent: string;
  addressNotProvided: string;
  reliefSought: string;
  prayer: string;
  actions: string;
  downloadPdf: string;
  share: string;
  edit: string;
  sendToNgo: string;
  requiredDocuments: string;
  noSpecialDocuments: string;
  filingOffice: string;
  verificationStatus: string;
  validDocument: string;
  errorFound: string;
  warnings: string;
  errors: string;
  humanReviewRequired: string;
  humanReviewRequiredDesc: string;
  
  // NGO Directory
  ngoDirectoryTitle: string;
  ngoDirectoryDesc: string;
  documentReady: string;
  documentReadyDesc: string;
  searchNgoOrDistrict: string;
  allStates: string;
  allServices: string;
  allLanguages: string;
  noNgoFound: string;
  noNgoFoundDesc: string;
  institutionsFound: string;
  sortedByRating: string;
  contactUs: string;
  sendDocument: string;
  sent: string;
  contactInfo: string;
  close: string;
  
  // Admin Dashboard
  adminDashboard: string;
  adminDashboardDesc: string;
  refresh: string;
  totalSessions: string;
  totalConversations: string;
  documentsGenerated: string;
  generatedDocuments: string;
  ngoEscalations: string;
  sentToNgo: string;
  successRate: string;
  platformMetrics: string;
  averageConfidenceScore: string;
  supportedLanguages: string;
  documentTypes: string;
  recentSessions: string;
  systemInformation: string;
  lastUpdated: string;
  platformVersion: string;
  apiStatus: string;
  active: string;
  
  // Document Types
  wageComplaint: string;
  rtiRequest: string;
  pensionClaim: string;
  tenancyDispute: string;
  
  // NGO Types
  legalAid: string;
  laborRights: string;
  womenRights: string;
  general: string;
  
  // Services
  legalConsultation: string;
  laborDispute: string;
  workplaceHarassment: string;
  
  // Common
  yes: string;
  no: string;
  cancel: string;
  save: string;
  delete: string;
  loading: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  
  // Validation Messages
  fieldRequired: string;
  invalidInput: string;
  documentGenerated: string;
  documentSaved: string;
  documentShared: string;
  
  // Disclaimers
  disclaimer: string;
  disclaimerText: string;
  
  // Status
  completed: string;
  pending: string;
  escalated: string;
  approved: string;
  rejected: string;
  needsRevision: string;

  // Profile/Admin (Profile view)
  profileTitle: string;
  profileSubtitle: string;
  accountDetails: string;
  fullName: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  locationLabel: string;
  locationPlaceholder: string;
  preferredLanguageLabel: string;
  voiceAssist: string;
  notifications: string;
  saveChanges: string;
  saved: string;
  quickInfo: string;
  languageLabelShort: string;
  voiceAssistOn: string;
  voiceAssistOff: string;
  notificationsOn: string;
  notificationsOff: string;
  loadingSessions: string;
  noSessionData: string;
  failedToLoadSessions: string;
  tableSession: string;
  tableLanguage: string;
  tableDocType: string;
  tableStatus: string;
  tableConfidence: string;
  tableCreated: string;
}

export const languages: Record<string, Partial<LanguageContent>> = {
  hi: {
    // Header
    appName: "न्यायसाथी",
    appSubtitle: "NyaySathi",
    home: "होम",
    chat: "बात",
    help: "मदद",
    admin: "व्यवस्था",
    
    // Home Page
    welcomeTitle: "न्यायसाथी में आपका स्वागत है",
    welcomeSubtitle: "गांव में भी मिले न्याय की राह",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "अभी शुरू करें",
    findLegalAid: "कानूनी सहायता खोजें",
    languages: "भाषाएं",
    free: "100% निःशुल्क",
    available24x7: "24/7 उपलब्ध",
    
    // Features
    voiceFirst: "आवाज़ में बात करें",
    voiceFirstDesc: "अपनी भाषा में बोलें, हम समझेंगे",
    legalDocuments: "कानूनी दस्तावेज़",
    legalDocumentsDesc: "तुरंत शिकायत और आवेदन तैयार करें",
    ngoSupport: "एनजीओ सहायता",
    ngoSupportDesc: "स्थानीय कानूनी सहायता से जुड़ें",
    safePrivate: "सुरक्षित और निजी",
    safePrivateDesc: "आपकी जानकारी पूरी तरह सुरक्षित",
    
    // Use Cases
    wageIssues: "मजदूरी की समस्या",
    wageIssuesDesc: "अगर मालिक वेतन नहीं दे रहा",
    rtiRequests: "सरकारी जानकारी",
    rtiRequestsDesc: "सूचना का अधिकार के लिए आवेदन",
    pensionIssues: "पेंशन की समस्या",
    pensionIssuesDesc: "पेंशन न मिलने की शिकायत",
    rentDisputes: "किराया विवाद",
    rentDisputesDesc: "मकान मालिक से समस्या",
    
    // How it Works
    howItWorks: "कैसे काम करता है?",
    step1Title: "समस्या बताएं",
    step1Desc: "अपनी आवाज़ में या लिखकर समस्या बताएं",
    step2Title: "दस्तावेज़ तैयार करें",
    step2Desc: "AI आपके लिए कानूनी दस्तावेज़ तैयार करेगा",
    step3Title: "मदद लें",
    step3Desc: "एनजीओ से जुड़ें या दस्तावेज़ जमा करें",
    
    // CTA
    startNowCta: "अभी शुरू करें",
    startNowCtaDesc: "आपकी समस्या का समाधान सिर्फ एक क्लिक दूर है",
    talkToNyaysathi: "न्यायसाथी से बात करें",
    
    // Conversation Page
    talkToAssistant: "न्यायसाथी से बात करें",
    yourLegalAssistant: "आपकी कानूनी सहायक",
    online: "ऑनलाइन",
    typing: "टाइप कर रहा है...",
    suggestions: "सुझाव:",
    readyToGenerate: "दस्तावेज़ तैयार करने के लिए तैयार",
    readyToGenerateDesc: "आपकी जानकारी के आधार पर कानूनी दस्तावेज़ बनाएं",
    generateDocument: "दस्तावेज़ बनाएं",
    tellYourProblem: "अपनी समस्या बताएं...",
    speakOrType: "आवाज़ में बोलें या टाइप करें",
    needHelp: "मदद चाहिए?",
    language: "भाषा: हिंदी",
    
    // Document View
    documentNotFound: "दस्तावेज़ नहीं मिला",
    documentNotFoundDesc: "दस्तावेज़ लोड नहीं हो सका",
    createNewDocument: "नया दस्तावेज़ बनाएं",
    backToChat: "वापस जाएं",
    documentId: "दस्तावेज़ ID:",
    reliable: "विश्वसनीय",
    summary: "सारांश",
    documentDetails: "दस्तावेज़ विवरण",
    factsAndDetails: "तथ्य और विवरण:",
    petitioner: "आवेदक:",
    respondent: "प्रतिवादी:",
    addressNotProvided: "पता नहीं दिया गया",
    reliefSought: "राहत की मांग:",
    prayer: "प्रार्थना:",
    actions: "कार्य",
    downloadPdf: "PDF डाउनलोड करें",
    share: "शेयर करें",
    edit: "संपादित करें",
    sendToNgo: "NGO को भेजें",
    requiredDocuments: "आवश्यक दस्तावेज़",
    noSpecialDocuments: "कोई विशेष दस्तावेज़ नहीं",
    filingOffice: "दाखिल करने का कार्यालय",
    verificationStatus: "सत्यापन स्थिति",
    validDocument: "वैध दस्तावेज़",
    errorFound: "त्रुटि मिली",
    warnings: "चेतावनी:",
    errors: "त्रुटियां:",
    humanReviewRequired: "इस दस्तावेज़ की मानवीय समीक्षा आवश्यक है",
    humanReviewRequiredDesc: "कृपया स्थानीय कानूनी सहायता से संपर्क करें",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO और कानूनी सहायता निर्देशिका",
    ngoDirectoryDesc: "आपके क्षेत्र में कानूनी मदद के लिए विश्वसनीय संस्थानों से जुड़ें",
    documentReady: "आपका दस्तावेज़ तैयार है। नीचे से NGO चुनकर मदद के लिए भेजें।",
    documentReadyDesc: "दस्तावेज़ तैयार है",
    searchNgoOrDistrict: "NGO का नाम या जिला खोजें...",
    allStates: "सभी राज्य",
    allServices: "सभी सेवाएं",
    allLanguages: "सभी भाषाएं",
    noNgoFound: "कोई NGO नहीं मिला",
    noNgoFoundDesc: "अपने खोज मापदंड बदलकर दोबारा कोशिश करें",
    institutionsFound: "संस्थान मिले",
    sortedByRating: "रेटिंग के अनुसार क्रमबद्ध",
    contactUs: "संपर्क करें:",
    sendDocument: "दस्तावेज़ भेजें",
    sent: "भेजा गया!",
    contactInfo: "संपर्क जानकारी",
    close: "बंद करें",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "न्यायसाथी प्लेटफॉर्म की निगरानी और विश्लेषण",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "कुल बातचीत",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "तैयार किए गए दस्तावेज़",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "NGO को भेजे गए",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "मजदूरी की शिकायत",
    rtiRequest: "सूचना का अधिकार आवेदन",
    pensionClaim: "पेंशन का दावा",
    tenancyDispute: "किराया विवाद",
    
    // NGO Types
    legalAid: "कानूनी सहायता",
    laborRights: "मजदूर अधिकार",
    womenRights: "महिला अधिकार",
    general: "सामान्य",
    
    // Services
    legalConsultation: "कानूनी सलाह",
    laborDispute: "श्रमिक विवाद",
    workplaceHarassment: "कार्यक्षेत्र उत्पीड़न",
    
    // Common
    yes: "हां",
    no: "नहीं",
    cancel: "रद्द करें",
    save: "सेव करें",
    delete: "डिलीट करें",
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफल",
    warning: "चेतावनी",
    info: "जानकारी",
    
    // Validation Messages
    fieldRequired: "यह फील्ड आवश्यक है",
    invalidInput: "गलत इनपुट",
    documentGenerated: "दस्तावेज़ तैयार हो गया",
    documentSaved: "दस्तावेज़ सेव हो गया",
    documentShared: "दस्तावेज़ शेयर हो गया",
    
    // Disclaimers
    disclaimer: "अस्वीकरण",
    disclaimerText: "यह दस्तावेज़ न्यायसाथी AI द्वारा स्वचालित रूप से तैयार किया गया है। कृपया जमा करने से पहले समीक्षा करें।",
    
    // Status
    completed: "पूर्ण",
    pending: "लंबित",
    escalated: "भेजा गया",
    approved: "स्वीकृत",
    rejected: "अस्वीकृत",
    needsRevision: "संशोधन चाहिए"
    ,
    // Profile/Admin (Profile view)
    profileTitle: "प्रोफ़ाइल",
    profileSubtitle: "अपना खाता और प्राथमिकताएँ प्रबंधित करें",
    accountDetails: "खाता विवरण",
    fullName: "पूरा नाम",
    namePlaceholder: "आपका नाम",
    emailLabel: "ईमेल",
    emailPlaceholder: "आपका ईमेल",
    phoneLabel: "फ़ोन",
    phonePlaceholder: "+91-",
    locationLabel: "स्थान",
    locationPlaceholder: "जिला, राज्य",
    preferredLanguageLabel: "पसंदीदा भाषा",
    voiceAssist: "वॉइस असिस्ट",
    notifications: "सूचनाएँ",
    saveChanges: "परिवर्तन सहेजें",
    saved: "सहेजा गया",
    quickInfo: "त्वरित जानकारी",
    languageLabelShort: "भाषा",
    voiceAssistOn: "चालू",
    voiceAssistOff: "बंद",
    notificationsOn: "चालू",
    notificationsOff: "बंद",
    loadingSessions: "सत्र लोड हो रहे हैं...",
    noSessionData: "कोई सत्र डेटा उपलब्ध नहीं।",
    failedToLoadSessions: "हाल के सत्र लोड करने में विफल",
    tableSession: "सत्र",
    tableLanguage: "भाषा",
    tableDocType: "दस्तावेज़ प्रकार",
    tableStatus: "स्थिति",
    tableConfidence: "विश्वास",
    tableCreated: "निर्मित"
  },
  
  en: {
    // Header
    appName: "NyaySathi",
    appSubtitle: "न्यायसाथी",
    home: "Home",
    chat: "Chat",
    help: "Help",
    admin: "Admin",
    
    // Home Page
    welcomeTitle: "Welcome to NyaySathi",
    welcomeSubtitle: "Justice accessible in villages too",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "Start Now",
    findLegalAid: "Find Legal Aid",
    languages: "Languages",
    free: "100% Free",
    available24x7: "24/7 Available",
    
    // Features
    voiceFirst: "Voice First",
    voiceFirstDesc: "Speak in your language, we understand",
    legalDocuments: "Legal Documents",
    legalDocumentsDesc: "Generate complaints and applications instantly",
    ngoSupport: "NGO Support",
    ngoSupportDesc: "Connect with local legal aid",
    safePrivate: "Safe & Private",
    safePrivateDesc: "Your information is completely secure",
    
    // Use Cases
    wageIssues: "Wage Issues",
    wageIssuesDesc: "If employer is not paying salary",
    rtiRequests: "RTI Requests",
    rtiRequestsDesc: "Right to Information applications",
    pensionIssues: "Pension Issues",
    pensionIssuesDesc: "Pension not received complaints",
    rentDisputes: "Rent Disputes",
    rentDisputesDesc: "Problems with landlord",
    
    // How it Works
    howItWorks: "How it Works?",
    step1Title: "Tell Your Problem",
    step1Desc: "Speak or type your problem in your language",
    step2Title: "Generate Document",
    step2Desc: "AI will prepare legal documents for you",
    step3Title: "Get Help",
    step3Desc: "Connect with NGO or submit documents",
    
    // CTA
    startNowCta: "Start Now",
    startNowCtaDesc: "Your problem's solution is just one click away",
    talkToNyaysathi: "Talk to NyaySathi",
    
    // Conversation Page
    talkToAssistant: "Talk to NyaySathi",
    yourLegalAssistant: "Your Legal Assistant",
    online: "Online",
    typing: "Typing...",
    suggestions: "Suggestions:",
    readyToGenerate: "Ready to generate document",
    readyToGenerateDesc: "Create legal document based on your information",
    generateDocument: "Generate Document",
    tellYourProblem: "Tell your problem...",
    speakOrType: "Speak or type your message",
    needHelp: "Need help?",
    language: "Language: English",
    
    // Document View
    documentNotFound: "Document Not Found",
    documentNotFoundDesc: "Could not load document",
    createNewDocument: "Create New Document",
    backToChat: "Go Back",
    documentId: "Document ID:",
    reliable: "Reliable",
    summary: "Summary",
    documentDetails: "Document Details",
    factsAndDetails: "Facts and Details:",
    petitioner: "Petitioner:",
    respondent: "Respondent:",
    addressNotProvided: "Address not provided",
    reliefSought: "Relief Sought:",
    prayer: "Prayer:",
    actions: "Actions",
    downloadPdf: "Download PDF",
    share: "Share",
    edit: "Edit",
    sendToNgo: "Send to NGO",
    requiredDocuments: "Required Documents",
    noSpecialDocuments: "No special documents required",
    filingOffice: "Filing Office",
    verificationStatus: "Verification Status",
    validDocument: "Valid Document",
    errorFound: "Error Found",
    warnings: "Warnings:",
    errors: "Errors:",
    humanReviewRequired: "Human review required for this document",
    humanReviewRequiredDesc: "Please contact local legal aid",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO and Legal Aid Directory",
    ngoDirectoryDesc: "Connect with trusted organizations for legal help in your area",
    documentReady: "Your document is ready. Select NGO below to send for help.",
    documentReadyDesc: "Document ready",
    searchNgoOrDistrict: "Search NGO name or district...",
    allStates: "All States",
    allServices: "All Services",
    allLanguages: "All Languages",
    noNgoFound: "No NGO Found",
    noNgoFoundDesc: "Try changing your search criteria",
    institutionsFound: "institutions found",
    sortedByRating: "Sorted by rating",
    contactUs: "Contact:",
    sendDocument: "Send Document",
    sent: "Sent!",
    contactInfo: "Contact Information",
    close: "Close",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "Monitor and analyze NyaySathi platform",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "Total Conversations",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "Generated Documents",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "Sent to NGO",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "Wage Complaint",
    rtiRequest: "RTI Request",
    pensionClaim: "Pension Claim",
    tenancyDispute: "Tenancy Dispute",
    
    // NGO Types
    legalAid: "Legal Aid",
    laborRights: "Labor Rights",
    womenRights: "Women Rights",
    general: "General",
    
    // Services
    legalConsultation: "Legal Consultation",
    laborDispute: "Labor Dispute",
    workplaceHarassment: "Workplace Harassment",
    
    // Common
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Info",
    
    // Validation Messages
    fieldRequired: "This field is required",
    invalidInput: "Invalid input",
    documentGenerated: "Document generated",
    documentSaved: "Document saved",
    documentShared: "Document shared",
    
    // Disclaimers
    disclaimer: "Disclaimer",
    disclaimerText: "This document is auto-generated by NyaySathi AI. Please review before submission.",
    
    // Status
    completed: "Completed",
    pending: "Pending",
    escalated: "Escalated",
    approved: "Approved",
    rejected: "Rejected",
    needsRevision: "Needs Revision",
    
    // Profile/Admin (Profile view)
    profileTitle: "Profile",
    profileSubtitle: "Manage your account and preferences",
    accountDetails: "Account Details",
    fullName: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+91-",
    locationLabel: "Location",
    locationPlaceholder: "District, State",
    preferredLanguageLabel: "Preferred Language",
    voiceAssist: "Voice Assist",
    notifications: "Notifications",
    saveChanges: "Save Changes",
    saved: "Saved",
    quickInfo: "Quick Info",
    languageLabelShort: "Language",
    voiceAssistOn: "On",
    voiceAssistOff: "Off",
    notificationsOn: "On",
    notificationsOff: "Off",
    loadingSessions: "Loading sessions...",
    noSessionData: "No session data available.",
    failedToLoadSessions: "Failed to load recent sessions",
    tableSession: "Session",
    tableLanguage: "Language",
    tableDocType: "Doc Type",
    tableStatus: "Status",
    tableConfidence: "Confidence",
    tableCreated: "Created"
  },
  
  ta: {
    // Header
    appName: "நீதிசாதி",
    appSubtitle: "NyaySathi",
    home: "முகப்பு",
    chat: "அரட்டை",
    help: "உதவி",
    admin: "நிர்வாகம்",
    
    // Home Page
    welcomeTitle: "நீதிசாதியில் உங்களை வரவேற்கிறோம்",
    welcomeSubtitle: "கிராமங்களிலும் நீதி கிடைக்கும்",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "இப்போதே தொடங்குங்கள்",
    findLegalAid: "சட்ட உதவி கண்டறியுங்கள்",
    languages: "மொழிகள்",
    free: "100% இலவசம்",
    available24x7: "24/7 கிடைக்கும்",
    
    // Features
    voiceFirst: "குரல் முதல்",
    voiceFirstDesc: "உங்கள் மொழியில் பேசுங்கள், நாங்கள் புரிந்துகொள்கிறோம்",
    legalDocuments: "சட்ட ஆவணங்கள்",
    legalDocumentsDesc: "உடனடியாக புகார்கள் மற்றும் விண்ணப்பங்களை உருவாக்குங்கள்",
    ngoSupport: "NGO ஆதரவு",
    ngoSupportDesc: "உள்ளூர் சட்ட உதவியுடன் இணைக்கவும்",
    safePrivate: "பாதுகாப்பான மற்றும் தனிப்பட்ட",
    safePrivateDesc: "உங்கள் தகவல் முற்றிலும் பாதுகாப்பானது",
    
    // Use Cases
    wageIssues: "ஊதிய பிரச்சினைகள்",
    wageIssuesDesc: "முதலாளி சம்பளம் கொடுக்கவில்லை என்றால்",
    rtiRequests: "RTI கோரிக்கைகள்",
    rtiRequestsDesc: "தகவல் அறியும் உரிமை விண்ணப்பங்கள்",
    pensionIssues: "ஓய்வூதிய பிரச்சினைகள்",
    pensionIssuesDesc: "ஓய்வூதியம் கிடைக்காத புகார்கள்",
    rentDisputes: "வாடகை தகராறுகள்",
    rentDisputesDesc: "வீட்டு உரிமையாளருடன் பிரச்சினைகள்",
    
    // How it Works
    howItWorks: "இது எப்படி வேலை செய்கிறது?",
    step1Title: "உங்கள் பிரச்சினையைச் சொல்லுங்கள்",
    step1Desc: "உங்கள் மொழியில் பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள்",
    step2Title: "ஆவணத்தை உருவாக்குங்கள்",
    step2Desc: "AI உங்களுக்காக சட்ட ஆவணங்களைத் தயாரிக்கும்",
    step3Title: "உதவி பெறுங்கள்",
    step3Desc: "NGO உடன் இணைக்கவும் அல்லது ஆவணங்களைச் சமர்ப்பிக்கவும்",
    
    // CTA
    startNowCta: "இப்போதே தொடங்குங்கள்",
    startNowCtaDesc: "உங்கள் பிரச்சினையின் தீர்வு ஒரே கிளிக் தூரத்தில் உள்ளது",
    talkToNyaysathi: "நீதிசாதியுடன் பேசுங்கள்",
    
    // Conversation Page
    talkToAssistant: "நீதிசாதியுடன் பேசுங்கள்",
    yourLegalAssistant: "உங்கள் சட்ட உதவியாளர்",
    online: "ஆன்லைன்",
    typing: "தட்டச்சு செய்கிறது...",
    suggestions: "பரிந்துரைகள்:",
    readyToGenerate: "ஆவணத்தை உருவாக்க தயார்",
    readyToGenerateDesc: "உங்கள் தகவலின் அடிப்படையில் சட்ட ஆவணத்தை உருவாக்குங்கள்",
    generateDocument: "ஆவணத்தை உருவாக்குங்கள்",
    tellYourProblem: "உங்கள் பிரச்சினையைச் சொல்லுங்கள்...",
    speakOrType: "பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள்",
    needHelp: "உதவி தேவையா?",
    language: "மொழி: தமிழ்",
    
    // Document View
    documentNotFound: "ஆவணம் கிடைக்கவில்லை",
    documentNotFoundDesc: "ஆவணத்தை ஏற்ற முடியவில்லை",
    createNewDocument: "புதிய ஆவணத்தை உருவாக்குங்கள்",
    backToChat: "திரும்பிச் செல்லுங்கள்",
    documentId: "ஆவண ID:",
    reliable: "நம்பகமான",
    summary: "சுருக்கம்",
    documentDetails: "ஆவண விவரங்கள்",
    factsAndDetails: "உண்மைகள் மற்றும் விவரங்கள்:",
    petitioner: "மனுதாரர்:",
    respondent: "பிரதிவாதி:",
    addressNotProvided: "முகவரி வழங்கப்படவில்லை",
    reliefSought: "நிவாரணம் கோரப்பட்டது:",
    prayer: "பிரார்த்தனை:",
    actions: "செயல்கள்",
    downloadPdf: "PDF பதிவிறக்கம்",
    share: "பகிர்ந்து கொள்ளுங்கள்",
    edit: "திருத்து",
    sendToNgo: "NGO க்கு அனுப்பவும்",
    requiredDocuments: "தேவையான ஆவணங்கள்",
    noSpecialDocuments: "சிறப்பு ஆவணங்கள் தேவையில்லை",
    filingOffice: "தாக்கல் அலுவலகம்",
    verificationStatus: "சரிபார்ப்பு நிலை",
    validDocument: "செல்லுபடியாகும் ஆவணம்",
    errorFound: "பிழை கண்டறியப்பட்டது",
    warnings: "எச்சரிக்கைகள்:",
    errors: "பிழைகள்:",
    humanReviewRequired: "இந்த ஆவணத்திற்கு மனித மதிப்பாய்வு தேவை",
    humanReviewRequiredDesc: "உள்ளூர் சட்ட உதவியைத் தொடர்பு கொள்ளவும்",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO மற்றும் சட்ட உதவி அடைவு",
    ngoDirectoryDesc: "உங்கள் பகுதியில் சட்ட உதவிக்காக நம்பகமான அமைப்புகளுடன் இணைக்கவும்",
    documentReady: "உங்கள் ஆவணம் தயார். உதவிக்காக கீழே NGO ஐ தேர்ந்தெடுத்து அனுப்பவும்.",
    documentReadyDesc: "ஆவணம் தயார்",
    searchNgoOrDistrict: "NGO பெயர் அல்லது மாவட்டத்தைத் தேடுங்கள்...",
    allStates: "அனைத்து மாநிலங்கள்",
    allServices: "அனைத்து சேவைகள்",
    allLanguages: "அனைத்து மொழிகள்",
    noNgoFound: "NGO கிடைக்கவில்லை",
    noNgoFoundDesc: "உங்கள் தேடல் அளவுகோல்களை மாற்ற முயற்சிக்கவும்",
    institutionsFound: "நிறுவனங்கள் கண்டறியப்பட்டன",
    sortedByRating: "மதிப்பீட்டின் அடிப்படையில் வரிசைப்படுத்தப்பட்டது",
    contactUs: "தொடர்பு:",
    sendDocument: "ஆவணத்தை அனுப்பவும்",
    sent: "அனுப்பப்பட்டது!",
    contactInfo: "தொடர்பு தகவல்",
    close: "மூடு",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "நீதிசாதி தளத்தை கண்காணித்து பகுப்பாய்வு செய்யுங்கள்",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "மொத்த உரையாடல்கள்",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "உருவாக்கப்பட்ட ஆவணங்கள்",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "NGO க்கு அனுப்பப்பட்டது",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "ஊதிய புகார்",
    rtiRequest: "RTI கோரிக்கை",
    pensionClaim: "ஓய்வூதிய கோரிக்கை",
    tenancyDispute: "வாடகை தகராறு",
    
    // NGO Types
    legalAid: "சட்ட உதவி",
    laborRights: "தொழிலாளர் உரிமைகள்",
    womenRights: "பெண்கள் உரிமைகள்",
    general: "பொது",
    
    // Services
    legalConsultation: "சட்ட ஆலோசனை",
    laborDispute: "தொழிலாளர் தகராறு",
    workplaceHarassment: "பணியிட துன்புறுத்தல்",
    
    // Common
    yes: "ஆம்",
    no: "இல்லை",
    cancel: "ரத்து செய்",
    save: "சேமி",
    delete: "நீக்கு",
    loading: "ஏற்றுகிறது...",
    error: "பிழை",
    success: "வெற்றி",
    warning: "எச்சரிக்கை",
    info: "தகவல்",
    
    // Validation Messages
    fieldRequired: "இந்த புலம் தேவை",
    invalidInput: "தவறான உள்ளீடு",
    documentGenerated: "ஆவணம் உருவாக்கப்பட்டது",
    documentSaved: "ஆவணம் சேமிக்கப்பட்டது",
    documentShared: "ஆவணம் பகிரப்பட்டது",
    
    // Disclaimers
    disclaimer: "மறுப்பு",
    disclaimerText: "இந்த ஆவணம் நீதிசாதி AI ஆல் தானாக உருவாக்கப்பட்டது. சமர்ப்பிக்கும் முன் மதிப்பாய்வு செய்யவும்.",
    
    // Status
    completed: "முடிந்தது",
    pending: "நிலுவையில்",
    escalated: "அனுப்பப்பட்டது",
    approved: "அங்கீகரிக்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",
    needsRevision: "திருத்தம் தேவை",
    
    // Profile/Admin (Profile view)
    profileTitle: "சுயவிவரம்",
    profileSubtitle: "உங்கள் கணக்கு மற்றும் முன்னுரிமைகளை நிர்வகிக்கவும்",
    accountDetails: "கணக்கு விவரங்கள்",
    fullName: "முழு பெயர்",
    namePlaceholder: "உங்கள் பெயர்",
    emailLabel: "மின்னஞ்சல்",
    emailPlaceholder: "you@example.com",
    phoneLabel: "தொலைபேசி",
    phonePlaceholder: "+91-",
    locationLabel: "இடம்",
    locationPlaceholder: "மாவட்டம், மாநிலம்",
    preferredLanguageLabel: "விருப்ப மொழி",
    voiceAssist: "குரல் உதவி",
    notifications: "அறிவிப்புகள்",
    saveChanges: "மாற்றங்களை சேமிக்கவும்",
    saved: "சேமிக்கப்பட்டது",
    quickInfo: "விரைவு தகவல்",
    languageLabelShort: "மொழி",
    voiceAssistOn: "ஆன்",
    voiceAssistOff: "ஆஃப்",
    notificationsOn: "ஆன்",
    notificationsOff: "ஆஃப்",
    loadingSessions: "அமர்வுகள் ஏற்றப்படுகிறது...",
    noSessionData: "அமர்வு தரவு கிடைக்கவில்லை.",
    failedToLoadSessions: "சமீபத்திய அமர்வுகளை ஏற்ற முடியவில்லை",
    tableSession: "அமர்வு",
    tableLanguage: "மொழி",
    tableDocType: "ஆவண் வகை",
    tableStatus: "நிலை",
    tableConfidence: "நம்பிக்கை",
    tableCreated: "உருவாக்கப்பட்டது"
  },
  
  te: {
    // Header
    appName: "న్యాయసాథి",
    appSubtitle: "NyaySathi",
    home: "హోమ్",
    chat: "చాట్",
    help: "సహాయం",
    admin: "అడ్మిన్",
    
    // Home Page
    welcomeTitle: "న్యాయసాథికి స్వాగతం",
    welcomeSubtitle: "గ్రామాలలో కూడా న్యాయం అందుబాటులో",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "ఇప్పుడే ప్రారంభించండి",
    findLegalAid: "న్యాయ సహాయం కనుగొనండి",
    languages: "భాషలు",
    free: "100% ఉచితం",
    available24x7: "24/7 అందుబాటులో",
    
    // Features
    voiceFirst: "వాయిస్ ఫస్ట్",
    voiceFirstDesc: "మీ భాషలో మాట్లాడండి, మేము అర్థం చేసుకుంటాము",
    legalDocuments: "న్యాయ పత్రాలు",
    legalDocumentsDesc: "తక్షణమే ఫిర్యాదులు మరియు దరఖాస్తులను రూపొందించండి",
    ngoSupport: "NGO మద్దతు",
    ngoSupportDesc: "స్థానిక న్యాయ సహాయంతో కనెక్ట్ అవ్వండి",
    safePrivate: "సురక్షితం మరియు ప్రైవేట్",
    safePrivateDesc: "మీ సమాచారం పూర్తిగా సురక్షితం",
    
    // Use Cases
    wageIssues: "వేతన సమస్యలు",
    wageIssuesDesc: "యజమాని జీతం ఇవ్వకపోతే",
    rtiRequests: "RTI అభ్యర్థనలు",
    rtiRequestsDesc: "సమాచార హక్కు దరఖాస్తులు",
    pensionIssues: "పెన్షన్ సమస్యలు",
    pensionIssuesDesc: "పెన్షన్ రాకపోవడం ఫిర్యాదులు",
    rentDisputes: "అద్దె వివాదాలు",
    rentDisputesDesc: "ఇంటి యజమానితో సమస్యలు",
    
    // How it Works
    howItWorks: "ఇది ఎలా పని చేస్తుంది?",
    step1Title: "మీ సమస్య చెప్పండి",
    step1Desc: "మీ భాషలో మాట్లాడండి లేదా టైప్ చేయండి",
    step2Title: "పత్రం రూపొందించండి",
    step2Desc: "AI మీ కోసం న్యాయ పత్రాలను తయారు చేస్తుంది",
    step3Title: "సహాయం పొందండి",
    step3Desc: "NGO తో కనెక్ట్ అవ్వండి లేదా పత్రాలను సమర్పించండి",
    
    // CTA
    startNowCta: "ఇప్పుడే ప్రారంభించండి",
    startNowCtaDesc: "మీ సమస్య పరిష్కారం కేవలం ఒక క్లిక్ దూరంలో ఉంది",
    talkToNyaysathi: "న్యాయసాథితో మాట్లాడండి",
    
    // Conversation Page
    talkToAssistant: "న్యాయసాథితో మాట్లాడండి",
    yourLegalAssistant: "మీ న్యాయ సహాయకుడు",
    online: "ఆన్‌లైన్",
    typing: "టైప్ చేస్తోంది...",
    suggestions: "సూచనలు:",
    readyToGenerate: "పత్రం రూపొందించడానికి సిద్ధం",
    readyToGenerateDesc: "మీ సమాచారం ఆధారంగా న్యాయ పత్రం రూపొందించండి",
    generateDocument: "పత్రం రూపొందించండి",
    tellYourProblem: "మీ సమస్య చెప్పండి...",
    speakOrType: "మాట్లాడండి లేదా టైప్ చేయండి",
    needHelp: "సహాయం కావాలా?",
    language: "భాష: తెలుగు",
    
    // Document View
    documentNotFound: "పత్రం దొరకలేదు",
    documentNotFoundDesc: "పత్రం లోడ్ చేయలేకపోయింది",
    createNewDocument: "కొత్త పత్రం రూపొందించండి",
    backToChat: "వెనక్కి వెళ్ళండి",
    documentId: "పత్రం ID:",
    reliable: "నమ్మకమైన",
    summary: "సారాంశం",
    documentDetails: "పత్రం వివరాలు",
    factsAndDetails: "వాస్తవాలు మరియు వివరాలు:",
    petitioner: "దరఖాస్తుదారు:",
    respondent: "ప్రతివాది:",
    addressNotProvided: "చిరునామా ఇవ్వలేదు",
    reliefSought: "కోరిన ఉపశమనం:",
    prayer: "ప్రార్థన:",
    actions: "చర్యలు",
    downloadPdf: "PDF డౌన్‌లోడ్",
    share: "షేర్ చేయండి",
    edit: "ఎడిట్",
    sendToNgo: "NGO కి పంపండి",
    requiredDocuments: "అవసరమైన పత్రాలు",
    noSpecialDocuments: "ప్రత్యేక పత్రాలు అవసరం లేదు",
    filingOffice: "దాఖలు చేసే కార్యాలయం",
    verificationStatus: "ధృవీకరణ స్థితి",
    validDocument: "చెల్లుబాటు అయ్యే పత్రం",
    errorFound: "లోపం దొరికింది",
    warnings: "హెచ్చరికలు:",
    errors: "లోపాలు:",
    humanReviewRequired: "ఈ పత్రానికి మానవ సమీక్ష అవసరం",
    humanReviewRequiredDesc: "దయచేసి స్థానిక న్యాయ సహాయాన్ని సంప్రదించండి",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO మరియు న్యాయ సహాయ డైరెక్టరీ",
    ngoDirectoryDesc: "మీ ప్రాంతంలో న్యాయ సహాయం కోసం నమ్మకమైన సంస్థలతో కనెక్ట్ అవ్వండి",
    documentReady: "మీ పత్రం సిద్ధం. సహాయం కోసం క్రింద NGO ని ఎంచుకుని పంపండి.",
    documentReadyDesc: "పత్రం సిద్ధం",
    searchNgoOrDistrict: "NGO పేరు లేదా జిల్లా వెతకండి...",
    allStates: "అన్ని రాష్ట్రాలు",
    allServices: "అన్ని సేవలు",
    allLanguages: "అన్ని భాషలు",
    noNgoFound: "NGO దొరకలేదు",
    noNgoFoundDesc: "మీ వెతుకులాట ప్రమాణాలను మార్చి ప్రయత్నించండి",
    institutionsFound: "సంస్థలు దొరికాయి",
    sortedByRating: "రేటింగ్ ప్రకారం క్రమబద్ధీకరించబడింది",
    contactUs: "సంప్రదించండి:",
    sendDocument: "పత్రం పంపండి",
    sent: "పంపబడింది!",
    contactInfo: "సంప్రదింపు సమాచారం",
    close: "మూసివేయండి",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "న్యాయసాథి ప్లాట్‌ఫారమ్‌ను పర్యవేక్షించండి మరియు విశ్లేషించండి",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "మొత్తం సంభాషణలు",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "రూపొందించిన పత్రాలు",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "NGO కి పంపబడింది",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "వేతన ఫిర్యాదు",
    rtiRequest: "RTI అభ్యర్థన",
    pensionClaim: "పెన్షన్ దావా",
    tenancyDispute: "అద్దె వివాదం",
    
    // NGO Types
    legalAid: "న్యాయ సహాయం",
    laborRights: "కార్మిక హక్కులు",
    womenRights: "మహిళా హక్కులు",
    general: "సాధారణ",
    
    // Services
    legalConsultation: "న్యాయ సలహా",
    laborDispute: "కార్మిక వివాదం",
    workplaceHarassment: "కార్యాలయ వేధింపులు",
    
    // Common
    yes: "అవును",
    no: "లేదు",
    cancel: "రద్దు చేయండి",
    save: "సేవ్ చేయండి",
    delete: "తొలగించండి",
    loading: "లోడ్ అవుతోంది...",
    error: "లోపం",
    success: "విజయం",
    warning: "హెచ్చరిక",
    info: "సమాచారం",
    
    // Validation Messages
    fieldRequired: "ఈ ఫీల్డ్ అవసరం",
    invalidInput: "తప్పు ఇన్‌పుట్",
    documentGenerated: "పత్రం రూపొందించబడింది",
    documentSaved: "పత్రం సేవ్ చేయబడింది",
    documentShared: "పత్రం షేర్ చేయబడింది",
    
    // Disclaimers
    disclaimer: "నిరాకరణ",
    disclaimerText: "ఈ పత్రం న్యాయసాథి AI చే స్వయంచాలకంగా రూపొందించబడింది. సమర్పించే ముందు సమీక్షించండి.",
    
    // Status
    completed: "పూర్తయింది",
    pending: "పెండింగ్‌లో",
    escalated: "పంపబడింది",
    approved: "ఆమోదించబడింది",
    rejected: "తిరస్కరించబడింది",
    needsRevision: "సవరణ అవసరం",
    
    // Profile/Admin (Profile view)
    profileTitle: "ప్రొఫైల్",
    profileSubtitle: "మీ ఖాతా మరియు అభిరుచులను నిర్వహించండి",
    accountDetails: "ఖాతా వివరాలు",
    fullName: "పూర్తి పేరు",
    namePlaceholder: "మీ పేరు",
    emailLabel: "ఈమెయిల్",
    emailPlaceholder: "you@example.com",
    phoneLabel: "ఫోన్",
    phonePlaceholder: "+91-",
    locationLabel: "ప్రాంతం",
    locationPlaceholder: "జిల్లా, రాష్ట్రం",
    preferredLanguageLabel: "ఇష్టమైన భాష",
    voiceAssist: "వాయిస్ సహాయం",
    notifications: "ప్రకటనలు",
    saveChanges: "మార్పులను సేవ్ చేయండి",
    saved: "సేవ్ అయింది",
    quickInfo: "త్వరిత సమాచారం",
    languageLabelShort: "భాష",
    voiceAssistOn: "ఆన్",
    voiceAssistOff: "ఆఫ్",
    notificationsOn: "ఆన్",
    notificationsOff: "ఆఫ్",
    loadingSessions: "సెషన్లు లోడ్ అవుతున్నాయి...",
    noSessionData: "సెషన్ డేటా అందుబాటులో లేదు.",
    failedToLoadSessions: "ఇటీవలి సెషన్లు లోడ్ చేయడంలో విఫలమైంది",
    tableSession: "సెషన్",
    tableLanguage: "భాష",
    tableDocType: "పత్రం రకం",
    tableStatus: "స్థితి",
    tableConfidence: "నమ్మకం",
    tableCreated: "సృష్టించబడింది"
  },
  
  kn: {
    // Header
    appName: "ನ್ಯಾಯಸಾಥಿ",
    appSubtitle: "NyaySathi",
    home: "ಮುಖ್ಯ",
    chat: "ಚಾಟ್",
    help: "ಸಹಾಯ",
    admin: "ಆಡಳಿತ",
    
    // Home Page
    welcomeTitle: "ನ್ಯಾಯಸಾಥಿಗೆ ಸ್ವಾಗತ",
    welcomeSubtitle: "ಗ್ರಾಮಗಳಲ್ಲೂ ನ್ಯಾಯ ಸಿಗಲಿ",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "ಈಗಲೇ ಪ್ರಾರಂಭಿಸಿ",
    findLegalAid: "ಕಾನೂನು ಸಹಾಯ ಹುಡುಕಿ",
    languages: "ಭಾಷೆಗಳು",
    free: "100% ಉಚಿತ",
    available24x7: "24/7 ಲಭ್ಯ",
    
    // Features
    voiceFirst: "ಧ್ವನಿ ಮೊದಲು",
    voiceFirstDesc: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ, ನಾವು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ",
    legalDocuments: "ಕಾನೂನು ದಾಖಲೆಗಳು",
    legalDocumentsDesc: "ತಕ್ಷಣವೇ ದೂರುಗಳು ಮತ್ತು ಅರ್ಜಿಗಳನ್ನು ರಚಿಸಿ",
    ngoSupport: "NGO ಬೆಂಬಲ",
    ngoSupportDesc: "ಸ್ಥಳೀಯ ಕಾನೂನು ಸಹಾಯದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
    safePrivate: "ಸುರಕ್ಷಿತ ಮತ್ತು ಖಾಸಗಿ",
    safePrivateDesc: "ನಿಮ್ಮ ಮಾಹಿತಿ ಸಂಪೂರ್ಣವಾಗಿ ಸುರಕ್ಷಿತ",
    
    // Use Cases
    wageIssues: "ವೇತನ ಸಮಸ್ಯೆಗಳು",
    wageIssuesDesc: "ಮಾಲೀಕರು ಸಂಬಳ ಕೊಡದಿದ್ದರೆ",
    rtiRequests: "RTI ವಿನಂತಿಗಳು",
    rtiRequestsDesc: "ಮಾಹಿತಿ ಹಕ್ಕು ಅರ್ಜಿಗಳು",
    pensionIssues: "ಪಿಂಚಣಿ ಸಮಸ್ಯೆಗಳು",
    pensionIssuesDesc: "ಪಿಂಚಣಿ ಸಿಗದ ದೂರುಗಳು",
    rentDisputes: "ಬಾಡಿಗೆ ವಿವಾದಗಳು",
    rentDisputesDesc: "ಮನೆ ಮಾಲೀಕರೊಂದಿಗೆ ಸಮಸ್ಯೆಗಳು",
    
    // How it Works
    howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?",
    step1Title: "ನಿಮ್ಮ ಸಮಸ್ಯೆ ಹೇಳಿ",
    step1Desc: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ",
    step2Title: "ದಾಖಲೆ ರಚಿಸಿ",
    step2Desc: "AI ನಿಮಗಾಗಿ ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ತಯಾರಿಸುತ್ತದೆ",
    step3Title: "ಸಹಾಯ ಪಡೆಯಿರಿ",
    step3Desc: "NGO ಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿ",
    
    // CTA
    startNowCta: "ಈಗಲೇ ಪ್ರಾರಂಭಿಸಿ",
    startNowCtaDesc: "ನಿಮ್ಮ ಸಮಸ್ಯೆಯ ಪರಿಹಾರ ಕೇವಲ ಒಂದು ಕ್ಲಿಕ್ ದೂರದಲ್ಲಿದೆ",
    talkToNyaysathi: "ನ್ಯಾಯಸಾಥಿಯೊಂದಿಗೆ ಮಾತನಾಡಿ",
    
    // Conversation Page
    talkToAssistant: "ನ್ಯಾಯಸಾಥಿಯೊಂದಿಗೆ ಮಾತನಾಡಿ",
    yourLegalAssistant: "ನಿಮ್ಮ ಕಾನೂನು ಸಹಾಯಕ",
    online: "ಆನ್‌ಲೈನ್",
    typing: "ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...",
    suggestions: "ಸಲಹೆಗಳು:",
    readyToGenerate: "ದಾಖಲೆ ರಚಿಸಲು ಸಿದ್ಧ",
    readyToGenerateDesc: "ನಿಮ್ಮ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಕಾನೂನು ದಾಖಲೆ ರಚಿಸಿ",
    generateDocument: "ದಾಖಲೆ ರಚಿಸಿ",
    tellYourProblem: "ನಿಮ್ಮ ಸಮಸ್ಯೆ ಹೇಳಿ...",
    speakOrType: "ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ",
    needHelp: "ಸಹಾಯ ಬೇಕೇ?",
    language: "ಭಾಷೆ: ಕನ್ನಡ",
    
    // Document View
    documentNotFound: "ದಾಖಲೆ ಸಿಗಲಿಲ್ಲ",
    documentNotFoundDesc: "ದಾಖಲೆ ಲೋಡ್ ಮಾಡಲಾಗಲಿಲ್ಲ",
    createNewDocument: "ಹೊಸ ದಾಖಲೆ ರಚಿಸಿ",
    backToChat: "ಹಿಂತಿರುಗಿ",
    documentId: "ದಾಖಲೆ ID:",
    reliable: "ವಿಶ್ವಾಸಾರ್ಹ",
    summary: "ಸಾರಾಂಶ",
    documentDetails: "ದಾಖಲೆ ವಿವರಗಳು",
    factsAndDetails: "ಸತ್ಯಗಳು ಮತ್ತು ವಿವರಗಳು:",
    petitioner: "ಅರ್ಜಿದಾರ:",
    respondent: "ಪ್ರತಿವಾದಿ:",
    addressNotProvided: "ವಿಳಾಸ ನೀಡಲಾಗಿಲ್ಲ",
    reliefSought: "ಕೋರಿದ ಪರಿಹಾರ:",
    prayer: "ಪ್ರಾರ್ಥನೆ:",
    actions: "ಕ್ರಿಯೆಗಳು",
    downloadPdf: "PDF ಡೌನ್‌ಲೋಡ್",
    share: "ಹಂಚಿಕೊಳ್ಳಿ",
    edit: "ಸಂಪಾದಿಸಿ",
    sendToNgo: "NGO ಗೆ ಕಳುಹಿಸಿ",
    requiredDocuments: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
    noSpecialDocuments: "ವಿಶೇಷ ದಾಖಲೆಗಳ ಅಗತ್ಯವಿಲ್ಲ",
    filingOffice: "ಸಲ್ಲಿಸುವ ಕಚೇರಿ",
    verificationStatus: "ಪರಿಶೀಲನೆ ಸ್ಥಿತಿ",
    validDocument: "ಮಾನ್ಯ ದಾಖಲೆ",
    errorFound: "ದೋಷ ಕಂಡುಬಂದಿದೆ",
    warnings: "ಎಚ್ಚರಿಕೆಗಳು:",
    errors: "ದೋಷಗಳು:",
    humanReviewRequired: "ಈ ದಾಖಲೆಗೆ ಮಾನವ ಪರಿಶೀಲನೆ ಅಗತ್ಯ",
    humanReviewRequiredDesc: "ದಯವಿಟ್ಟು ಸ್ಥಳೀಯ ಕಾನೂನು ಸಹಾಯವನ್ನು ಸಂಪರ್ಕಿಸಿ",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO ಮತ್ತು ಕಾನೂನು ಸಹಾಯ ಡೈರೆಕ್ಟರಿ",
    ngoDirectoryDesc: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಕಾನೂನು ಸಹಾಯಕ್ಕಾಗಿ ವಿಶ್ವಾಸಾರ್ಹ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
    documentReady: "ನಿಮ್ಮ ದಾಖಲೆ ಸಿದ್ಧ. ಸಹಾಯಕ್ಕಾಗಿ ಕೆಳಗೆ NGO ಆಯ್ಕೆ ಮಾಡಿ ಕಳುಹಿಸಿ.",
    documentReadyDesc: "ದಾಖಲೆ ಸಿದ್ಧ",
    searchNgoOrDistrict: "NGO ಹೆಸರು ಅಥವಾ ಜಿಲ್ಲೆ ಹುಡುಕಿ...",
    allStates: "ಎಲ್ಲಾ ರಾಜ್ಯಗಳು",
    allServices: "ಎಲ್ಲಾ ಸೇವೆಗಳು",
    allLanguages: "ಎಲ್ಲಾ ಭಾಷೆಗಳು",
    noNgoFound: "NGO ಸಿಗಲಿಲ್ಲ",
    noNgoFoundDesc: "ನಿಮ್ಮ ಹುಡುಕಾಟ ಮಾನದಂಡಗಳನ್ನು ಬದಲಾಯಿಸಿ ಪ್ರಯತ್ನಿಸಿ",
    institutionsFound: "ಸಂಸ್ಥೆಗಳು ಸಿಕ್ಕಿವೆ",
    sortedByRating: "ರೇಟಿಂಗ್ ಪ್ರಕಾರ ವಿಂಗಡಿಸಲಾಗಿದೆ",
    contactUs: "ಸಂಪರ್ಕಿಸಿ:",
    sendDocument: "ದಾಖಲೆ ಕಳುಹಿಸಿ",
    sent: "ಕಳುಹಿಸಲಾಗಿದೆ!",
    contactInfo: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    close: "ಮುಚ್ಚಿ",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "ನ್ಯಾಯಸಾಥಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "ಒಟ್ಟು ಸಂಭಾಷಣೆಗಳು",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "ರಚಿಸಿದ ದಾಖಲೆಗಳು",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "NGO ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "ವೇತನ ದೂರು",
    rtiRequest: "RTI ವಿನಂತಿ",
    pensionClaim: "ಪಿಂಚಣಿ ಹಕ್ಕು",
    tenancyDispute: "ಬಾಡಿಗೆ ವಿವಾದ",
    
    // NGO Types
    legalAid: "ಕಾನೂನು ಸಹಾಯ",
    laborRights: "ಕಾರ್ಮಿಕ ಹಕ್ಕುಗಳು",
    womenRights: "ಮಹಿಳಾ ಹಕ್ಕುಗಳು",
    general: "ಸಾಮಾನ್ಯ",
    
    // Services
    legalConsultation: "ಕಾನೂನು ಸಲಹೆ",
    laborDispute: "ಕಾರ್ಮಿಕ ವಿವಾದ",
    workplaceHarassment: "ಕೆಲಸದ ಸ್ಥಳದ ಕಿರುಕುಳ",
    
    // Common
    yes: "ಹೌದು",
    no: "ಇಲ್ಲ",
    cancel: "ರದ್ದುಮಾಡಿ",
    save: "ಉಳಿಸಿ",
    delete: "ಅಳಿಸಿ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    error: "ದೋಷ",
    success: "ಯಶಸ್ಸು",
    warning: "ಎಚ್ಚರಿಕೆ",
    info: "ಮಾಹಿತಿ",
    
    // Validation Messages
    fieldRequired: "ಈ ಕ್ಷೇತ್ರ ಅಗತ್ಯ",
    invalidInput: "ತಪ್ಪು ಇನ್‌ಪುಟ್",
    documentGenerated: "ದಾಖಲೆ ರಚಿಸಲಾಗಿದೆ",
    documentSaved: "ದಾಖಲೆ ಉಳಿಸಲಾಗಿದೆ",
    documentShared: "ದಾಖಲೆ ಹಂಚಲಾಗಿದೆ",
    
    // Disclaimers
    disclaimer: "ನಿರಾಕರಣೆ",
    disclaimerText: "ಈ ದಾಖಲೆ ನ್ಯಾಯಸಾಥಿ AI ಯಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿಸಲಾಗಿದೆ. ಸಲ್ಲಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.",
    
    // Status
    completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    pending: "ಬಾಕಿ",
    escalated: "ಕಳುಹಿಸಲಾಗಿದೆ",
    approved: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
    rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",
    needsRevision: "ಪರಿಷ್ಕರಣೆ ಅಗತ್ಯ",
    
    // Profile/Admin (Profile view)
    profileTitle: "ಪ್ರೊಫೈಲ್",
    profileSubtitle: "ನಿಮ್ಮ ಖಾತೆ ಮತ್ತು ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    accountDetails: "ಖಾತೆ ವಿವರಗಳು",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    namePlaceholder: "ನಿಮ್ಮ ಹೆಸರು",
    emailLabel: "ಇಮೇಲ್",
    emailPlaceholder: "you@example.com",
    phoneLabel: "ಫೋನ್",
    phonePlaceholder: "+91-",
    locationLabel: "ಸ್ಥಳ",
    locationPlaceholder: "ಜಿಲ್ಲೆ, ರಾಜ್ಯ",
    preferredLanguageLabel: "ಆದ್ಯ ಭಾಷೆ",
    voiceAssist: "ಧ್ವನಿ ಸಹಾಯಕ",
    notifications: "ಅಧಿಸೂಚನೆಗಳು",
    saveChanges: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
    saved: "ಉಳಿಸಲಾಗಿದೆ",
    quickInfo: "ತ್ವರಿತ ಮಾಹಿತಿ",
    languageLabelShort: "ಭಾಷೆ",
    voiceAssistOn: "ಆನ್",
    voiceAssistOff: "ಆಫ್",
    notificationsOn: "ಆನ್",
    notificationsOff: "ಆಫ್",
    loadingSessions: "ಅಧಿವೇಶನಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
    noSessionData: "ಸೆಷನ್ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ.",
    failedToLoadSessions: "ಇತ್ತೀಚಿನ ಸೆಷನ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ",
    tableSession: "ಸೆಷನ್",
    tableLanguage: "ಭಾಷೆ",
    tableDocType: "ದಾಖಲೆ ಪ್ರಕಾರ",
    tableStatus: "ಸ್ಥಿತಿ",
    tableConfidence: "ವಿಶ್ವಾಸ",
    tableCreated: "ರಚಿಸಲಾಗಿದೆ"
  },
  
  bn: {
    // Header
    appName: "ন্যায়সাথী",
    appSubtitle: "NyaySathi",
    home: "হোম",
    chat: "চ্যাট",
    help: "সাহায্য",
    admin: "অ্যাডমিন",
    
    // Home Page
    welcomeTitle: "ন্যায়সাথীতে স্বাগতম",
    welcomeSubtitle: "গ্রামেও ন্যায়বিচার পৌঁছে যাক",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "এখনই শুরু করুন",
    findLegalAid: "আইনি সহায়তা খুঁজুন",
    languages: "ভাষাসমূহ",
    free: "১০০% বিনামূল্যে",
    available24x7: "২৪/৭ উপলব্ধ",
    
    // Features
    voiceFirst: "কণ্ঠস্বর প্রথম",
    voiceFirstDesc: "আপনার ভাষায় কথা বলুন, আমরা বুঝব",
    legalDocuments: "আইনি নথি",
    legalDocumentsDesc: "তাৎক্ষণিক অভিযোগ এবং আবেদন তৈরি করুন",
    ngoSupport: "এনজিও সহায়তা",
    ngoSupportDesc: "স্থানীয় আইনি সহায়তার সাথে যুক্ত হন",
    safePrivate: "নিরাপদ এবং ব্যক্তিগত",
    safePrivateDesc: "আপনার তথ্য সম্পূর্ণ নিরাপদ",
    
    // Use Cases
    wageIssues: "মজুরি সমস্যা",
    wageIssuesDesc: "মালিক বেতন না দিলে",
    rtiRequests: "RTI অনুরোধ",
    rtiRequestsDesc: "তথ্য অধিকার আবেদন",
    pensionIssues: "পেনশন সমস্যা",
    pensionIssuesDesc: "পেনশন না পাওয়ার অভিযোগ",
    rentDisputes: "ভাড়া বিরোধ",
    rentDisputesDesc: "বাড়িওয়ালার সাথে সমস্যা",
    
    // How it Works
    howItWorks: "এটি কীভাবে কাজ করে?",
    step1Title: "আপনার সমস্যা বলুন",
    step1Desc: "আপনার ভাষায় কথা বলুন বা টাইপ করুন",
    step2Title: "নথি তৈরি করুন",
    step2Desc: "AI আপনার জন্য আইনি নথি প্রস্তুত করবে",
    step3Title: "সাহায্য নিন",
    step3Desc: "এনজিওর সাথে যোগাযোগ করুন বা নথি জমা দিন",
    
    // CTA
    startNowCta: "এখনই শুরু করুন",
    startNowCtaDesc: "আপনার সমস্যার সমাধান মাত্র এক ক্লিক দূরে",
    talkToNyaysathi: "ন্যায়সাথীর সাথে কথা বলুন",
    
    // Conversation Page
    talkToAssistant: "ন্যায়সাথীর সাথে কথা বলুন",
    yourLegalAssistant: "আপনার আইনি সহায়ক",
    online: "অনলাইন",
    typing: "টাইপ করছে...",
    suggestions: "পরামর্শ:",
    readyToGenerate: "নথি তৈরি করতে প্রস্তুত",
    readyToGenerateDesc: "আপনার তথ্যের ভিত্তিতে আইনি নথি তৈরি করুন",
    generateDocument: "নথি তৈরি করুন",
    tellYourProblem: "আপনার সমস্যা বলুন...",
    speakOrType: "কথা বলুন বা টাইপ করুন",
    needHelp: "সাহায্য দরকার?",
    language: "ভাষা: বাংলা",
    
    // Document View
    documentNotFound: "নথি পাওয়া যায়নি",
    documentNotFoundDesc: "নথি লোড করা যায়নি",
    createNewDocument: "নতুন নথি তৈরি করুন",
    backToChat: "ফিরে যান",
    documentId: "নথি ID:",
    reliable: "নির্ভরযোগ্য",
    summary: "সারসংক্ষেপ",
    documentDetails: "নথির বিবরণ",
    factsAndDetails: "তথ্য এবং বিবরণ:",
    petitioner: "আবেদনকারী:",
    respondent: "প্রতিবাদী:",
    addressNotProvided: "ঠিকানা দেওয়া হয়নি",
    reliefSought: "চাওয়া ত্রাণ:",
    prayer: "প্রার্থনা:",
    actions: "কর্ম",
    downloadPdf: "PDF ডাউনলোড",
    share: "শেয়ার করুন",
    edit: "সম্পাদনা",
    sendToNgo: "এনজিওতে পাঠান",
    requiredDocuments: "প্রয়োজনীয় নথি",
    noSpecialDocuments: "কোনো বিশেষ নথির প্রয়োজন নেই",
    filingOffice: "দাখিল অফিস",
    verificationStatus: "যাচাইকরণ অবস্থা",
    validDocument: "বৈধ নথি",
    errorFound: "ত্রুটি পাওয়া গেছে",
    warnings: "সতর্কতা:",
    errors: "ত্রুটি:",
    humanReviewRequired: "এই নথির জন্য মানুষের পর্যালোচনা প্রয়োজন",
    humanReviewRequiredDesc: "অনুগ্রহ করে স্থানীয় আইনি সহায়তার সাথে যোগাযোগ করুন",
    
    // NGO Directory
    ngoDirectoryTitle: "এনজিও এবং আইনি সহায়তা ডিরেক্টরি",
    ngoDirectoryDesc: "আপনার এলাকায় আইনি সহায়তার জন্য বিশ্বস্ত সংস্থার সাথে যুক্ত হন",
    documentReady: "আপনার নথি প্রস্তুত। সাহায্যের জন্য নিচে এনজিও নির্বাচন করে পাঠান।",
    documentReadyDesc: "নথি প্রস্তুত",
    searchNgoOrDistrict: "এনজিওর নাম বা জেলা খুঁজুন...",
    allStates: "সব রাজ্য",
    allServices: "সব সেবা",
    allLanguages: "সব ভাষা",
    noNgoFound: "কোনো এনজিও পাওয়া যায়নি",
    noNgoFoundDesc: "আপনার অনুসন্ধানের মানদণ্ড পরিবর্তন করে চেষ্টা করুন",
    institutionsFound: "প্রতিষ্ঠান পাওয়া গেছে",
    sortedByRating: "রেটিং অনুযায়ী সাজানো",
    contactUs: "যোগাযোগ:",
    sendDocument: "নথি পাঠান",
    sent: "পাঠানো হয়েছে!",
    contactInfo: "যোগাযোগের তথ্য",
    close: "বন্ধ করুন",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "ন্যায়সাথী প্ল্যাটফর্ম পর্যবেক্ষণ এবং বিশ্লেষণ",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "মোট কথোপকথন",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "তৈরি করা নথি",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "এনজিওতে পাঠানো",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "মজুরি অভিযোগ",
    rtiRequest: "RTI অনুরোধ",
    pensionClaim: "পেনশন দাবি",
    tenancyDispute: "ভাড়া বিরোধ",
    
    // NGO Types
    legalAid: "আইনি সহায়তা",
    laborRights: "শ্রমিক অধিকার",
    womenRights: "নারী অধিকার",
    general: "সাধারণ",
    
    // Services
    legalConsultation: "আইনি পরামর্শ",
    laborDispute: "শ্রমিক বিরোধ",
    workplaceHarassment: "কর্মক্ষেত্রে হয়রানি",
    
    // Common
    yes: "হ্যাঁ",
    no: "না",
    cancel: "বাতিল করুন",
    save: "সংরক্ষণ করুন",
    delete: "মুছে ফেলুন",
    loading: "লোড হচ্ছে...",
    error: "ত্রুটি",
    success: "সফল",
    warning: "সতর্কতা",
    info: "তথ্য",
    
    // Validation Messages
    fieldRequired: "এই ক্ষেত্রটি প্রয়োজনীয়",
    invalidInput: "ভুল ইনপুট",
    documentGenerated: "নথি তৈরি হয়েছে",
    documentSaved: "নথি সংরক্ষিত হয়েছে",
    documentShared: "নথি শেয়ার হয়েছে",
    
    // Disclaimers
    disclaimer: "দাবিত্যাগ",
    disclaimerText: "এই নথিটি ন্যায়সাথী AI দ্বারা স্বয়ংক্রিয়ভাবে তৈরি। জমা দেওয়ার আগে পর্যালোচনা করুন।",
    
    // Status
    completed: "সম্পন্ন",
    pending: "অপেক্ষমাণ",
    escalated: "পাঠানো হয়েছে",
    approved: "অনুমোদিত",
    rejected: "প্রত্যাখ্যাত",
    needsRevision: "সংশোধন প্রয়োজন",
    
    // Profile/Admin (Profile view)
    profileTitle: "প্রোফাইল",
    profileSubtitle: "আপনার অ্যাকাউন্ট ও পছন্দসমূহ পরিচালনা করুন",
    accountDetails: "অ্যাকাউন্টের বিবরণ",
    fullName: "পূর্ণ নাম",
    namePlaceholder: "আপনার নাম",
    emailLabel: "ইমেইল",
    emailPlaceholder: "you@example.com",
    phoneLabel: "ফোন",
    phonePlaceholder: "+91-",
    locationLabel: "অবস্থান",
    locationPlaceholder: "জেলা, রাজ্য",
    preferredLanguageLabel: "পছন্দের ভাষা",
    voiceAssist: "ভয়েস সহায়তা",
    notifications: "বিজ্ঞপ্তি",
    saveChanges: "পরিবর্তন সংরক্ষণ করুন",
    saved: "সংরক্ষণ করা হয়েছে",
    quickInfo: "দ্রুত তথ্য",
    languageLabelShort: "ভাষা",
    voiceAssistOn: "চালু",
    voiceAssistOff: "বন্ধ",
    notificationsOn: "চালু",
    notificationsOff: "বন্ধ",
    loadingSessions: "সেশন লোড হচ্ছে...",
    noSessionData: "কোন সেশন ডেটা পাওয়া যায়নি।",
    failedToLoadSessions: "সাম্প্রতিক সেশন লোড করা যায়নি",
    tableSession: "সেশন",
    tableLanguage: "ভাষা",
    tableDocType: "ডকুমেন্ট ধরন",
    tableStatus: "অবস্থা",
    tableConfidence: "আস্থার মাত্রা",
    tableCreated: "তৈরি"
  },
  
  gu: {
    // Header
    appName: "ન્યાયસાથી",
    appSubtitle: "NyaySathi",
    home: "હોમ",
    chat: "ચેટ",
    help: "મદદ",
    admin: "એડમિન",
    
    // Home Page
    welcomeTitle: "ન્યાયસાથીમાં આપનું સ્વાગત છે",
    welcomeSubtitle: "ગામડામાં પણ ન્યાય મળે",
    welcomeDescription: "AI-powered legal assistance for rural India",
    startNow: "હવે જ શરૂ કરો",
    findLegalAid: "કાનૂની મદદ શોધો",
    languages: "ભાષાઓ",
    free: "100% મફત",
    available24x7: "24/7 ઉપલબ્ધ",
    
    // Features
    voiceFirst: "અવાજ પહેલા",
    voiceFirstDesc: "તમારી ભાષામાં બોલો, અમે સમજીશું",
    legalDocuments: "કાનૂની દસ્તાવેજો",
    legalDocumentsDesc: "તાત્કાલિક ફરિયાદો અને અરજીઓ બનાવો",
    ngoSupport: "NGO સહાય",
    ngoSupportDesc: "સ્થાનિક કાનૂની મદદ સાથે જોડાઓ",
    safePrivate: "સુરક્ષિત અને ખાનગી",
    safePrivateDesc: "તમારી માહિતી સંપૂર્ણપણે સુરક્ષિત છે",
    
    // Use Cases
    wageIssues: "વેતન સમસ્યાઓ",
    wageIssuesDesc: "જો માલિક પગાર ન આપે",
    rtiRequests: "RTI વિનંતીઓ",
    rtiRequestsDesc: "માહિતીના અધિકારની અરજીઓ",
    pensionIssues: "પેન્શન સમસ્યાઓ",
    pensionIssuesDesc: "પેન્શન ન મળવાની ફરિયાદો",
    rentDisputes: "ભાડા વિવાદો",
    rentDisputesDesc: "મકાન માલિક સાથે સમસ્યાઓ",
    
    // How it Works
    howItWorks: "આ કેવી રીતે કામ કરે છે?",
    step1Title: "તમારી સમસ્યા કહો",
    step1Desc: "તમારી ભાષામાં બોલો અથવા ટાઇપ કરો",
    step2Title: "દસ્તાવેજ બનાવો",
    step2Desc: "AI તમારા માટે કાનૂની દસ્તાવેજો તૈયાર કરશે",
    step3Title: "મદદ લો",
    step3Desc: "NGO સાથે જોડાઓ અથવા દસ્તાવેજો જમા કરો",
    
    // CTA
    startNowCta: "હવે જ શરૂ કરો",
    startNowCtaDesc: "તમારી સમસ્યાનો ઉકેલ માત્ર એક ક્લિક દૂર છે",
    talkToNyaysathi: "ન્યાયસાથી સાથે વાત કરો",
    
    // Conversation Page
    talkToAssistant: "ન્યાયસાથી સાથે વાત કરો",
    yourLegalAssistant: "તમારા કાનૂની સહાયક",
    online: "ઓનલાઇન",
    typing: "ટાઇપ કરી રહ્યું છે...",
    suggestions: "સૂચનો:",
    readyToGenerate: "દસ્તાવેજ બનાવવા માટે તૈયાર",
    readyToGenerateDesc: "તમારી માહિતીના આધારે કાનૂની દસ્તાવેજ બનાવો",
    generateDocument: "દસ્તાવેજ બનાવો",
    tellYourProblem: "તમારી સમસ્યા કહો...",
    speakOrType: "બોલો અથવા ટાઇપ કરો",
    needHelp: "મદદ જોઈએ છે?",
    language: "ભાષા: ગુજરાતી",
    
    // Document View
    documentNotFound: "દસ્તાવેજ મળ્યો નથી",
    documentNotFoundDesc: "દસ્તાવેજ લોડ કરી શકાયો નથી",
    createNewDocument: "નવો દસ્તાવેજ બનાવો",
    backToChat: "પાછા જાઓ",
    documentId: "દસ્તાવેજ ID:",
    reliable: "વિશ્વસનીય",
    summary: "સારાંશ",
    documentDetails: "દસ્તાવેજ વિગતો",
    factsAndDetails: "તથ્યો અને વિગતો:",
    petitioner: "અરજદાર:",
    respondent: "પ્રતિવાદી:",
    addressNotProvided: "સરનામું આપવામાં આવ્યું નથી",
    reliefSought: "માંગેલ રાહત:",
    prayer: "પ્રાર્થના:",
    actions: "ક્રિયાઓ",
    downloadPdf: "PDF ડાઉનલોડ",
    share: "શેર કરો",
    edit: "સંપાદન",
    sendToNgo: "NGO ને મોકલો",
    requiredDocuments: "જરૂરી દસ્તાવેજો",
    noSpecialDocuments: "કોઈ વિશેષ દસ્તાવેજોની જરૂર નથી",
    filingOffice: "ફાઇલિંગ ઓફિસ",
    verificationStatus: "ચકાસણી સ્થિતિ",
    validDocument: "માન્ય દસ્તાવેજ",
    errorFound: "ભૂલ મળી",
    warnings: "ચેતવણીઓ:",
    errors: "ભૂલો:",
    humanReviewRequired: "આ દસ્તાવેજ માટે માનવ સમીક્ષા જરૂરી છે",
    humanReviewRequiredDesc: "કૃપા કરીને સ્થાનિક કાનૂની મદદનો સંપર્ક કરો",
    
    // NGO Directory
    ngoDirectoryTitle: "NGO અને કાનૂની મદદ ડિરેક્ટરી",
    ngoDirectoryDesc: "તમારા વિસ્તારમાં કાનૂની મદદ માટે વિશ્વસનીય સંસ્થાઓ સાથે જોડાઓ",
    documentReady: "તમારો દસ્તાવેજ તૈયાર છે. મદદ માટે નીચે NGO પસંદ કરીને મોકલો.",
    documentReadyDesc: "દસ્તાવેજ તૈયાર",
    searchNgoOrDistrict: "NGO નામ અથવા જિલ્લો શોધો...",
    allStates: "બધા રાજ્યો",
    allServices: "બધી સેવાઓ",
    allLanguages: "બધી ભાષાઓ",
    noNgoFound: "કોઈ NGO મળ્યો નથી",
    noNgoFoundDesc: "તમારા શોધ માપદંડો બદલીને પ્રયાસ કરો",
    institutionsFound: "સંસ્થાઓ મળી",
    sortedByRating: "રેટિંગ પ્રમાણે ગોઠવાયેલ",
    contactUs: "સંપર્ક:",
    sendDocument: "દસ્તાવેજ મોકલો",
    sent: "મોકલાયો!",
    contactInfo: "સંપર્ક માહિતી",
    close: "બંધ કરો",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    adminDashboardDesc: "ન્યાયસાથી પ્લેટફોર્મની દેખરેખ અને વિશ્લેષણ",
    refresh: "Refresh",
    totalSessions: "Total Sessions",
    totalConversations: "કુલ વાતચીત",
    documentsGenerated: "Documents Generated",
    generatedDocuments: "બનાવેલા દસ્તાવેજો",
    ngoEscalations: "NGO Escalations",
    sentToNgo: "NGO ને મોકલાયેલ",
    successRate: "Success Rate",
    platformMetrics: "Platform Metrics",
    averageConfidenceScore: "Average Confidence Score",
    supportedLanguages: "Supported Languages",
    documentTypes: "Document Types",
    recentSessions: "Recent Sessions",
    systemInformation: "System Information",
    lastUpdated: "Last Updated",
    platformVersion: "Platform Version",
    apiStatus: "API Status",
    active: "Active",
    
    // Document Types
    wageComplaint: "વેતન ફરિયાદ",
    rtiRequest: "RTI વિનંતી",
    pensionClaim: "પેન્શન દાવો",
    tenancyDispute: "ભાડા વિવાદ",
    
    // NGO Types
    legalAid: "કાનૂની મદદ",
    laborRights: "મજૂર અધિકારો",
    womenRights: "મહિલા અધિકારો",
    general: "સામાન્ય",
    
    // Services
    legalConsultation: "કાનૂની સલાહ",
    laborDispute: "મજૂર વિવાદ",
    workplaceHarassment: "કાર્યસ્થળે હેરાનગતિ",
    
    // Common
    yes: "હા",
    no: "ના",
    cancel: "રદ કરો",
    save: "સેવ કરો",
    delete: "ડિલીટ કરો",
    loading: "લોડ થઈ રહ્યું છે...",
    error: "ભૂલ",
    success: "સફળતા",
    warning: "ચેતવણી",
    info: "માહિતી",
    
    // Validation Messages
    fieldRequired: "આ ફીલ્ડ જરૂરી છે",
    invalidInput: "ખોટું ઇનપુટ",
    documentGenerated: "દસ્તાવેજ બન્યો",
    documentSaved: "દસ્તાવેજ સેવ થયો",
    documentShared: "દસ્તાવેજ શેર થયો",
    
    // Disclaimers
    disclaimer: "અસ્વીકરણ",
    disclaimerText: "આ દસ્તાવેજ ન્યાયસાથી AI દ્વારા આપોઆપ બનાવવામાં આવ્યો છે. જમા કરતા પહેલા સમીક્ષા કરો.",
    
    // Status
    completed: "પૂર્ણ",
    pending: "બાકી",
    escalated: "મોકલાયેલ",
    approved: "મંજૂર",
    rejected: "નકારાયેલ",
    needsRevision: "સુધારાની જરૂર",
    
    // Profile/Admin (Profile view)
    profileTitle: "પ્રોફાઇલ",
    profileSubtitle: "તમારા એકાઉન્ટ અને પસંદગીઓ સંચાલિત કરો",
    accountDetails: "એકાઉન્ટ વિગતો",
    fullName: "પૂર્ણ નામ",
    namePlaceholder: "તમારું નામ",
    emailLabel: "ઇમેઇલ",
    emailPlaceholder: "you@example.com",
    phoneLabel: "ફોન",
    phonePlaceholder: "+91-",
    locationLabel: "સ્થાન",
    locationPlaceholder: "જિલ્લો, રાજ્ય",
    preferredLanguageLabel: "પસંદની ભાષા",
    voiceAssist: "વૉઇસ સહાય",
    notifications: "સૂચનાઓ",
    saveChanges: "ફેરફારો સાચવો",
    saved: "સાચવાયું",
    quickInfo: "ઝડપી માહિતી",
    languageLabelShort: "ભાષા",
    voiceAssistOn: "ચાલુ",
    voiceAssistOff: "બંધ",
    notificationsOn: "ચાલુ",
    notificationsOff: "બંધ",
    loadingSessions: "સેશન લોડ થઈ રહ્યા છે...",
    noSessionData: "સેશન ડેટા ઉપલબ્ધ નથી.",
    failedToLoadSessions: "તાજેતરના સેશન લોડ કરવામાં નિષ્ફળ",
    tableSession: "સેશન",
    tableLanguage: "ભાષા",
    tableDocType: "દસ્તાવેજ પ્રકાર",
    tableStatus: "સ્થિતિ",
    tableConfidence: "વિશ્વાસ",
    tableCreated: "બનાવેલું"
  }
};

export function getLanguageContent(languageCode: string): LanguageContent {
  const en = languages.en as LanguageContent;
  const selected = languages[languageCode] || {};
  // Merge selected over English defaults to ensure all keys are present
  return { ...en, ...selected } as LanguageContent;
}

export const supportedLanguages = [
  { code: 'hi', name: 'हिंदी', nativeName: 'हिंदी' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' }
];