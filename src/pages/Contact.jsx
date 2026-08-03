import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill in all contact fields');
      return;
    }
    toast.success('Thank you! Your message has been sent to our support team.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-extrabold uppercase text-indigo-400 tracking-wider">Get In Touch</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">We’d Love to Hear From You</h1>
        <p className="text-sm text-slate-400">Have questions about courses, enterprise licensing, or mentorship? Send us a note.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Your Name</label>
            <input
              type="text"
              placeholder="Alex Vance"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Email Address</label>
            <input
              type="email"
              placeholder="alex@edunova.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help your learning journey?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <h3 className="text-lg font-bold text-white">Contact Info</h3>
          
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Email Us</p>
                <p className="text-slate-400">support@edunova.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Call Support</p>
                <p className="text-slate-400">+1 (800) 555-NOVA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Headquarters</p>
                <p className="text-slate-400">500 Howard St, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
