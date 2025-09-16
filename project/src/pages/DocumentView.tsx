import { useParams, Link } from 'react-router-dom';
import { FileText, MessageCircle } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent } from '../utils/languages';

export function DocumentView() {
  const { documentId } = useParams();
  const { currentLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);

  // Mock document data - in real app, this would come from API
  const document = {
    id: documentId || '123',
    title: 'Legal Document',
    type: 'RTI Application',
    content: 'This is a sample document prepared for RTI application. This document contains all the necessary information and legal provisions required for filing an RTI request.',
    createdAt: new Date().toLocaleDateString(),
    status: 'Generated'
  };

  // Document preview section
  const documentInfo = (
    <div className="bg-blue-50 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-2">
        <FileText className="h-5 w-5 text-blue-600 mr-2" />
        <span className="font-semibold text-blue-800">{content.documentDetails}: {document.title}</span>
      </div>
      <p className="text-sm text-blue-600">{content.summary}: {document.type} | {content.verificationStatus}: {document.status}</p>
    </div>
  );

  // Removed marketing sections for lean document view

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Document Info */}
      {documentInfo}
      {/* Lean document view */}
      <div className="prose max-w-none bg-white rounded-lg shadow p-6 mb-12">
        <h1 className="text-2xl font-bold mb-4">{document.title}</h1>
        <p className="text-sm text-gray-500 mb-2">{content.documentId} {document.id}</p>
        <p className="text-sm text-gray-500 mb-6">{content.verificationStatus}: {document.status} · {content.lastUpdated}: {document.createdAt}</p>
        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed mb-8">
          {document.content}
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link to="/conversation" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm inline-flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" /> {content.talkToAssistant}
          </Link>
          <Link to="/ngo" className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:border-blue-400 text-sm">
            {content.ngoSupport}
          </Link>
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="text-blue-600 hover:underline text-sm">← {content.home}</Link>
      </div>
    </div>
  );
}