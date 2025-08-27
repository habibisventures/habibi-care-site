import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Home, Users, Calendar, Car, Utensils, Shield, Clock, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Companionship Care",
      description: "Social engagement, conversation, and emotional support to reduce isolation and provide meaningful connection.",
      features: [
        "Daily social interaction and conversation",
        "Regular safety check-ins and monitoring", 
        "Emotional support and active listening",
        "Activity engagement and entertainment",
        "Reading assistance and cognitive stimulation",
        "Technology help and communication support"
      ]
    },
    {
      icon: Home,
      title: "Daily Living Support",
      description: "Assistance with essential daily activities to maintain comfort, health, and independence at home.",
      features: [
        "Meal preparation and nutrition support",
        "Hydration reminders and monitoring",
        "Light housekeeping and organization",
        "Laundry assistance and clothing care",
        "Personal hygiene and grooming support",
        "Grocery shopping and errands"
      ]
    },
    {
      icon: Users,
      title: "Mobility & Transportation",
      description: "Safe mobility assistance and reliable transportation to maintain independence and social connections.",
      features: [
        "Safe transfers and mobility assistance",
        "Fall prevention and safety monitoring",
        "Medical appointment transportation",
        "Social outing accompaniment",
        "Grocery shopping trips",
        "Walking and exercise support"
      ]
    },
    {
      icon: Calendar,
      title: "Care Coordination",
      description: "Comprehensive care management and family communication to ensure seamless, coordinated support.",
      features: [
        "Regular family updates and communication",
        "Care plan development and monitoring",
        "Schedule coordination and management",
        "Appointment reminders and assistance",
        "Medication reminders (non-clinical)",
        "Emergency response coordination"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does scheduling work?",
      answer: "We work with you to create a flexible schedule that meets your loved one's needs. Our care can range from a few hours a week to daily support. We provide both regular scheduled visits and on-demand care as needed."
    },
    {
      question: "Do you accept insurance or Medicare?",
      answer: "We primarily operate on a private pay basis, which allows us to provide personalized, flexible care without insurance restrictions. We can provide documentation for potential reimbursement through long-term care insurance or health savings accounts."
    },
    {
      question: "Are your caregivers trained and certified?",
      answer: "Yes, all our caregivers undergo comprehensive background checks, reference verification, and specialized training in home care, safety protocols, and senior care best practices. Many hold certifications in CPR, first aid, and specialized care techniques."
    },
    {
      question: "Can you help with medical care?",
      answer: "We provide non-medical home care services. This includes medication reminders, transportation to medical appointments, and communication with healthcare providers, but we do not provide clinical or medical services."
    },
    {
      question: "How do you ensure quality of care?",
      answer: "We maintain high standards through regular supervisory visits, ongoing caregiver training, client and family feedback, and detailed care documentation. Our care coordinators work closely with families to ensure satisfaction."
    },
    {
      question: "What if we need to change or cancel services?",
      answer: "We understand that care needs can change. We offer flexible scheduling adjustments and require minimal notice for changes. Our goal is to adapt our services to meet your evolving needs."
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
              Comprehensive Home Care Services
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Personalized, non-medical support designed to help your loved ones 
              live safely and independently at home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-healthcare-blue-dark mb-6">
              Our Care Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Each service is tailored to meet the unique needs and preferences of your family member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Additional Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extra services to provide comprehensive support for your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-healthcare-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">24/7 Emergency Support</h3>
                <p className="text-muted-foreground">Round-the-clock emergency response and family communication for peace of mind.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-healthcare-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Family Communication</h3>
                <p className="text-muted-foreground">Regular updates, photos, and detailed reports to keep you connected and informed.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-healthcare-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Flexible Scheduling</h3>
                <p className="text-muted-foreground">Adaptable care schedules that adjust to changing needs and circumstances.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-healthcare-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-healthcare-blue-dark mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-foreground/80">
                Get answers to frequently asked questions about our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Contact us today for a free consultation and personalized care assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-healthcare-green hover:bg-healthcare-green/90 text-white text-xl px-8 py-4 h-auto">
              <Link to="/contact">Request Care</Link>
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

export default Services;