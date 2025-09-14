import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeTimeline from "@/components/ResumeTimeline";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Ankit Choudhary";
  }, []);

  const certifications = [
    {
      title: "IBM Machine Learning Professional Certificate",
      date: "October 2024",
      link: "#",
    },
    {
      title: "Cisco CCNAV7 - Enterprise Networking, Security, and Automation",
      date: "December 2024",
      link: "#",
    },
    {
      title: "IBM Linux Commands & Shell Scripting",
      date: "February 2025",
      link: "#",
    },
    {
      title: "Google Solution Challenge Certificate",
      date: "July 2025",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Resume</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Computer Science student with hands-on project experience, translating user needs into intuitive wireframes and functional prototypes.
            </p>
            <Button asChild>
              <a href="#" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <div className="space-y-16">
            <section>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold font-heading mb-8"
              >
                Education & Experience
              </motion.h2>
              <ResumeTimeline />
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold font-heading mb-8"
              >
                Skills
              </motion.h2>
              <SkillsSection />
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold font-heading mb-8"
              >
                Certifications
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-muted rounded-full p-2">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.date}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 flex items-center gap-2 text-sm"
                        >
                          View Certificate <Download className="h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}