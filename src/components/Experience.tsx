import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Synapxe (GovTech Affiliate)",
    position: "AI Engineer Intern",
    duration: "May 2025 - Present ",
    location: "Singapore",
    description: "Designing internal tools and AI assistants to support healthcare AI workflows and decision-making.",
    technologies: ["ReactJS", "TypeScript", "HTML", "CSS", "Python", "Azure"],
    achievements: [
      "Built internal dashboards to visualize AI insights, improving decision-making efficiency",
      "Co-developed AI model monitoring tools to enhance model visibility and reliability",
      "Collaborating with AI and DevOps teams to bridge frontend UI with backend pipelines and cloud services",
      "Currently developing an AI Agent Data Analyst to automate analysis and reporting of AI workflow data"
    ]
  },
  {
    company: "Siemens",
    position: "Data Science Intern",
    duration: "August 2024 - November 2024",
    location: "Singapore",
    description: "Developed analytics tools and dashboards to support sales and leadership engagement.",
    technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Matplotlib"],
    achievements: [
      "Created CxO database and dashboards to improve stakeholder collaboration",
      "Used RFM analysis and regression models to identify high-churn customers",
      "Visualized customer trends to support data-driven retention strategies"
    ]
  },
  {
    company: "Tier One Entertainment",
    position: "Data Analyst Intern",
    duration: "May 2024 - August 2024",
    location: "Manila, Philippines",
    description: "Automated influencer data collection and campaign tracking to improve marketing operations.",
    technologies: ["AppSheet", "Python", "Pandas", "OCR", "Regex", "Pillow", "Pytesseract"],
    achievements: [
      "Created AppSheet app to estimate campaign value, reducing analyst workload by 50%",
      "Performed social media analysis using Klear and Meltwater tools",
      "Built OCR pipelines for automating document digitization and entry"
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
            Work Experience
            <span className="text-neon-blue">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through various internships and roles in AI, Data Analytics & Software Development
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