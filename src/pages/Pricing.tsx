import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import PricingCard from '@/components/PricingCard';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "",
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
      price: "",
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
      emoji: "🌟"
    },
    {
      name: "Pro",
      price: "",
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
      emoji: "🚀"
    },
    {
      name: "Website Redesign & Maintenance",
      price: "",
      description: "For businesses that already have a site but want to refresh their design or get ongoing updates.",
      features: [
        "Visual redesign with modern layout",
        "Bug fixes & improvements",
        "Performance and mobile responsiveness checks",
        "Content updates",
        "Flexible monthly or one-time packages"
      ],
      highlight: false,
      emoji: "🔧"
    }
  ];

  const addOns = [
    { name: "Logo & Brand Kit", emoji: "🎨" },
    { name: "Business Cards", emoji: "💼" },
    { name: "Posters & Invitations", emoji: "🖼️" },
    { name: "Promo Videos", emoji: "🎥" }
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const toggleAddOn = (index: number) => {
    setSelectedAddOns(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

          {/* Quote Note */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm italic">
              All pricing is based on project scope and requirements. Get in touch for a custom quote.
            </p>
          </div>

          {/* Add-ons Section */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Optional Add-Ons</h2>
              <p className="text-gray-600">Enhance your brand identity and content with these creative extras</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => {
                const selected = selectedAddOns.includes(index);
                return (
                  <div
                    key={index}
                    onClick={() => toggleAddOn(index)}
                    className={`cursor-pointer bg-white p-6 rounded-lg shadow-md border-2 transition-all duration-300 ${
                      selected
                        ? "border-modula-coral bg-modula-coral/5"
                        : "border-gray-100 hover:shadow-lg"
                    }`}
                  >
                    <div className="text-2xl mb-3">{addon.emoji}</div>
                    <h3 className="text-lg font-bold mb-2">{addon.name}</h3>
                  </div>
                );
              })}
            </div>

            {selectedAddOns.length > 0 && (
              <div className="text-center mt-10">
                <p className="text-lg font-semibold text-modula-coral">
                  Add-ons selected. We'll include these in your consultation.
                </p>
              </div>
            )}
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
                    Contact us for a free consultation and we’ll help you choose the right plan and extras.
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
