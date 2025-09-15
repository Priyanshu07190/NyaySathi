import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Home, MessageCircle, FileText, Users, Settings } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent, supportedLanguages } from '../utils/languages';

export function Header() {
  const location = useLocation();
  const { currentLanguage, setLanguage } = useLanguageStore();
  const content = getLanguageContent(currentLanguage);
  
  const navItems = [
    { path: '/', icon: Home, label: content.home },
    { path: '/conversation', icon: MessageCircle, label: content.chat },
    { path: '/ngo', icon: Users, label: content.help },
    { path: '/admin', icon: Settings, label: content.admin }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{content.appName}</h1>
              <p className="text-xs text-gray-500">{content.appSubtitle}</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Language Selector */}
          <select 
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.nativeName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-md ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.labelHi}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}