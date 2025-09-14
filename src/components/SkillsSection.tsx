import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, LayoutDashboard as Layout, Lightbulb, Server, PenTool as Tool } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5 text-accent" />,
    skills: [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 75 }]

  },
  {
    title: "Technologies",
    icon: <Layout className="h-5 w-5 text-accent" />,
    skills: [
    { name: "React Native", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Flask", level: 75 }]

  },
  {
    title: "Concepts",
    icon: <Lightbulb className="h-5 w-5 text-accent" />,
    skills: [
    { name: "Artificial Intelligence", level: 80 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Structures", level: 85 }]

  },
  {
    title: "Tools & Platforms",
    icon: <Tool className="h-5 w-5 text-accent" />,
    skills: [
    { name: "VS Code", level: 90 },
    { name: "GitHub", level: 85 },
    { name: "AWS", level: 65 }]

  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 text-accent" />,
    skills: [
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 75 }]

  },
  {
    title: "DevOps",
    icon: <Server className="h-5 w-5 text-accent" />,
    skills: [
    { name: "Linux", level: 70 },
    { name: "Shell Scripting", level: 65 }]

  }];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, index) =>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}>

          <Card className="border-border/40 bg-card/50 backdrop-blur-sm h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {category.icon}
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, skillIndex) =>
            <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
            )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>);

}