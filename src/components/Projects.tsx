import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "SmartHealth Predictor",
    description: "Machine learning model that predicts potential health risks based on lifestyle data. Built with ensemble methods and achieved 87% accuracy on test data.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "React"],
    github: "https://github.com/calvinsoe/smarthealth-predictor",
    live: "https://smarthealth-demo.netlify.app",
    highlights: ["87% prediction accuracy", "Real-time data processing", "Interactive web dashboard"]
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Advanced sentiment analysis tool for social media data using transformer models. Processes 10K+ posts per minute with multi-language support.",
    technologies: ["Python", "Transformers", "PyTorch", "FastAPI", "Docker"],
    github: "https://github.com/calvinsoe/nlp-sentiment",
    highlights: ["Multi-language support", "Real-time processing", "94% accuracy on benchmark"]
  },
  {
    title: "Computer Vision Traffic Monitor",
    description: "Real-time traffic flow analysis using YOLO object detection. Deployed on edge devices for smart city applications.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorRT", "Raspberry Pi"],
    github: "https://github.com/calvinsoe/traffic-monitor",
    highlights: ["Edge device deployment", "Real-time object tracking", "30+ FPS processing"]
  },
  {
    title: "AI Study Buddy Chatbot",
    description: "Intelligent tutoring system that helps students with programming concepts. Uses RAG architecture with domain-specific knowledge base.",
    technologies: ["Python", "LangChain", "Vector DB", "Streamlit", "OpenAI"],
    github: "https://github.com/calvinsoe/ai-study-buddy",
    live: "https://ai-study-buddy.streamlit.app",
    highlights: ["RAG architecture", "Domain-specific knowledge", "Interactive learning"]
  },
  {
    title: "Financial Data Pipeline",
    description: "Automated ETL pipeline for financial data analysis with real-time market predictions using LSTM networks.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "TensorFlow", "AWS"],
    github: "https://github.com/calvinsoe/financial-pipeline",
    highlights: ["Automated ETL", "Real-time predictions", "Cloud deployment"]
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
            A showcase of my AI and machine learning projects that solve real-world problems
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
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-neon-green text-background hover:bg-neon-green/90 pixel-shadow flex-1"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;