
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RDVAvocats</h3>
            <p className="text-sm text-gray-300">
              La plateforme de référence pour trouver et prendre rendez-vous avec un avocat qualifié.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/avocats" className="text-sm text-gray-300 hover:text-white">Trouver un avocat</Link></li>
              <li><Link to="/register" className="text-sm text-gray-300 hover:text-white">Devenir avocat partenaire</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-300 hover:text-white">Tarifs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link to="/confidentialite" className="text-sm text-gray-300 hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/conditions" className="text-sm text-gray-300 hover:text-white">Conditions d'utilisation</Link></li>
              <li><Link to="/mentions-legales" className="text-sm text-gray-300 hover:text-white">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} RDVAvocats. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
