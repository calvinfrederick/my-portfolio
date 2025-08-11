import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Show loading state
      toast({
        title: "Sending message...",
        description: "Please wait while we send your message.",
      });

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_uiw1mdo', // Replace with your EmailJS service ID
        'template_b06e9ti', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Success
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

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
          {/* Contact Form */}
          <Card className="bg-card border-border pixel-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Send className="w-6 h-6 text-neon-yellow" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-mono">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border focus:border-neon-yellow pixel-border"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-mono">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border focus:border-neon-yellow pixel-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-mono">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-neon-yellow pixel-border"
                    placeholder="Project collaboration, Job opportunity, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-mono">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-input border-border focus:border-neon-yellow pixel-border resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-neon-yellow text-background hover:bg-neon-yellow/90 font-bold py-3 pixel-shadow transition-all duration-200 hover:translate-y-[-2px]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
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