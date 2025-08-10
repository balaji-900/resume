import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "5-Star Python Badge",
      platform: "HackerRank",
      description: "Achieved the highest rating in Python programming challenges",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      link: "https://www.hackerrank.com/certificates/iframe/6c68af5f3c16"
    },
    {
      title: "6th Prize among 500 Teams",
      platform: "NIT Trichy Innovathon",
      description: "Secured top 10 position in prestigious national-level innovation competition",
      icon: Trophy,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "2nd Place Winner",
      platform: "YUCI Club UI/UX Competition",
      description: "Recognized for exceptional design skills and user experience innovation",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Daily Coding Streaks",
      platform: "LeetCode & Skillrack",
      description: "Maintaining consistent daily problem-solving practice",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 gradient-hero">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that reflect dedication, skill, and continuous growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="gradient-card shadow-card hover-lift animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => achievement.link && window.open(achievement.link, '_blank')}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${achievement.bgColor} group-hover:scale-110 transition-smooth`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                        {achievement.title}
                      </h3>
                      {achievement.link && (
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="mb-3 text-xs font-medium"
                    >
                      {achievement.platform}
                    </Badge>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-muted-foreground font-medium">Problems Solved</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              3
            </div>
            <p className="text-muted-foreground font-medium">Major Competitions Won</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              5⭐
            </div>
            <p className="text-muted-foreground font-medium">HackerRank Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;