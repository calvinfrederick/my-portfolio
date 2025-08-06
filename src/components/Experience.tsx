import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TechCorp AI Labs",
    position: "ML Engineering Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "San Francisco, CA",
    description: "Developed and optimized neural network models for computer vision applications, achieving 15% improvement in accuracy.",
    technologies: ["Python", "TensorFlow", "OpenCV", "AWS"],
    achievements: [
      "Built end-to-end ML pipeline for image classification",
      "Reduced model inference time by 30%",
      "Presented findings to senior engineering team"
    ]
  },
  {
    company: "DataFlow Solutions",
    position: "Backend Developer Intern",
    duration: "Jan 2024 - May 2024",
    location: "Remote",
    description: "Built scalable data processing systems and APIs to handle large-scale analytics workloads.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    achievements: [
      "Designed RESTful APIs serving 10K+ requests daily",
      "Implemented automated data validation pipelines",
      "Optimized database queries reducing response time by 40%"
    ]
  },
  {
    company: "University Research Lab",
    position: "Data Science Research Assistant",
    duration: "Sep 2023 - Dec 2023",
    location: "University Campus",
    description: "Conducted research on natural language processing applications in healthcare data analysis.",
    technologies: ["Python", "scikit-learn", "NLTK", "Pandas"],
    achievements: [
      "Analyzed 50K+ medical records using NLP techniques",
      "Co-authored research paper on sentiment analysis",
      "Developed automated text preprocessing pipeline"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-pixel mb-4">
            <span className="text-neon-blue">&lt;</span>
            Experience
            <span className="text-neon-blue">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through various internships and roles in AI and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-neon-yellow/50 transition-all duration-300 pixel-border group">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-neon-yellow transition-colors">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="text-neon-blue font-mono text-lg font-semibold">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-neon-green" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neon-green font-mono text-sm mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-colors pixel-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;