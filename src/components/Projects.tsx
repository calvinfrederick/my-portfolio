import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "GovTech x NTU Hackathon - Insurance Claims Workflow (1st Place)",
    description: "Built a no-code solution using GovTech's Build on BOB (BoB) platform to streamline car insurance claims by connecting users, insurers, and workshops into a unified claims architecture.",
    technologies: ["GovTech BoB", "No-code", "Process Automation"],
    github: null,
    highlights: [
      "1st Place Winner at NTU x GovTech Hackathon",
      "Designed multi-stakeholder insurance claims flow",
      "Used BoB to prototype end-to-end no-code solution"
    ]
  },
  {
    title: "NUS Statistics & Data Science Mini Competition",
    description: "Explored 1980s song popularity using EDA and clustering in R to uncover key factors driving hit tracks.",
    technologies: ["R", "K-means Clustering", "ggplot2"],
    github: null,
    highlights: [
      "Led feature extraction & EDA",
      "Applied K-means clustering to group similar songs",
      "Investigated correlation between features and popularity"
    ]
  },
  {
    title: "NUS Datathon 2024 - Singlife",
    description: "Analyzed customer disengagement during the insurance onboarding process and applied classification models to predict drop-off behavior.",
    technologies: ["Python", "SMOTE", "Pandas", "Scikit-learn"],
    github: null,
    highlights: [
      "Led classification modeling with imbalanced data",
      "Performed EDA to uncover user disengagement patterns",
      "Presented data-driven retention strategies"
    ]
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-pixel mb-4">
            <span className="text-neon-green">&lt;</span>
            Projects
            <span className="text-neon-green">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my AI/ML, Data Analysis projects that solve problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-neon-green/50 transition-all duration-300 pixel-border group h-full flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground group-hover:text-neon-green transition-colors flex items-start justify-between">
                  <span>{project.title}</span>
                  <Zap className="w-5 h-5 text-neon-yellow animate-pixel-pulse ml-2 flex-shrink-0" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neon-green font-mono text-xs mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-colors text-xs pixel-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
{/*                 
                <div className="flex gap-3 mt-auto pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background pixel-border flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;