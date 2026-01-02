"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(/hero-bg.jpg)` }}
      />

      {/* Blue tint overlay */}
      <div className="absolute inset-0 bg-blue-900/60" />

      {/* Professional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/75 to-navy-dark/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 via-transparent to-navy-dark/50" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium tracking-wide">
                Your Complete Tax Compliance Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 text-balance">
              Simplifying{" "}
              <span className="text-gradient-gold">Indian Taxation</span>{" "}
              <br className="hidden md:block" />
              For You
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light">
              Navigating the intricate landscape of Indian taxation can be daunting.
              At Tariq & Co, we simplify this complexity with expert-led,
              tailored services—so you stay compliant and focused on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Button 
                size="xl" 
                className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg transition-all hover:scale-105 hover:shadow-amber-500/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Button>
              <Button 
                size="xl" 
                className="group relative overflow-hidden bg-white/10 text-white border border-white/30 backdrop-blur-sm shadow-lg transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Explore Services
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Button>
            </div>
          </div>

          {/* Professional Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
           
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;