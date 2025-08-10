import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate learner with a drive for excellence in competitive programming and innovative design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Highly passionate third-year Computer Science student at Sri Sairam Engineering College, 
              skilled in C, Python, and Java with over 1000+ problem-solving experience on platforms 
              like HackerRank, LeetCode, and Skillrack.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a 5-star Python programmer on HackerRank and passionate about UI/UX design. 
              I love participating in hackathons and competitions to learn and grow collaboratively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, solving algorithmic 
              challenges, or working on innovative projects that combine technology with great user experience.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 animate-slide-up">
            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Education</h3>
                    <p className="text-muted-foreground">B.E. CSE | CGPA: 8.67</p>
                    <p className="text-sm text-muted-foreground">Sri Sairam Engineering College</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Achievement</h3>
                    <p className="text-muted-foreground">5⭐ Python Badge</p>
                    <p className="text-sm text-muted-foreground">HackerRank Certified</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Experience</h3>
                    <p className="text-muted-foreground">1000+ Problems Solved</p>
                    <p className="text-sm text-muted-foreground">Multiple Platforms</p>
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

export default About;