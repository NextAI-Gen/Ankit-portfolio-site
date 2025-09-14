import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Ankit Choudhary";
  }, []);

  const projects = [
    {
      title: "Fras",
      description: "Automated attendance system using computer vision and machine learning with KNN classifier for accurate face recognition and matching.",
      tags: ["Python", "HTML", "Pandas", "OpenCV", "Flask"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      githubLink: "https://github.com/NextAI-Gen",
      featured: true,
    },
    {
      title: "Safar",
      description: "Web application for real-time bus ticket booking with seat selection and secure user registration and authentication system.",
      tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      githubLink: "https://github.com/NextAI-Gen",
      demoLink: "#",
      featured: true,
    },
    {
      title: "AI-Powered Interview System",
      description: "AI platform using Python & NLP for real-time interview feedback and scoring with smart resume analysis for better job matching.",
      tags: ["Python", "Flask", "Tailwind CSS", "NLP"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      githubLink: "https://github.com/NextAI-Gen",
      featured: true,
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for e-commerce platform with inventory management, order tracking, and sales analytics.",
      tags: ["React", "Tailwind CSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      githubLink: "https://github.com/NextAI-Gen",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      tags: ["JavaScript", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      githubLink: "https://github.com/NextAI-Gen",
      demoLink: "#",
    },
    {
      title: "Task Manager",
      description: "Productivity application for task management with priority setting and deadline reminders.",
      tags: ["React", "Firebase", "CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      githubLink: "https://github.com/NextAI-Gen",
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
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Projects</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience in software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  demoLink={project.demoLink}
                  githubLink={project.githubLink}
                  featured={project.featured}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}