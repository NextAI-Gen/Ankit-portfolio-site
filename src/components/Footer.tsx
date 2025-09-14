import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold font-heading tracking-tight">
              Ankit<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Computer Science student with hands-on project experience, translating user needs into intuitive wireframes and functional prototypes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-muted-foreground hover:text-accent transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:Ankitchoudhary7100@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Mail className="h-4 w-4" />
                <span>Ankitchoudhary7100@gmail.com</span>
              </a>
              <a 
                href="tel:+917987241082" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>7987241082</span>
              </a>
              <a 
                href="https://linkedin.com/in/ankit-choudhary-aanku" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/ankit-choudhary-aanku</span>
              </a>
              <a 
                href="https://github.com/NextAI-Gen" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>github.com/NextAI-Gen</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Ankit Choudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}