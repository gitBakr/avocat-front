
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-surface border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">AppointmentGenius</span>
            </Link>
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
