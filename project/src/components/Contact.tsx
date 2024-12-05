import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3366]"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#FF3366] hover:bg-[#FF4E7A] px-6 py-3 rounded-lg font-medium transition-all"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}