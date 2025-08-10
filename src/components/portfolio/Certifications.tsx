import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, BookOpen, Code, Globe } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Joy of Computing in Python",
      provider: "NPTEL",
      type: "Technical",
      grade: "Elite+Silver",
      description: "Comprehensive course covering Python programming fundamentals and computational thinking",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Python", "Programming", "Computational Thinking", "Problem Solving"]
    },
    {
      title: "Data Science with Python",
      provider: "NPTEL",
      type: "Technical",
      grade: "Elite",
      description: "Comprehensive course covering data analysis, visualization, and machine learning using Python",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"]
    },
    {
      title: "Data Structures & Algorithms with Python",
      provider: "NPTEL", 
      type: "Technical",
      description: "Advanced algorithms and data structures implementation using Python programming",
      icon: BookOpen,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["DSA", "Python", "Algorithms", "Problem Solving"]
    },
    {
      title: "Building a Website with WordPress",
      provider: "Coursera",
      type: "Web Development",
      description: "Complete guide to creating professional websites using WordPress platform",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["WordPress", "Web Design", "CMS", "Frontend"]
    },
    {
      title: "OpenAI API Course",
      provider: "LinkedIn Learning",
      type: "AI/ML",
      description: "Practical implementation of AI applications using OpenAI's powerful APIs",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["AI", "API Integration", "OpenAI", "Automation"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through recognized programs and professional courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="gradient-card shadow-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${cert.bgColor}`}>
                    <cert.icon className={`h-6 w-6 ${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-primary font-medium text-sm">
                        {cert.provider}
                      </p>
                      {cert.grade && (
                        <Badge variant="secondary" className="text-xs">
                          {cert.grade}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="hover-lift w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Profiles Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Professional Profiles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">HackerRank Profile</h4>
                    <p className="text-muted-foreground text-sm mb-3">5⭐ Python Certified Developer</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-lift"
                      onClick={() => window.open('https://www.hackerrank.com/certificates/iframe/6c68af5f3c16', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">Skillrack Profile</h4>
                    <p className="text-muted-foreground text-sm mb-3">Active Problem Solver</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-lift"
                      onClick={() => window.open('http://www.skillrack.com/profile/441457/d076c5aa5df4ee34a71eade6ce8454b1b4435f83', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">LeetCode Profile</h4>
                    <p className="text-muted-foreground text-sm mb-3">Competitive Programming</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-lift"
                      onClick={() => window.open('https://leetcode.com/u/balaji_88/', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
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

export default Certifications;