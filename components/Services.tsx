"use client";

import {
  Receipt,
  TrendingUp,
  Percent,
  FileText,
  Calculator,
  Building2,
  CreditCard,
  CalendarClock,
  FileSpreadsheet,
  Landmark,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Income Tax",
    description:
      "Complete ITR filing with accurate declarations, deductions (80C, 80D), and maximum tax savings.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains",
    description:
      "Expert computation of capital gains with exemptions under Section 54 and 54F for optimal efficiency.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
  },
  {
    icon: Percent,
    title: "Dividend Tax",
    description:
      "Navigate TDS rules and new tax regime implications on dividends with complete compliance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: Building2,
    title: "GST Compliance",
    description:
      "End-to-end GST registration, returns, input tax credits, and audit-ready documentation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    icon: CreditCard,
    title: "TDS Management",
    description:
      "Accurate TDS deductions, timely payments, and record-keeping to avoid penalties.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  },
  {
    icon: FileSpreadsheet,
    title: "TDS Returns",
    description:
      "Quarterly filing of Form 24Q, 26Q, 27Q through TRACES with data validation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
  },
  {
    icon: FileText,
    title: "ITR-3 & ITR-4",
    description:
      "Correct form selection for business, profession, or presumptive tax with full documentation.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    icon: CalendarClock,
    title: "Advance Tax",
    description:
      "Calculated installments to avoid interest under Sections 234B and 234C.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
  },
  {
    icon: Calculator,
    title: "GST Returns",
    description:
      "GSTR-1 to GSTR-9 management across multiple states with Input Tax Credit optimization.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop",
  },
  {
    icon: Landmark,
    title: "Professional Tax",
    description:
      "State-wise registrations, deductions, and returns as per Maharashtra, Karnataka norms.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
  },
];

const Services = ({ id = "services" }: { id?: string }) => {
  return (
    <section id={id} className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-gold uppercase tracking-elegant text-sm font-bold mb-4 drop-shadow-sm">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-6 text-balance font-bold">
            Comprehensive Tax Services
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-foreground/70 text-lg leading-relaxed">
            End-to-end tax compliance and advisory services for individuals,
            professionals, and businesses across every tax category in India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-amber-500/50 cursor-pointer h-80"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark/95" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              
              {/* Content Container */}
              <div className="relative h-full flex flex-col p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 backdrop-blur-sm flex items-center justify-center mb-auto group-hover:from-amber-400/50 group-hover:to-amber-600/40 transition-all duration-500 border border-amber-400/30 group-hover:border-amber-400/60 group-hover:shadow-lg group-hover:shadow-amber-500/50">
                  <service.icon className="w-7 h-7 text-amber-300 group-hover:text-amber-200 transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="relative mt-auto h-1/2 z-20">
                  {/* Backdrop blur background */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl z-0 -mx-3 -my-3" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-xl text-white mb-3 font-bold flex items-center justify-between group-hover:text-amber-50 transition-colors duration-300">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h3>
                    <p className="text-white/85 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;