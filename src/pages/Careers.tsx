import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Users, Clock, Award, DollarSign, Home, Shield, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Careers = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Choose shifts that work with your life, including part-time, full-time, and weekend options."
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Above-market rates with opportunities for raises based on performance and additional certifications."
    },
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every day while building lasting relationships."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Ongoing training, certification support, and career advancement opportunities."
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Join a caring team with 24/7 supervisor support and regular team meetings."
    },
    {
      icon: Shield,
      title: "Benefits Package",
      description: "Health insurance options, paid time off, and employee assistance programs for eligible employees."
    }
  ];

  const requirements = [
    "High school diploma or equivalent",
    "Valid driver's license and reliable transportation",
    "Ability to pass background check and drug screening", 
    "Basic English communication skills",
    "Physical ability to assist with mobility and daily tasks",
    "Compassionate, patient, and reliable personality",
    "Previous caregiving experience preferred but not required",
    "CPR/First Aid certification preferred (we can provide training)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Care Team
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-8">
              Build a rewarding career helping families while enjoying flexible schedules, 
              competitive pay, and meaningful work that makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-healthcare-green" />
                <span className="text-lg font-medium">Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-healthcare-green" />
                <span className="text-lg font-medium">Competitive Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-healthcare-green" />
                <span className="text-lg font-medium">Great Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-healthcare-blue-dark mb-6">
              Why Work With Habibi Home Care?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We believe in supporting our caregivers so they can provide the best possible care for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Caregiver Requirements
              </h2>
              <p className="text-xl text-muted-foreground">
                We're looking for compassionate individuals who want to make a difference in people's lives.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-healthcare-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-muted-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-healthcare-blue-dark mb-6">
                Apply Today
              </h2>
              <p className="text-xl text-foreground/80">
                Take the first step toward a rewarding career in home care.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                        <Input id="firstName" className="mt-2 text-base" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                        <Input id="lastName" className="mt-2 text-base" placeholder="Your last name" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                        <Input id="email" type="email" className="mt-2 text-base" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                        <Input id="phone" type="tel" className="mt-2 text-base" placeholder="(XXX) XXX-XXXX" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address" className="text-base font-semibold">Address</Label>
                        <Input id="address" className="mt-2 text-base" placeholder="Street address, City, State, ZIP" />
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Experience & Availability</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="experience" className="text-base font-semibold">Years of Caregiving Experience</Label>
                        <Select>
                          <SelectTrigger className="mt-2 text-base">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No experience (training provided)</SelectItem>
                            <SelectItem value="1">Less than 1 year</SelectItem>
                            <SelectItem value="2">1-2 years</SelectItem>
                            <SelectItem value="3">3-5 years</SelectItem>
                            <SelectItem value="5">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="availability" className="text-base font-semibold">Preferred Schedule</Label>
                        <Select>
                          <SelectTrigger className="mt-2 text-base">
                            <SelectValue placeholder="Select schedule preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time (30+ hours/week)</SelectItem>
                            <SelectItem value="part-time">Part-time (15-29 hours/week)</SelectItem>
                            <SelectItem value="casual">Casual/As-needed</SelectItem>
                            <SelectItem value="weekends">Weekends only</SelectItem>
                            <SelectItem value="flexible">Flexible/Open</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Certifications (Check all that apply)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "CPR Certified",
                        "First Aid Certified", 
                        "CNA (Certified Nursing Assistant)",
                        "Home Health Aide Certificate",
                        "Dementia Care Training",
                        "Medication Administration Training",
                        "None of the above"
                      ].map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`cert-${index}`} />
                          <Label htmlFor={`cert-${index}`} className="text-base cursor-pointer">
                            {cert}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Join */}
                  <div>
                    <Label htmlFor="motivation" className="text-base font-semibold">
                      Why do you want to work in home care? *
                    </Label>
                    <Textarea 
                      id="motivation" 
                      className="mt-2 text-base min-h-[120px]" 
                      placeholder="Tell us what motivates you to work in caregiving and why you'd like to join our team..."
                    />
                  </div>

                  {/* Additional Comments */}
                  <div>
                    <Label htmlFor="comments" className="text-base font-semibold">
                      Additional Comments or Questions
                    </Label>
                    <Textarea 
                      id="comments" 
                      className="mt-2 text-base min-h-[100px]" 
                      placeholder="Any additional information you'd like to share or questions you have..."
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-healthcare-blue p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-healthcare-blue-dark mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-healthcare-blue-dark mb-2">Application Privacy Notice</p>
                        <p className="text-sm text-healthcare-blue-dark/80">
                          This application form collects only information necessary for employment consideration. 
                          All information is kept confidential and used solely for hiring purposes. Background 
                          checks and reference verification will be conducted only for qualified candidates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full bg-primary hover:bg-primary-hover text-white text-xl py-6">
                    Submit Application
                  </Button>

                  <p className="text-center text-muted-foreground text-sm">
                    We'll review your application and contact you within 2-3 business days if you're a good fit for our team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;