import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "QEdge",
      description: "VR training tool for EOD (Explosive Ordnance Disposal) trainees built using Unity, C#, Flutter, and Figma. Provides immersive training simulations for safe learning.",
      technologies: ["Unity", "C#", "Flutter", "Figma", "VR"],
      type: "VR Application",
      featured: true
    },
    {
      title: "Saferail",
      description: "Finalist IDEATHON project focused on preventing animal deaths on railway tracks. Innovative solution combining technology and wildlife conservation.",
      technologies: ["IoT", "Machine Learning", "Arduino", "Python"],
      type: "Innovation Project",
      featured: true
    },
    {
      title: "MTS Website",
      description: "Educational website designed specifically for junior school students, featuring interactive learning modules and engaging user interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Development",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining technology, design, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`gradient-card shadow-card hover-lift animate-fade-in ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge 
                      variant="secondary" 
                      className="mb-3 font-medium"
                    >
                      {project.type}
                    </Badge>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.featured && (
                    <Badge className="gradient-primary text-white border-0">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="hover-lift" asChild>
                    <a href="https://demo-placeholder.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;