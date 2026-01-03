"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = ({ id = "contact" }: { id?: string }) => {
  return (
    <section id={id} className="py-28 bg-hero-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cream/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-white uppercase tracking-elegant text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 text-balance">
            Ready to Simplify Your Taxes?
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-white/90 text-lg leading-relaxed">
            Contact us for a free consultation. Our experts are ready to help you
            navigate Indian taxation with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <a
            href="tel:+91 70532 50355"
            className="group block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wide">Call</p>
                <p className="text-white font-semibold text-lg">+91 70532 50355</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">Tap to start a call.</p>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=badreakhtar.hashmi@gmail.com" target="_blank" rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wide">Email</p>
                <p className="text-white font-semibold text-lg">badreakhtar.hashmi@gmail.com</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">Opens your email to compose a message.</p>
          </a>

          <a
            href="https://wa.me/7053250355?text=Hello%2C%20please%20share%20your%20query%20and%20our%20team%20will%20respond%20shortly."
            className="group block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wide">WhatsApp</p>
                <p className="text-white font-semibold text-lg">Chat on WhatsApp</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">Opens WhatsApp chat.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;