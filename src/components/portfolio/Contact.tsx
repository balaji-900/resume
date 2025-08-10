import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "balajisoundhar2005@gmail.com",
      href: "mailto:balajisoundhar2005@gmail.com",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/balaji561",
      href: "https://github.com/balaji561",
      color: "text-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/balaji2005",
      href: "https://www.linkedin.com/in/balaji2005",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const languages = ["English", "Tamil"];

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.label}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-smooth ${
                      contact.href ? 'hover:bg-muted/50 cursor-pointer' : ''
                    }`}
                    onClick={() => contact.href && window.open(contact.href, '_blank')}
                  >
                    <div className={`p-2 rounded-lg ${contact.bgColor}`}>
                      <contact.icon className={`h-5 w-5 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground text-sm">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Languages</h3>
                <div className="flex gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="secondary" className="font-medium">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Current Status</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Available for opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open to internships, freelance projects, and collaboration opportunities 
                  in software development and UI/UX design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;