
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-modula-coral focus:border-modula-coral block w-full p-3"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-modula-coral focus:border-modula-coral block w-full p-3"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-modula-coral focus:border-modula-coral block w-full p-3"
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-modula-coral focus:border-modula-coral block w-full p-3"
          placeholder="Tell us about your project..."
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center bg-modula-coral text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Sending...</span>
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
