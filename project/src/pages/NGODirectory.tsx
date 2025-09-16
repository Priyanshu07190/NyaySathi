import { useState, useEffect } from 'react';
import { MessageCircle, Users, Shield, Phone, Mail, MapPin, Search } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent, supportedLanguages } from '../utils/languages';

// Export as named to match import in App.tsx
export function NGODirectory() {
  const { currentLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);
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
      });      const response = await fetch(`http://localhost:3001/api/ngo/search?${params}`);
      const data = await response.json();
      setNgos(data.ngos || []);
    } catch (error) {
      console.error('Failed to fetch NGOs:', error);
      setNgos([]);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <Users className="h-10 w-10 text-blue-600 inline-block mr-3" />
          {content.ngoDirectoryTitle}
        </h1>
        <p className="text-xl text-gray-600">{content.ngoDirectoryDesc}</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{content.searchNgoOrDistrict}</label>
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder={content.searchNgoOrDistrict}
                value={searchParams.district}
                onChange={(e) => setSearchParams({...searchParams, district: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{content.allStates}</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchParams.state}
              onChange={(e) => setSearchParams({...searchParams, state: e.target.value})}
            >
              <option value="">{content.allStates}</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="kolkata">Kolkata</option>
              <option value="chennai">Chennai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{content.languages}</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchParams.language}
              onChange={(e) => setSearchParams({...searchParams, language: e.target.value})}
            >
              {supportedLanguages.map(l => (
                <option key={l.code} value={l.code}>{l.nativeName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* NGO Cards */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{content.loading}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.map((ngo) => (
            <div key={ngo.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{ngo.name}</h3>
                  <p className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
                    {ngo.specialization}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{ngo.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{ngo.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">{ngo.email}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">{content.allLanguages}:</p>
                <div className="flex flex-wrap gap-1">
                  {ngo.languages?.map((lang: string, idx: number) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                  onClick={() => window.open(`tel:${ngo.phone}`)}
                >
                  <Phone className="h-4 w-4 inline mr-1" />
                  {content.contactUs}
                </button>
                <button 
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
                  onClick={() => window.open(`mailto:${ngo.email}`)}
                >
                  <Mail className="h-4 w-4 inline mr-1" />
                  Email
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Emergency Contact Section */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-4">
          <Shield className="h-5 w-5 inline mr-2" />
          {content.help}
        </h3>
        <p className="text-red-700 mb-4">{content.available24x7}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 font-semibold"
            onClick={() => window.open('tel:+911234567890')}
          >
            <Phone className="h-5 w-5 inline mr-2" />
            Call: +91-123-456-7890
          </button>
          <button 
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-semibold"
            onClick={() => window.open('https://wa.me/911234567890')}
          >
            <MessageCircle className="h-5 w-5 inline mr-2" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}