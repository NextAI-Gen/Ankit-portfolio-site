import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
              Hi, I'm <span className="text-accent">Ankit Choudhary</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
              Computer Science student with hands-on project experience, translating user needs into intuitive wireframes and functional prototypes.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View my work
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/NextAI-Gen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/ankit-choudhary-aanku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:Ankitchoudhary7100@gmail.com" 
                className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl" />
              <div className="absolute inset-0 rounded-full border-2 border-accent/20" />
              <div className="absolute inset-[10%] rounded-full bg-muted/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">Tech Enthusiast</h2>
                  <p className="text-muted-foreground">AI & ML Passionate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}