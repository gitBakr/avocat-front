
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <nav className="bg-surface border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">RDVAvocats</span>
            </Link>
            
            {/* Language Selector - Always visible */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{languages.find(lang => lang.code === currentLang)?.label}</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
                <div className="py-1" role="menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setCurrentLang(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/avocats" className="nav-link">
              Trouver un avocat
            </Link>
            <Link to="/login" className="nav-link">
              Connexion
            </Link>
            <Link to="/register" className="button-primary">
              Inscription Avocat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link
              to="/avocats"
              className="block py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Trouver un avocat
            </Link>
            <Link
              to="/login"
              className="block py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="block py-2 button-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscription Avocat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
