import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Why Choose Us", path: "/trust" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-primary">
            <div className="w-10 h-10 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-2xl">Habibi Home Care</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  isActivePath(item.path) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:(XXX) XXX-XXXX" className="flex items-center space-x-2 text-lg font-semibold text-trust-blue hover:text-trust-blue/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span>(XXX) XXX-XXXX</span>
            </a>
            <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary-hover text-lg px-6">
              <Link to="/contact">Request Care</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors hover:bg-muted ${
                    isActivePath(item.path) 
                      ? 'text-primary bg-muted' 
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <a href="tel:(XXX) XXX-XXXX" className="flex items-center space-x-2 text-lg font-semibold text-trust-blue mb-4">
                  <Phone className="w-5 h-5" />
                  <span>(XXX) XXX-XXXX</span>
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary-hover text-lg">
                  <Link to="/contact">Request Care</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;