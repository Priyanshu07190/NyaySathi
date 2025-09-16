import { useEffect, useState } from 'react';
import { MessageCircle, AlertTriangle, RefreshCw, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent, supportedLanguages } from '../utils/languages';

interface RecentSession {
  session_id: string;
  language: string;
  document_type: string;
  status: string;
  created_at: string;
  confidence_score: number;
}

interface Profile {
  name: string;
  email: string;
  phone: string;
  location: string;
  preferredLanguage: string;
  voiceAssist: boolean;
  notifications: boolean;
}

export function AdminDashboard() {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);
  const [sessions, setSessions] = useState<RecentSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredLanguage: currentLanguage,
    voiceAssist: true,
    notifications: true
  });
  const [saved, setSaved] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
  const res = await fetch('/api/admin/recent-sessions');
      if (!res.ok) throw new Error(content.failedToLoadSessions);
      const json = await res.json();
      setSessions(json.sessions || []);
    } catch (e: any) {
      setError(content.failedToLoadSessions);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load profile from localStorage
    const raw = localStorage.getItem('nyaysathi_profile');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setProfile((p) => ({ ...p, ...parsed }));
        if (parsed.preferredLanguage && parsed.preferredLanguage !== currentLanguage) {
          setLanguage(parsed.preferredLanguage);
        }
      } catch {}
    }
    loadData();
  }, []);

  // Keep profile state and localStorage in sync with global language changes
  useEffect(() => {
    setProfile((p) => {
      if (p.preferredLanguage === currentLanguage) return p;
      const next = { ...p, preferredLanguage: currentLanguage };
      try { localStorage.setItem('nyaysathi_profile', JSON.stringify(next)); } catch {}
      return next;
    });
  }, [currentLanguage]);

  const handleSave = () => {
    localStorage.setItem('nyaysathi_profile', JSON.stringify(profile));
    setLanguage(profile.preferredLanguage);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
            <User className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{content.profileTitle}</h1>
            <p className="text-gray-500">{content.profileSubtitle}</p>
          </div>
        </div>
        <button onClick={loadData} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
          <RefreshCw className="h-4 w-4" /> {content.refresh}
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm">
          <AlertTriangle className="h-5 w-5" /> {error}
        </div>
      )}

      {/* Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{content.accountDetails}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">{content.fullName}</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full py-2 outline-none" placeholder={content.namePlaceholder} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">{content.emailLabel}</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full py-2 outline-none" placeholder={content.emailPlaceholder} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">{content.phoneLabel}</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="w-full py-2 outline-none" placeholder={content.phonePlaceholder} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">{content.locationLabel}</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <input value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} className="w-full py-2 outline-none" placeholder={content.locationPlaceholder} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">{content.preferredLanguageLabel}</label>
              <select
                value={currentLanguage}
                onChange={(e) => {
                  const lang = e.target.value;
                  const next = { ...profile, preferredLanguage: lang };
                  setProfile(next);
                  setLanguage(lang);
                  try { localStorage.setItem('nyaysathi_profile', JSON.stringify(next)); } catch {}
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                {supportedLanguages.map((l) => (
                  <option key={l.code} value={l.code}>{l.nativeName}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4" checked={profile.voiceAssist} onChange={(e) => setProfile({ ...profile, voiceAssist: e.target.checked })} />
              {content.voiceAssist}
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4" checked={profile.notifications} onChange={(e) => setProfile({ ...profile, notifications: e.target.checked })} />
              {content.notifications}
            </label>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button onClick={handleSave} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">{content.saveChanges}</button>
            {saved && (
              <span className="flex items-center text-green-600 text-sm">
                <CheckCircle className="h-4 w-4 mr-1" /> {content.saved}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{content.quickInfo}</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div><span className="text-gray-500">{content.languageLabelShort}: </span><span className="uppercase">{currentLanguage}</span></div>
            <div><span className="text-gray-500">{content.voiceAssist}: </span>{profile.voiceAssist ? content.voiceAssistOn : content.voiceAssistOff}</div>
            <div><span className="text-gray-500">{content.notifications}: </span>{profile.notifications ? content.notificationsOn : content.notificationsOff}</div>
          </div>
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-blue-600" /> {content.recentSessions}
          </h2>
        </div>
        {loading ? (
          <div className="py-8 text-center text-gray-500 text-sm">{content.loadingSessions}</div>
        ) : sessions.length === 0 ? (
          <div className="py-8 text-center text-gray-500 text-sm">{content.noSessionData}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-2 pr-4">{content.tableSession}</th>
                  <th className="py-2 pr-4">{content.tableLanguage}</th>
                  <th className="py-2 pr-4">{content.tableDocType}</th>
                  <th className="py-2 pr-4">{content.tableStatus}</th>
                  <th className="py-2 pr-4">{content.tableConfidence}</th>
                  <th className="py-2 pr-4">{content.tableCreated}</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr key={s.session_id} className="border-b last:border-none hover:bg-gray-50">
                    <td className="py-2 pr-4 font-medium text-gray-800">{s.session_id}</td>
                    <td className="py-2 pr-4 uppercase text-gray-600">{s.language}</td>
                    <td className="py-2 pr-4 text-gray-700">
                      {s.document_type === 'wage_complaint' ? content.wageComplaint : s.document_type === 'rti_request' ? content.rtiRequest : s.document_type === 'pension_claim' ? content.pensionClaim : s.document_type === 'tenancy_dispute' ? content.tenancyDispute : s.document_type}
                    </td>
                    <td className="py-2 pr-4">
                      {(() => {
                        const label = s.status === 'completed' ? content.completed : s.status === 'escalated' ? content.escalated : content.pending;
                        const cls = s.status === 'completed' ? 'bg-green-100 text-green-700' : s.status === 'escalated' ? 'bg-purple-100 text-purple-700' : 'bg-yellow-100 text-yellow-700';
                        return <span className={`px-2 py-1 rounded text-xs font-medium ${cls}`}>{label}</span>;
                      })()}
                    </td>
                    <td className="py-2 pr-4">{(s.confidence_score * 100).toFixed(0)}%</td>
                    <td className="py-2 pr-4 text-gray-500">{new Date(s.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}