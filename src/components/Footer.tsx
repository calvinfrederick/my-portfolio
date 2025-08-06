import { Heart, Coffee, Laptop } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-muted-foreground font-mono flex items-center justify-center gap-2 flex-wrap">
            Built by 
            <span className="text-neon-green font-semibold">Calvin Soe Frederick</span>
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;