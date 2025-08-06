import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Code2, 
  Cloud, 
  BarChart3, 
  GitBranch,
  Cpu,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "neon-yellow",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI", "LangChain"]
  },
  {
    title: "Data Science",
    icon: BarChart3,
    color: "neon-blue",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "R", "Statistical Analysis"]
  },
  {
    title: "Backend Development",
    icon: Code2,
    color: "neon-green",
    skills: ["FastAPI", "Flask", "Django", "Node.js", "REST APIs", "GraphQL", "Microservices"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "neon-purple",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs", "SQL", "NoSQL", "Data Modeling"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "neon-yellow",
    skills: ["AWS", "Docker", "Kubernetes", "Apache Airflow", "CI/CD", "Linux", "Terraform"]
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    color: "neon-blue",
    skills: ["Git", "VS Code", "Postman", "MLflow", "Streamlit", "Tableau", "Apache Spark"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-pixel mb-4">
            <span className="text-neon-purple">&lt;</span>
            Tech Stack
            <span className="text-neon-purple">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card border-border hover:border-neon-purple/50 transition-all duration-300 pixel-border p-6 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-${category.color} text-background`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold text-${category.color} group-hover:text-neon-purple transition-colors`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="border-muted-foreground text-muted-foreground hover:border-neon-purple hover:text-neon-purple transition-colors text-sm pixel-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-neon-yellow mb-2">15+</div>
            <div className="text-muted-foreground font-mono">ML Models Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-neon-blue mb-2">3</div>
            <div className="text-muted-foreground font-mono">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-neon-green mb-2">20+</div>
            <div className="text-muted-foreground font-mono">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-neon-purple mb-2">2</div>
            <div className="text-muted-foreground font-mono">Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;