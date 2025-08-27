import { Heart, Phone, Mail, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold">Habibi Home Care</span>
            </div>
            <p className="text-background/80 text-lg leading-relaxed mb-6">
              Providing compassionate, personalized home care services to help your loved ones live safely and independently.
            </p>
            <div className="flex items-center space-x-2 text-healthcare-green">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">HIPAA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-background/80 hover:text-healthcare-green transition-colors text-lg">About Us</Link></li>
              <li><Link to="/services" className="text-background/80 hover:text-healthcare-green transition-colors text-lg">Our Services</Link></li>
              <li><Link to="/trust" className="text-background/80 hover:text-healthcare-green transition-colors text-lg">Why Choose Us</Link></li>
              <li><Link to="/careers" className="text-background/80 hover:text-healthcare-green transition-colors text-lg">Careers</Link></li>
              <li><Link to="/privacy" className="text-background/80 hover:text-healthcare-green transition-colors text-lg">Privacy & HIPAA</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-background/80">
              <li className="text-lg">Companionship Care</li>
              <li className="text-lg">Daily Living Support</li>
              <li className="text-lg">Mobility Assistance</li>
              <li className="text-lg">Medication Reminders</li>
              <li className="text-lg">Transportation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href="tel:(XXX) XXX-XXXX" className="flex items-center space-x-3 text-healthcare-green hover:text-healthcare-green/80 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">(XXX) XXX-XXXX</span>
              </a>
              <a href="mailto:info@habibihomecare.com" className="flex items-center space-x-3 text-background/80 hover:text-healthcare-green transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-lg">info@habibihomecare.com</span>
              </a>
              <div className="flex items-start space-x-3 text-background/80">
                <MapPin className="w-5 h-5 mt-1" />
                <span className="text-lg">Greater Phoenix, AZ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-base mb-4 md:mb-0">
            © 2025 Habibi Home Care. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-background/60 hover:text-healthcare-green transition-colors text-base">
              Privacy Policy
            </Link>
            <Link to="/privacy" className="text-background/60 hover:text-healthcare-green transition-colors text-base">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;