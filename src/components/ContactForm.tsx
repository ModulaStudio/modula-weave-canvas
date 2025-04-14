import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await emailjs.send(
        'service_mq5xl72', // Replace with your EmailJS Service ID
        'template_s680xcu', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'GLGjv2YsftkXbqy1V' // Replace with your EmailJS Public API Key
      );

      setIsSuccess(true);
      setModalType('success');
      setModalMessage('Message sent successfully! We\'ll get back to you soon.');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email failed to send:', error);
      setIsError(true);
      setModalType('error');
      setModalMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Form */}
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

        <div className="space-y-4">
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

      {/* Success/Error Modal */}
      {modalVisible && (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 transition-all`}>
          <div
            className={`bg-white p-8 rounded-lg shadow-md w-96 text-center ${modalType === 'success' ? 'border-green-500' : 'border-red-500'}`}
          >
            <div className="mb-4">
              {modalType === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              )}
            </div>
            <p className="text-lg font-semibold text-gray-900">{modalMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
