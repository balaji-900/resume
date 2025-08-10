import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Balaji S</h3>
            <p className="text-background/80 leading-relaxed">
              Computer Science Student passionate about competitive programming, 
              UI/UX design, and building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Achievements", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-background transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/balaji561" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/balaji2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:balajisoundhar2005@gmail.com"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/60 text-sm">
              Chennai, Tamil Nadu<br />
              balajisoundhar2005@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Balaji S. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;