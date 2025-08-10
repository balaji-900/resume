import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="gradient-primary bg-clip-text text-transparent whitespace-nowrap">
                Balaji S
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium">
              Computer Science Student
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Competitive Programmer | UI/UX Enthusiast | 5⭐ Python Developer
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate third-year CS student with 1000+ problem-solving experience 
              across HackerRank, LeetCode, and Skillrack. Building innovative solutions 
              and crafting beautiful user experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="shadow-elegant hover-glow transition-smooth"
                onClick={() => window.location.href = "mailto:balajisoundhar2005@gmail.com?subject=Hello%20Balaji&body=Hi%20Balaji,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/balaji561" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover-lift shadow-card transition-smooth"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balaji2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover-lift shadow-card transition-smooth"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              <button 
                onClick={() => window.location.href = "mailto:balajisoundhar2005@gmail.com"}
                className="p-3 rounded-full bg-card hover-lift shadow-card transition-smooth"
              >
                <Mail className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-elegant hover-glow transition-smooth">
                <img 
                  src={profilePhoto} 
                  alt="Balaji S - Computer Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;