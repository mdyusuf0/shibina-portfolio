import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link fallback
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personalInfo.emails.primary}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 px-3.5 py-1 bg-purple-50 border border-purple-200/60 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            Whether you have a web development project, WooCommerce platform request, full-stack opportunity, or simply want to connect, feel free to drop a message.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" data-aos="fade-up">
          
          {/* Left: Contact Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl gemini-edge-glow border border-white/90 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-slate-200/60 hover:border-purple-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {personalInfo.emails.primary}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${socialLinks.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-slate-200/60 hover:border-pink-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                    📍
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-slate-900">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-slate-200/60 hover:border-blue-400 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    in
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                    <span className="text-sm font-bold text-purple-600 group-hover:underline">
                      linkedin.com/in/shibina-s ↗
                    </span>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl gemini-edge-glow border border-white/90 shadow-xl">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Send A Message
              </h3>
              <p className="text-slate-500 text-xs font-medium mb-8">
                Fill out the form below to initiate direct contact.
              </p>

              {submitted && (
                <div className="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <span>✓</span>
                  <span>Opening your email client to send your message directly to Shibina!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Message *</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-sm font-medium text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full glass-dark-btn text-white text-sm font-bold shadow-lg cursor-pointer gemini-edge-glow flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
