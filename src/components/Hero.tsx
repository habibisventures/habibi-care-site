import { Button } from '@/components/ui/button';
import { Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-home-care.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Compassionate caregiver helping senior at home" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-healthcare-blue-dark/90 to-healthcare-purple/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Compassionate Care at Home
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Personalized non-medical support for daily living and peace of mind. 
            Helping your loved ones live safely and independently at home.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-healthcare-green" />
              <span className="text-lg font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-healthcare-green" />
              <span className="text-lg font-medium">Background Checked</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-healthcare-green" fill="currentColor" />
              <span className="text-lg font-medium">HIPAA Compliant</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-xl px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">Request Care Today</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-healthcare-blue-dark text-xl px-8 py-4 h-auto font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 inline-block">
            <p className="text-white/90 text-lg">
              <span className="font-semibold">Need immediate help?</span>{" "}
              <a href="tel:(XXX) XXX-XXXX" className="text-healthcare-green font-bold hover:underline">
                Call (XXX) XXX-XXXX
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="w-96 h-96 bg-gradient-to-br from-healthcare-green to-healthcare-purple rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;