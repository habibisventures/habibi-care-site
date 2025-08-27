import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every client with the same love and care we would give our own family members."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable care you can count on, day after day."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Open communication and honest pricing with no hidden fees or surprises."
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description: "Respecting diverse backgrounds and honoring individual preferences and traditions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              To provide dignity, respect, and independence at home for every family we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Founded on Love and Care
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Habibi Home Care was founded by Shawn Yousif with a simple but powerful vision: 
                  to help families keep their loved ones safe, comfortable, and independent at home.
                </p>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  After watching his own family navigate the challenges of aging and care, 
                  Shawn understood the importance of compassionate, reliable home care that 
                  respects both the client's independence and the family's peace of mind.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  "Habibi" means "beloved" in Arabic, reflecting our commitment to treating 
                  every client as our own beloved family member.
                </p>
              </div>
              <div className="bg-gradient-to-br from-healthcare-blue to-healthcare-green-light p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-healthcare-blue-dark" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-healthcare-blue-dark mb-4">
                    "Habibi"
                  </h3>
                  <p className="text-lg text-healthcare-blue-dark">
                    Means "beloved" in Arabic
                  </p>
                  <p className="text-base text-healthcare-blue-dark/80 mt-2">
                    Every client is beloved to us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-healthcare-blue-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              These principles guide every interaction and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Meet Our Leadership
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Shawn Yousif, Founder & CEO
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      With over 15 years of experience in healthcare administration and a 
                      personal passion for elderly care, Shawn brings both professional 
                      expertise and heartfelt dedication to Habibi Home Care.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-healthcare-green" />
                        <span className="text-muted-foreground">Healthcare Administration Background</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-healthcare-green" />
                        <span className="text-muted-foreground">Certified in Home Care Management</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-healthcare-green" />
                        <span className="text-muted-foreground">Community Volunteer & Advocate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue-dark to-healthcare-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover how our compassionate approach to home care can benefit your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-xl px-8 py-4 h-auto">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-healthcare-blue-dark text-xl px-8 py-4 h-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;