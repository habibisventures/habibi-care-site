import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us Today
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Ready to start your journey with compassionate home care? 
              We're here to help and answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Call Us</h3>
                <a href="tel:(XXX) XXX-XXXX" className="text-2xl font-bold text-trust-blue hover:text-trust-blue/80 transition-colors">
                  (XXX) XXX-XXXX
                </a>
                <p className="text-muted-foreground mt-2">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Email Us</h3>
                <a href="mailto:info@habibihomecare.com" className="text-lg font-semibold text-trust-blue hover:text-trust-blue/80 transition-colors">
                  info@habibihomecare.com
                </a>
                <p className="text-muted-foreground mt-2">We respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Service Area</h3>
                <p className="text-lg font-semibold text-foreground">Greater Phoenix, AZ</p>
                <p className="text-muted-foreground mt-2">Expanding to serve more areas</p>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-healthcare-green mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-lg font-semibold text-foreground">Office Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 8 AM - 6 PM</p>
                  <p className="text-muted-foreground">Saturday: 9 AM - 3 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Care Services</p>
                  <p className="text-muted-foreground">Available 7 days a week</p>
                  <p className="text-muted-foreground">Flexible scheduling</p>
                  <p className="text-healthcare-green font-semibold">24/7 Emergency Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out this form for general inquiries. For detailed care assessments, 
                    we'll direct you to our secure intake process.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                        <Input id="firstName" className="mt-2 text-base" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                        <Input id="lastName" className="mt-2 text-base" placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                      <Input id="email" type="email" className="mt-2 text-base" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                      <Input id="phone" type="tel" className="mt-2 text-base" placeholder="(XXX) XXX-XXXX" />
                    </div>

                    <div>
                      <Label htmlFor="reason" className="text-base font-semibold">Reason for Contact</Label>
                      <Select>
                        <SelectTrigger className="mt-2 text-base">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="care-inquiry">Care Services Inquiry</SelectItem>
                          <SelectItem value="consultation">Schedule Consultation</SelectItem>
                          <SelectItem value="career">Career Opportunities</SelectItem>
                          <SelectItem value="general">General Questions</SelectItem>
                          <SelectItem value="urgent">Urgent Care Need</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                      <Textarea 
                        id="message" 
                        className="mt-2 text-base min-h-[120px]" 
                        placeholder="Tell us about your care needs or questions..." 
                      />
                    </div>

                    <div className="bg-healthcare-blue p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-healthcare-blue-dark mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-healthcare-blue-dark">Privacy Notice</p>
                          <p className="text-sm text-healthcare-blue-dark/80">
                            This form collects basic contact information only. For detailed health 
                            information, we'll guide you to our secure, HIPAA-compliant intake process.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary-hover text-white text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Secure Intake CTA */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-healthcare-green-light to-healthcare-blue border-healthcare-green/20">
                  <CardContent className="p-8 text-center">
                    <Shield className="w-16 h-16 text-healthcare-green mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Need a Care Assessment?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      For detailed care planning and health information, use our secure, 
                      HIPAA-compliant intake form that protects your privacy.
                    </p>
                    <Button asChild className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-lg px-6 py-3">
                      <Link to="/intake">Start Secure Intake</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-healthcare-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <p className="text-muted-foreground">We'll respond within 2 hours during business hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-healthcare-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <p className="text-muted-foreground">Schedule a free consultation at your convenience</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-healthcare-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <p className="text-muted-foreground">Create a personalized care plan for your loved one</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-foreground text-background">
                  <CardContent className="p-8 text-center">
                    <Phone className="w-12 h-12 text-healthcare-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-background/80 mb-4">Call us now for urgent care needs</p>
                    <a href="tel:(XXX) XXX-XXXX" className="text-2xl font-bold text-healthcare-green hover:text-healthcare-green/80 transition-colors">
                      (XXX) XXX-XXXX
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;