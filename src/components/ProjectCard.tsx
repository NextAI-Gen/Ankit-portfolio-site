import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className={`h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all ${featured ? 'border-accent/30' : ''}`}>
      {image && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          {featured && (
            <Badge variant="outline" className="border-accent text-accent">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        )}
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Code <Github className="ml-2 h-3 w-3" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}