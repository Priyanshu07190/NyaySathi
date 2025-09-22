import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Star, Users, Search } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';

export function NGODirectory() {
  const { currentLanguage } = useLanguageStore();
  const [ngos, setNgos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    district: '',
    state: '',
    language: currentLanguage,
    service_type: ''
  });

  useEffect(() => {
    fetchNGOs();
  }, [searchParams]);

  const fetchNGOs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value) params.append(key, String(value));
      });
      
      const response = await fetch(`http://localhost:3001/api/ngo/search?${params}`);
      const data = await response.json();
      setNgos(data.ngos || []);
    } catch (error) {
      console.error('Failed to fetch NGOs:', error);
      // Fallback mock data
      setNgos([
        {
          id: '1',
          name: 'Legal Aid Society Delhi',
          district: 'Delhi',
          state: 'Delhi',
          contact: { phone: '+91-11-23456789', email: 'contact@legalaid.org' },
          services: ['Legal Aid', 'Document Assistance'],
          rating: 4.5,
          description: 'Providing free legal assistance to underprivileged communities'
        },
        {
          id: '2', 
          name: 'Rural Rights Foundation',
          district: 'Mumbai',
          state: 'Maharashtra',
          contact: { phone: '+91-22-87654321', email: 'help@ruralrights.org' },
          services: ['Labor Rights', 'Consumer Protection'],
          rating: 4.2,
          description: 'Fighting for rural and worker rights across India'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (field: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [field]: value }));
  };

  const contactNGO = (ngo: any) => {
    const message = encodeURIComponent(`Hi, I need legal assistance. Can you help me?`);
    if (ngo.contact.phone) {
      window.open(`https://wa.me/${ngo.contact.phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🏛️ NGO Directory - Legal Aid Network
        </h1>
        <p className="text-lg text-gray-600">
          Connect with trusted NGOs and legal aid organizations for help with your legal issues
        </p>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Search className="h-5 w-5 mr-2" />
          Find Legal Aid Near You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <select
              value={searchParams.state}
              onChange={(e) => handleSearchChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All States</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
            <input
              type="text"
              value={searchParams.district}
              onChange={(e) => handleSearchChange('district', e.target.value)}
              placeholder="Enter district"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
            <select
              value={searchParams.service_type}
              onChange={(e) => handleSearchChange('service_type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Services</option>
              <option value="Legal Aid">Legal Aid</option>
              <option value="Labor Rights">Labor Rights</option>
              <option value="Consumer Protection">Consumer Protection</option>
              <option value="Document Assistance">Document Assistance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <select
              value={searchParams.language}
              onChange={(e) => handleSearchChange('language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Languages</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="en">English (अंग्रेजी)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
            </select>
          </div>
        </div>
      </div>

      {/* NGO List */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading NGOs...</p>
          </div>
        ) : ngos.length === 0 ? (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No NGOs found. Try adjusting your search filters.</p>
          </div>
        ) : (
          ngos.map((ngo) => (
            <div key={ngo.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{ngo.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {ngo.district}, {ngo.state}
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{ngo.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({ngo.reviews || '0'} reviews)</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => contactNGO(ngo)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center text-sm"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{ngo.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {ngo.services.map((service: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{ngo.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  <span>{ngo.contact.email}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}