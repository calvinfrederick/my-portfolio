import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroCharacter from "../assets/me22.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-pixel">
                <span className="block text-neon-yellow">Calvin Soe</span>
                <span className="block text-foreground">Frederick</span>
              </h1>
              <div className="inline-block bg-card px-4 py-2 pixel-border">
                <span className="text-neon-blue font-mono text-sm lg:text-base">
                  &gt; AI/ML_Engineer.aspiring()
                </span>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Aspiring AI/ML Engineer passionate about solving real-world problems 
              with machine learning and data. Turning complex algorithms into 
              elegant solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-neon-yellow text-background hover:bg-neon-yellow/90 font-bold px-8 py-3 text-lg pixel-shadow transition-all duration-200 hover:translate-y-[-2px]"
              >
                Let's Connect
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background px-8 py-3 text-lg pixel-border transition-all duration-200"
              >
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Character Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img 
                  src={heroCharacter} 
                  alt="Pixel art character holding laptop"
                  className="w-full h-full object-contain animate-float"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green animate-pixel-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple animate-pixel-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neon-yellow" />
      </div>
    </section>
  );
};

export default Hero;