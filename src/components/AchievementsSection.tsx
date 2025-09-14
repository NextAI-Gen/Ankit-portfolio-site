import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AchievementsSection() {
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
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    View Certificate <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}