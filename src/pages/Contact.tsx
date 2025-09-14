import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Ankit Choudhary";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out to me directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-muted rounded-full p-3">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:Ankitchoudhary7100@gmail.com" 
                        className="font-medium hover:text-accent transition-colors"
                      >
                        Ankitchoudhary7100@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-muted rounded-full p-3">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href="tel:+917987241082" 
                        className="font-medium hover:text-accent transition-colors"
                      >
                        +91 7987241082
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-muted rounded-full p-3">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/ankit-choudhary-aanku" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-accent transition-colors"
                      >
                        linkedin.com/in/ankit-choudhary-aanku
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-muted rounded-full p-3">
                      <Github className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a 
                        href="https://github.com/NextAI-Gen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-accent transition-colors"
                      >
                        github.com/NextAI-Gen
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-muted rounded-full p-3">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Bangalore, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold font-heading mb-6">Send Me a Message</h2>
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}