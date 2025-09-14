import { motion } from "framer-motion";
import { Code, Database, LayoutDashboard as Layout, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  const skills = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: "Languages",
    description: "Java, Python, HTML, CSS, JavaScript"
  },
  {
    icon: <Layout className="h-10 w-10 text-accent" />,
    title: "Technologies",
    description: "React Native, Tailwind CSS, Flask"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: "Concepts",
    description: "Artificial Intelligence, Machine Learning"
  },
  {
    icon: <Database className="h-10 w-10 text-accent" />,
    title: "Databases & Cloud",
    description: "SQL, MongoDB, AWS"
  }];


  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a Computer Science student passionate about creating intuitive and functional digital experiences. 
            With a focus on AI and machine learning, I strive to build solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>

            <h3 className="text-2xl font-bold font-heading mb-4">Education</h3>
            <ul className="space-y-6">
              <li className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                <h4 className="font-bold">Jain (Deemed-To-Be) University</h4>
                <p className="text-sm text-muted-foreground">2022 - 2026</p>
                <p>Bachelor of Technology in Computer Science</p>
                <p className="text-sm">GPA: 7.9/10.0 upto 6th Semester</p>
              </li>
              <li className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                <h4 className="font-bold">Jawaharlal Nehru School</h4>
                <p className="text-sm text-muted-foreground">2020 - 2021</p>
                <p>Higher Secondary School</p>
                <p className="text-sm">Percentage: 82%</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}>

            <h3 className="text-2xl font-bold font-heading mb-4">Experience</h3>
            <ul className="space-y-6">
              <li className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                <h4 className="font-bold">DevSkillhub</h4>
                <p className="text-sm text-muted-foreground">May 2024 – July 2024</p>
                <p className="font-medium">Frontend Developer Intern</p>
                <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                  <li>Developed responsive footwear e-commerce website with product catalog and shopping cart functionality.</li>
                  <li>Implemented MongoDB integration for dynamic product management and inventory tracking.</li>
                </ul>
              </li>
              <li className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                <h4 className="font-bold">Sharma Industries</h4>
                <p className="text-sm text-muted-foreground">Oct 2023 – Dec 2023</p>
                <p className="font-medium">User Testing Intern</p>
                <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                  <li>Provided detailed feedback to development teams for product improvement.</li>
                  <li>Contributed to process optimization through systematic testing and analysis.</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>

          <h3 className="text-2xl font-bold font-heading mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) =>
            <Card key={index} className="border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}