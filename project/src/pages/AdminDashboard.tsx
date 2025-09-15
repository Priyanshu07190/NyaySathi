import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Users, Shield, Mic, Globe, ArrowRight } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent } from '../utils/languages';

export function Home() {
  const { currentLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);

  const features = [
    {
      icon: Mic,
      title: content.voiceFirst,
      description: content.voiceFirstDesc
    },
    {
      icon: FileText,
      title: content.legalDocuments,
      description: content.legalDocumentsDesc
    },
    {
      icon: Users,
      title: content.ngoSupport,
      description: content.ngoSupportDesc
    },
    {
      icon: Shield,
      title: content.safePrivate,
      description: content.safePrivateDesc
    }
  ];

  const useCases = [
    {
      title: content.wageIssues,
      description: content.wageIssuesDesc,
      icon: '💰'
    },
    {
      title: content.rtiRequests,
      description: content.rtiRequestsDesc,
      icon: '📋'
    },
    {
      title: content.pensionIssues,
      description: content.pensionIssuesDesc,
      icon: '👴'
    },
    {
      title: content.rentDisputes,
      description: content.rentDisputesDesc,
      icon: '🏠'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">{content.appName}</span> {content.welcomeTitle.replace(content.appName, '').replace('में ', '').replace('তে ', '').replace('లో ', '').replace('ಲ್ಲಿ ', '').replace('এ ', '').replace('માં ', '')}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {content.welcomeSubtitle}
          </p>
          <p className="text-lg text-gray-500">
            {content.welcomeDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/conversation"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            {content.startNow}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
          
          <Link
            to="/ngo"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Users className="h-5 w-5 mr-2" />
            कानूनी सहायता खोजें
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <span className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            4+ भाषाएं
          </span>
          <span>•</span>
          <span>100% निःशुल्क</span>
          <span>•</span>
          <span>24/7 उपलब्ध</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-1">{feature.description}</p>
            <p className="text-gray-400 text-xs">{feature.descriptionEn}</p>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            हम किन समस्याओं में मदद करते हैं?
          </h2>
          <p className="text-gray-600">
            Common legal issues we can help you with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
              onClick={() => window.location.href = '/conversation'}
            >
              <div className="text-3xl mb-3">{useCase.icon}</div>
              <h3 className="font-medium text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{useCase.description}</p>
              <p className="text-xs text-gray-400">{useCase.titleEn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          कैसे काम करता है?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'समस्या बताएं',
              description: 'अपनी आवाज़ में या लिखकर समस्या बताएं',
              icon: MessageCircle
            },
            {
              step: '2', 
              title: 'दस्तावेज़ तैयार करें',
              description: 'AI आपके लिए कानूनी दस्तावेज़ तैयार करेगा',
              icon: FileText
            },
            {
              step: '3',
              title: 'मदद लें',
              description: 'एनजीओ से जुड़ें या दस्तावेज़ जमा करें',
              icon: Users
            }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {index < 2 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl shadow-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          अभी शुरू करें
        </h2>
        <p className="text-xl mb-6 opacity-90">
          आपकी समस्या का समाधान सिर्फ एक क्लिक दूर है
        </p>
        <Link
          to="/conversation"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {content.talkToNyaysathi}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}