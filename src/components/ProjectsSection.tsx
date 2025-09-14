import { motion } from "framer-motion";
import { ArrowRight, Brain, Bus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Fras",
      description: "Automated attendance system using computer vision and machine learning with KNN classifier for accurate face recognition and matching.",
      icon: <User className="h-8 w-8 text-accent" />,
      tags: ["Python", "OpenCV", "Flask", "Pandas"],
      link: "/projects",
    },
    {
      title: "Safar",
      description: "Web application for real-time bus ticket booking with seat selection and secure user registration and authentication system.",
      icon: <Bus className="h-8 w-8 text-accent" />,
      tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
      link: "/projects",
    },
    {
      title: "AI-Powered Interview System",
      description: "AI platform using Python & NLP for real-time interview feedback and scoring with smart resume analysis for better job matching.",
      icon: <Brain className="h-8 w-8 text-accent" />,
      tags: ["Python", "Flask", "Tailwind CSS", "NLP"],
      link: "/projects",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="mb-4">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="text-accent hover:text-accent/80">
                    <Link to={project.link}>
                      View details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}