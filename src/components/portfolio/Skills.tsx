import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Platforms & Tools",
      icon: Globe,
      skills: ["HackerRank", "LeetCode", "Skillrack", "GitHub", "Unity"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Design & Development",
      icon: Palette,
      skills: ["UI/UX Design", "Figma", "Web Development", "Flutter", "WordPress"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Core Competencies",
      icon: Brain,
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Logical Reasoning"],
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-hero">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for competitive programming and modern development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="gradient-card shadow-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="px-3 py-1 text-sm font-medium hover-lift transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlighted Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Problems Solved", value: "1000+" },
            { label: "HackerRank Stars", value: "5⭐" },
            { label: "CGPA", value: "8.73" },
            { label: "Projects Built", value: "10+" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;