
import { useState } from "react";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trouvez l'avocat idéal pour votre situation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Des experts juridiques à votre service pour vous accompagner dans vos démarches
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                className="w-full px-6 py-4 rounded-lg text-lg border-2 border-transparent focus:border-accent focus:outline-none transition-all duration-200"
                placeholder="Rechercher par ville, spécialité ou nom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors duration-200">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Experts qualifiés",
    description: "Des avocats spécialisés et expérimentés dans leur domaine",
  },
  {
    title: "Rendez-vous faciles",
    description: "Prenez rendez-vous en quelques clics selon vos disponibilités",
  },
  {
    title: "Suivi personnalisé",
    description: "Un accompagnement sur mesure tout au long de votre dossier",
  },
];

const steps = [
  {
    title: "Recherchez",
    description: "Trouvez l'avocat qui correspond à vos besoins",
  },
  {
    title: "Sélectionnez",
    description: "Choisissez parmi nos experts qualifiés",
  },
  {
    title: "Réservez",
    description: "Prenez rendez-vous en ligne facilement",
  },
  {
    title: "Rencontrez",
    description: "Discutez de votre situation en toute confidentialité",
  },
];

export default Index;
