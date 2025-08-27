import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, Clock, Lock, CheckCircle, Heart, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Trust = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed home care agency with comprehensive liability and bonding insurance for your complete protection and peace of mind."
    },
    {
      icon: Users,
      title: "Background-Checked Caregivers",
      description: "Every caregiver undergoes thorough criminal background checks, reference verification, and drug screening before joining our team."
    },
    {
      icon: Award,
      title: "HIPAA-Compliant Processes",
      description: "Strict adherence to healthcare privacy laws with secure systems for handling any sensitive health information."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency response system and family communication for immediate assistance when needed."
    }
  ];

  const policies = [
    {
      icon: Lock,
      title: "No PHI Stored On-Site",
      description: "We never store protected health information on our website or non-secure systems, maintaining the highest privacy standards."
    },
    {
      icon: FileText,
      title: "Encrypted Communications", 
      description: "All sensitive communications use encrypted, HIPAA-compliant channels to protect your family's private information."
    },
    {
      icon: CheckCircle,
      title: "Minimum-Necessary Access",
      description: "Our staff only access the minimum health information necessary to provide safe, effective care."
    },
    {
      icon: Heart,
      title: "Transparent Care Documentation",
      description: "Detailed, secure care reports keep families informed while maintaining strict privacy and confidentiality."
    }
  ];

  const certifications = [
    "Arizona Home Care License",
    "General Liability Insurance", 
    "Professional Liability Coverage",
    "Workers' Compensation Insurance",
    "Bonded & Insured Caregivers",
    "HIPAA Compliance Training",
    "CPR & First Aid Certified Staff",
    "Background Check Verified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose Habibi Home Care
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Your family's safety, security, and peace of mind are our highest priorities. 
              We maintain the strictest standards in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-healthcare-blue-dark mb-6">
              Built on Trust & Safety
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Every aspect of our service is designed with your family's safety and your peace of mind at the forefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:-translate-y-1">
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

      {/* HIPAA & Privacy Policies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Privacy & Security Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We go beyond compliance to ensure your health information is protected with the highest security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-xl flex items-center justify-center flex-shrink-0">
                      <policy.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{policy.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{policy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* HIPAA Notice Card */}
          <Card className="bg-gradient-to-br from-trust-blue-light to-healthcare-green-light border-trust-blue/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Shield className="w-12 h-12 text-trust-blue flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Important Privacy Notice</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This website does not store any protected health information (PHI). For any health-related 
                    information or detailed care assessments, we use secure, encrypted forms and HIPAA-approved 
                    systems to ensure your privacy is completely protected.
                  </p>
                  <Button asChild variant="outline" className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white">
                    <Link to="/privacy">Read Full Privacy Policy</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-healthcare-blue-dark mb-6">
                Licenses & Certifications
              </h2>
              <p className="text-xl text-foreground/80">
                We maintain all required licenses and exceed industry standards for safety and quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-healthcare-green mx-auto mb-3" />
                    <p className="text-sm font-semibold text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Continuous Quality Assurance
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-healthcare-green flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Regular supervisory visits and care quality assessments</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-healthcare-green flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Ongoing caregiver training and professional development</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-healthcare-green flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Client and family feedback integration</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-healthcare-green flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Detailed care documentation and reporting</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-healthcare-green flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">Emergency response protocols and 24/7 support</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-healthcare-green-light to-healthcare-blue-dark p-8 rounded-2xl text-center">
                    <Award className="w-16 h-16 text-healthcare-green mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Promise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We pledge to maintain the highest standards of care, safety, and privacy 
                      while treating your loved ones with the dignity and respect they deserve.
                    </p>
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
            Experience the Difference
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the families who trust Habibi Home Care for safe, compassionate, and professional home care services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-xl px-8 py-4 h-auto">
              <Link to="/contact">Schedule Consultation</Link>
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

export default Trust;