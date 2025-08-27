import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Home, Calendar, Star, Quote, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Companionship",
      description: "Social engagement, conversation, and safety check-ins to reduce isolation and provide emotional support.",
      features: ["Daily social interaction", "Safety monitoring", "Emotional support", "Activity engagement"]
    },
    {
      icon: Home,
      title: "Daily Living Support",
      description: "Assistance with meal preparation, hydration reminders, and light housekeeping to maintain a comfortable home.",
      features: ["Meal preparation", "Hydration reminders", "Light housekeeping", "Personal care assistance"]
    },
    {
      icon: Users,
      title: "Mobility & Transport",
      description: "Safe transfers, assistance with mobility, and transportation to appointments and social activities.",
      features: ["Safe transfers", "Mobility assistance", "Appointment transport", "Social outings"]
    },
    {
      icon: Calendar,
      title: "Care Coordination",
      description: "Regular family updates and schedule coordination to ensure seamless, non-clinical care management.",
      features: ["Family communication", "Schedule coordination", "Care planning", "Progress updates"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      relation: "Daughter",
      text: "Habibi Home Care has been a blessing for our family. Mom is happier, safer, and more independent than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      relation: "Son",
      text: "The caregivers are professional, compassionate, and truly care about Dad's wellbeing. We couldn't be more grateful.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      relation: "Wife",
      text: "After my husband's stroke, Habibi Home Care helped us maintain our dignity and independence at home.",
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: Shield, title: "Licensed & Insured", description: "Fully licensed and insured for your peace of mind" },
    { icon: Users, title: "Background Checked", description: "All caregivers undergo thorough background screening" },
    { icon: Award, title: "HIPAA Compliant", description: "Strict privacy and security protocols protect your information" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock support and emergency response available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* How We Help Section */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-healthcare-blue-dark mb-6">
              How We Help Families
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive home care services are designed to support independence, 
              safety, and quality of life for your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-xl px-8 py-4 h-auto">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Families Trust Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your family's safety and peace of mind are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-trust-blue to-healthcare-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{badge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{badge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-calm-sage to-warm-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Families Trust Habibi Home Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real families who have found peace of mind with our care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-healthcare-green mb-6 opacity-60" />
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.relation}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-healthcare-green" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue-dark to-healthcare-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and learn how we can help your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-xl px-8 py-4 h-auto">
              <Link to="/contact">Request Care Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-healthcare-blue-dark text-xl px-8 py-4 h-auto">
              <a href="tel:(XXX) XXX-XXXX">Call (XXX) XXX-XXXX</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
