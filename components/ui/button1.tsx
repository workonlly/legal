import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAButton() {
  return (
    <div className="hidden lg:block">
      <Button 
        size="default" 
        className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg transition-all hover:scale-105 hover:shadow-amber-500/50"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="relative z-10 flex items-center gap-2 font-semibold">
          Free Consultation
          {/* Animated Arrow */}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </Button>
    </div>
  );
}