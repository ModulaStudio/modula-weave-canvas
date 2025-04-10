
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi there! I'm the Modula Studio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized, messages]);

  const generateResponse = (userMessage: string): string => {
    const commonResponses = [
      "Thanks for your message. Our team will get back to you shortly.",
      "I'd be happy to help with your web design needs. Could you provide more details?",
      "We specialize in responsive website design. Would you like to see our portfolio?",
      "Our team can assist with that. Would you like to schedule a consultation?",
      "I'll forward this to our design team. Is there a good time to reach you?",
    ];
    
    // Simple keyword matching
    if (userMessage.toLowerCase().includes("pricing") || userMessage.toLowerCase().includes("cost")) {
      return "Our pricing varies based on project scope. Would you like to request a quote?";
    } else if (userMessage.toLowerCase().includes("contact") || userMessage.toLowerCase().includes("email")) {
      return "You can reach us at hello@modulastudio.com or through our contact form.";
    } else if (userMessage.toLowerCase().includes("portfolio") || userMessage.toLowerCase().includes("work")) {
      return "You can explore our portfolio to see examples of our previous work.";
    } else {
      // Return a random common response
      return commonResponses[Math.floor(Math.random() * commonResponses.length)];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputText('');

    // Simulate bot response with a slight delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat bubble */}
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-modula-coral text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
        aria-label="Chat with us"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-modula-coral text-white p-4 rounded-t-lg">
            <div className="flex items-center">
              <span className="font-medium ml-2">Chat with Modula</span>
            </div>
            <div className="flex gap-2">
              <button onClick={toggleMinimize} className="focus:outline-none">
                {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <button onClick={toggleOpen} className="focus:outline-none">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages container */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 h-80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-modula-coral text-white rounded-tr-none'
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 block mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input area */}
          {!isMinimized && (
            <form onSubmit={handleSubmit} className="flex items-center p-3 border-t border-gray-200">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-modula-coral focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-modula-coral text-white rounded-r-md px-3 py-2 hover:bg-opacity-90 focus:outline-none"
              >
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
