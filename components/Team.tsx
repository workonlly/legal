"use client";

import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";



const Team = () => {
  return (
    <section id="team" className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Founder Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-float aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("/ee.png")` }}
              />
          
          </div>
          </div>

          {/* Right: Founder Message */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold uppercase tracking-elegant text-sm font-semibold mb-4">
              A Message from Our Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Guiding You with Precision and Integrity
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Building lasting client relationships starts with trust, clarity, and consistent results. My team and I focus on precise tax strategy, proactive compliance, and transparent communication—so you always know where you stand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you are navigating complex assessments, planning cross-border structures, or seeking representation before authorities, we bring disciplined legal rigor and responsive support to every engagement.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="navy" size="lg" className="shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-navy/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Call with Team
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;