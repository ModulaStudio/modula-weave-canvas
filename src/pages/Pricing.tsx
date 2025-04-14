
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import PricingCard from '@/components/PricingCard';
import { Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  // Define pricing tiers
  const pricingTiers = [
    {
      name: "Starter",
      price: "KSh 7,500",
      description: "Perfect for personal brands or small startups that just need a basic online presence.",
      features: [
        "1-page custom website",
        "Mobile responsive design",
        "Contact form or WhatsApp button",
        "Custom brand colors & fonts",
        "Social media links",
        "1 revision round"
      ],
      highlight: false,
      emoji: "✨"
    },
    {
      name: "Standard",
      price: "KSh 12,500",
      description: "Ideal for businesses looking for more structure and features.",
      features: [
        "Up to 4 pages (Home, About, Services, Contact)",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form with email forwarding",
        "Social media integration",
        "2 revision rounds",
        "Free domain consultation"
      ],
      highlight: true,
      emoji: "✨"
    },
    {
      name: "Pro",
      price: "KSh 19,500",
      description: "Best for growing businesses ready to scale and make an impact online.",
      features: [
        "5–6 page website with animations",
        "Blog or gallery integration",
        "Email contact form + calendar booking (optional)",
        "Newsletter signup setup",
        "Google Maps integration",
        "3 revision rounds",
        "Domain & hosting setup support"
      ],
      highlight: false,
      emoji: "💼"
    },
    {
      name: "AI-Enhanced",
      price: "KSh 25,000+",
      description: "For modern businesses that want to stand out with smart features.",
      features: [
        "Everything in Pro package",
        "AI Chatbot for customer support",
        "AI-generated blog starter pack",
        "AI-based content suggestions (landing page text, headlines)",
        "Website analytics setup",
        "Custom pricing based on level of AI tools used"
      ],
      highlight: false,
      emoji: "🤖"
    }
  ];

  const addOns = [
    {
      name: "Domain & Hosting Setup",
      price: "KSh 3,000–5,000/year",
      description: "Based on provider",
      emoji: "🌐"
    },
    {
      name: "E-commerce Integration",
      price: "KSh 5,000",
      emoji: "🛒"
    },
    {
      name: "Logo Design & Brand Kit",
      price: "KSh 2,500",
      emoji: "🎨"
    },
    {
      name: "Professional Email Setup",
      price: "KSh 1,500",
      emoji: "📩"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-br from-white to-modula-beige">
        <div className="container-custom">
          <PageHeader
            title="Our Pricing Plans"
            subtitle="Choose the perfect plan to bring your web vision to life"
          />

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pricingTiers.map((tier, index) => (
              <PricingCard 
                key={index}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                highlight={tier.highlight}
                emoji={tier.emoji}
              />
            ))}
          </div>

          {/* Add-ons Section */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Optional Add-Ons</h2>
              <p className="text-gray-600">Enhance your website with these additional services</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="text-2xl mb-3">{addon.emoji}</div>
                  <h3 className="text-lg font-bold mb-2">{addon.name}</h3>
                  <p className="text-modula-coral font-bold mb-2">{addon.price}</p>
                  {addon.description && (
                    <p className="text-sm text-gray-500">{addon.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20">
            <div className="bg-modula-light-grey rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to get started?
                  </h2>
                  <p className="text-gray-600">
                    Contact us for a free consultation and we'll help you choose the right plan for your needs.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
