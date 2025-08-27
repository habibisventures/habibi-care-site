import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, FileText, Users, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy & HIPAA Compliance
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Your privacy and the security of your health information are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Important Notice */}
            <Card className="bg-gradient-to-br from-trust-blue-light to-healthcare-green-light border-trust-blue/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-8 h-8 text-trust-blue flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Important Privacy Notice</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      This website does not store any Protected Health Information (PHI). For any health-related 
                      information or detailed care assessments, we direct you to secure, HIPAA-compliant forms 
                      and approved systems that fully protect your privacy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HIPAA Security Policy */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-healthcare-green mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">HIPAA Security & PHI Handling Policy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Our Commitment to Your Privacy</h3>
                  <p>
                    Habibi Home Care is committed to protecting the privacy and security of your health information 
                    in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and all 
                    applicable state and federal privacy laws.
                  </p>

                  <h3 className="text-xl font-bold text-foreground">How We Protect Your Information</h3>
                  <ul className="space-y-2">
                    <li><strong>Secure Systems:</strong> All Protected Health Information (PHI) is stored in HIPAA-compliant, encrypted systems.</li>
                    <li><strong>Limited Access:</strong> Only authorized personnel with legitimate care needs can access your health information.</li>
                    <li><strong>Training:</strong> All staff receive regular HIPAA training and privacy education.</li>
                    <li><strong>Encryption:</strong> All electronic communications containing sensitive information are encrypted.</li>
                    <li><strong>Physical Security:</strong> Physical documents are stored in locked, secure locations.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-foreground">What Information We Collect</h3>
                  <p>We may collect the following types of information:</p>
                  <ul className="space-y-2">
                    <li><strong>Contact Information:</strong> Name, address, phone number, email address</li>
                    <li><strong>Health Information:</strong> Only the minimum necessary to provide safe, effective care</li>
                    <li><strong>Emergency Contacts:</strong> Family members or contacts for emergency situations</li>
                    <li><strong>Care Preferences:</strong> Individual preferences for care and daily activities</li>
                  </ul>

                  <h3 className="text-xl font-bold text-foreground">How We Use Your Information</h3>
                  <p>Your information is used only for:</p>
                  <ul className="space-y-2">
                    <li>Providing direct care services to you or your loved one</li>
                    <li>Coordinating care with healthcare providers (with your consent)</li>
                    <li>Communicating with designated family members about care</li>
                    <li>Emergency response and safety monitoring</li>
                    <li>Required reporting as mandated by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Website Privacy Policy */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-healthcare-green mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Website Privacy Policy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Information Collection on This Website</h3>
                  <p>
                    This website collects only basic contact information through our contact forms. 
                    We do not collect, store, or process any Protected Health Information (PHI) through this website.
                  </p>

                  <h3 className="text-xl font-bold text-foreground">Contact Form Data</h3>
                  <p>When you fill out our contact forms, we collect:</p>
                  <ul className="space-y-2">
                    <li>Name and contact information</li>
                    <li>General reason for contact</li>
                    <li>Non-medical questions or comments</li>
                  </ul>

                  <h3 className="text-xl font-bold text-foreground">Cookies and Tracking</h3>
                  <p>
                    We use minimal, essential cookies for website functionality. We do not use 
                    tracking cookies or third-party analytics that could compromise your privacy.
                  </p>

                  <h3 className="text-xl font-bold text-foreground">Data Security</h3>
                  <p>
                    All website data is transmitted using SSL encryption and stored securely. 
                    We do not sell, share, or distribute your contact information to third parties.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-healthcare-green mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Your Privacy Rights</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>Under HIPAA and state privacy laws, you have the right to:</p>
                  <ul className="space-y-2">
                    <li><strong>Access:</strong> Request copies of your health information</li>
                    <li><strong>Amendment:</strong> Request corrections to your health information</li>
                    <li><strong>Restriction:</strong> Request limits on how your health information is used</li>
                    <li><strong>Confidential Communication:</strong> Request communication through specific methods</li>
                    <li><strong>Accounting:</strong> Request a list of disclosures of your health information</li>
                    <li><strong>Complaints:</strong> File complaints about privacy practices</li>
                  </ul>

                  <h3 className="text-xl font-bold text-foreground">Exercising Your Rights</h3>
                  <p>
                    To exercise any of these rights or to file a privacy complaint, please contact us directly:
                  </p>
                  <div className="bg-healthcare-blue p-4 rounded-lg mt-4">
                    <p className="text-healthcare-blue-dark mb-2"><strong>Privacy Officer</strong></p>
                    <p className="text-healthcare-blue-dark">Email: privacy@habibihomecare.com</p>
                    <p className="text-healthcare-blue-dark">Phone: (XXX) XXX-XXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-healthcare-green mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Questions About Privacy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    If you have questions about our privacy practices, your rights, or how we handle 
                    your information, please don't hesitate to contact us.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-healthcare-blue p-6 rounded-lg">
                      <h4 className="font-bold text-healthcare-blue-dark mb-2">General Privacy Questions</h4>
                      <p className="text-healthcare-blue-dark">Email: info@habibihomecare.com</p>
                      <p className="text-healthcare-blue-dark">Phone: (XXX) XXX-XXXX</p>
                    </div>
                    
                    <div className="bg-healthcare-green-light p-6 rounded-lg">
                      <h4 className="font-bold text-healthcare-blue-dark mb-2">HIPAA Privacy Officer</h4>
                      <p className="text-healthcare-blue-dark">Email: privacy@habibihomecare.com</p>
                      <p className="text-healthcare-blue-dark">Phone: (XXX) XXX-XXXX</p>
                    </div>
                  </div>

                  <p className="text-sm mt-6">
                    <strong>Last Updated:</strong> August 2025<br/>
                    This privacy policy may be updated from time to time. We will notify you of any 
                    significant changes to our privacy practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;