import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
  delay?: number;
}

function TimelineItem({ title, subtitle, date, description, icon, delay = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-accent/50 last:before:h-8"
    >
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-muted flex items-center justify-center -translate-x-1/2 border border-accent/50">
        {icon}
      </div>
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-md">
              {date}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ResumeTimeline() {
  const education = [
    {
      title: "Jain (Deemed-To-Be) University",
      subtitle: "Bachelor of Technology in Computer Science",
      date: "2022 - 2026",
      description: ["GPA: 7.9/10.0 upto 6th Semester"],
      icon: <GraduationCap className="h-3 w-3 text-accent" />,
    },
    {
      title: "Jawaharlal Nehru School",
      subtitle: "Higher Secondary School",
      date: "2020 - 2021",
      description: ["Percentage: 82%"],
      icon: <GraduationCap className="h-3 w-3 text-accent" />,
    },
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      subtitle: "DevSkillhub",
      date: "May 2024 – July 2024",
      description: [
        "Developed responsive footwear e-commerce website with product catalog and shopping cart functionality.",
        "Implemented MongoDB integration for dynamic product management and inventory tracking.",
      ],
      icon: <Briefcase className="h-3 w-3 text-accent" />,
    },
    {
      title: "User Testing Intern",
      subtitle: "Sharma Industries",
      date: "Oct 2023 – Dec 2023",
      description: [
        "Provided detailed feedback to development teams for product improvement.",
        "Contributed to process optimization through systematic testing and analysis.",
      ],
      icon: <Briefcase className="h-3 w-3 text-accent" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-accent" /> Education
        </h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              icon={item.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-accent" /> Experience
        </h3>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              icon={item.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}