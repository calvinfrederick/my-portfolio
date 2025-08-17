import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Award } from "lucide-react";

const Contact = () => {

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/calvin-frederick/",
      icon: Linkedin,
      color: "text-neon-blue",
      hoverColor: "hover:text-neon-blue"
    },
    {
      name: "GitHub",
      url: "https://github.com/calvinfrederick",
      icon: Github,
      color: "text-neon-yellow",
      hoverColor: "hover:text-neon-yellow"
    },
    {
      name: "Email",
      url: "mailto:e1121935@u.nus.edu",
      icon: Mail,
      color: "text-neon-green",
      hoverColor: "hover:text-neon-green"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-pixel mb-4">
            <span className="text-neon-yellow">&lt;</span>
            Let's Connect
            <span className="text-neon-yellow">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting AI projects? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <Card className="bg-card border-border pixel-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Award className="w-6 h-6 text-neon-purple" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-neon-purple rounded-full mt-2 animate-pixel-pulse"></div>
                  <div>
                    <p className="text-foreground font-mono font-semibold text-lg">AWS Certified Cloud Practitioner</p>
                    <p className="text-muted-foreground text-sm mb-2">Cloud fundamentals and AWS services</p>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon-purple hover:text-neon-purple/80 text-sm underline transition-colors"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full mt-2 animate-pixel-pulse"></div>
                  <div>
                    <p className="text-foreground font-mono font-semibold text-lg">Google Cloud Professional Data Engineer</p>
                    <p className="text-muted-foreground text-sm mb-2">Data processing and ML pipeline design</p>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon-green hover:text-neon-green/80 text-sm underline transition-colors"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-foreground font-mono font-semibold text-lg">Microsoft Azure AI Engineer Associate</p>
                    <p className="text-muted-foreground text-sm mb-2">AI solutions and cognitive services</p>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:text-neon-blue/80 text-sm underline transition-colors"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="bg-card border-border pixel-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-neon-blue" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 font-mono">Location</h4>
                  <p className="text-muted-foreground">Singapore, Singapore</p>
                  <p className="text-muted-foreground text-sm">Open to remote opportunities</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 font-mono">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4 font-mono">Connect with me</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center p-4 bg-muted/50 border border-border pixel-border transition-all duration-300 ${link.hoverColor} hover:border-current group`}
                        >
                          <IconComponent className={`w-8 h-8 ${link.color} group-hover:animate-float`} />
                          <span className="mt-2 text-sm font-mono text-muted-foreground group-hover:text-current">
                            {link.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border pixel-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Currently</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 animate-pixel-pulse"></div>
                    <div>
                      <p className="text-foreground font-mono font-semibold">Open to opportunities</p>
                      <p className="text-muted-foreground text-sm">Looking for AI/ML/DevOps Engineering Roles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-pixel-pulse"></div>
                    <div>
                      <p className="text-foreground font-mono font-semibold">Building</p>
                      <p className="text-muted-foreground text-sm">Internal AI Agents & Frontend Dashboards @ Synapxe </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-yellow rounded-full mt-2 animate-pixel-pulse"></div>
                    <div>
                      <p className="text-foreground font-mono font-semibold">Learning</p>
                      <p className="text-muted-foreground text-sm">Tools that bridge ML, UI, and Cloud services</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;