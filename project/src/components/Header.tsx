import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Home as HomeIcon, MessageCircle, Users, Settings, LogOut, User, Globe } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguageStore } from '../store/languageStore';
import { getLanguageContent, languageNames } from '../utils/languages';

export function Header() {
  const location = useLocation();
  const { user, logout, updateLanguage } = useAuth();
  const { currentLanguage, setLanguage } = useLanguageStore();
  const content = getLanguageContent(user?.preferences?.language || currentLanguage);
  
  // Sync Zustand store with user preference
  React.useEffect(() => {
    if (user?.preferences?.language && user.preferences.language !== currentLanguage) {
      setLanguage(user.preferences.language);
    }
  }, [user?.preferences?.language, currentLanguage, setLanguage]);
  
  const navItems = [
    { path: '/', icon: HomeIcon, label: content.home },
    { path: '/conversation', icon: MessageCircle, label: content.chat },
    { path: '/ngo', icon: Users, label: content.ngoSupport },
    { path: '/admin', icon: Settings, label: content.admin }
  ];

  const handleLanguageChange = async (newLanguage: string) => {
    try {
      await updateLanguage(newLanguage);
      setLanguage(newLanguage);
    } catch (error) {
      console.error('Failed to update language:', error);
      // Still update local state even if API call fails
      setLanguage(newLanguage);
    }
  };

  const handleLogout = () => {
    logout();
  };

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
              <h1 className="text-xl font-bold text-gray-900">{content.appSubtitle}</h1>
              <p className="text-xs text-gray-500">{content.appName}</p>
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

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={user?.preferences?.language || currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(languageNames).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">लॉग आउट</span>
            </button>
          </div>
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
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}