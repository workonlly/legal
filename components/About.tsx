"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Quote } from "lucide-react";

const features = [
  "Personalized tax planning strategies",
  "Transparent communication",
  "Proven track record of compliance",
  "Digital filing & paperless process",
  "Urgent tax matter support",
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl aspect-[4/5] overflow-hidden shadow-float">
              {/* Professional Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop")` }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/70" />

              {/* Quote section */}
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-navy-dark via-navy-dark/95 to-transparent backdrop-blur-sm">
                <Quote className="w-10 h-10 text-gold/80 mb-4" />
                <blockquote className="text-cream font-serif text-2xl leading-relaxed mb-6">
                  Our mission is hassle-free compliance, personalized advisory,
                  and digital support with clarity and confidence.
                </blockquote>
                <cite className="text-gold text-sm not-italic font-semibold tracking-wide">
                  — The Tariq & Co Team
                </cite>
              </div>
            </div>



            {/* Small decorative element */}
           
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Your Trusted Tax Partner
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              At Tariq & Co Legal Advisory Firm, we understand that tax matters can be
              overwhelming. We combine decades of expertise with genuine care. Whether
              you're an entrepreneur, salaried employee, or investor—our expert team
              ensures you stay compliant and worry-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="navy" size="lg" className="shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-navy/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;