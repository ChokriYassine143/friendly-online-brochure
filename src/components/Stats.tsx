
import { useState, useEffect } from "react";
import { ChartBar, Users, Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: 500,
      label: "Clients Served",
      suffix: "+"
    },
    {
      icon: <Star className="h-6 w-6" />,
      number: 150,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      number: 15,
      label: "Years Experience",
      suffix: ""
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      number: 98,
      label: "Client Satisfaction",
      suffix: "%"
    }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              const duration = 2000; // Animation duration in milliseconds
              const steps = 60; // Number of steps in the animation
              const increment = stat.number / steps;
              let current = 0;
              let step = 0;

              const interval = setInterval(() => {
                if (step < steps) {
                  current += increment;
                  setAnimatedNumbers(prev => 
                    prev.map((num, i) => i === index ? Math.min(Math.round(current), stat.number) : num)
                  );
                  step++;
                } else {
                  clearInterval(interval);
                }
              }, duration / steps);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = document.querySelector(".stats-container");
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stats-container">
      {stats.map((stat, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4 text-primary">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2">
              {animatedNumbers[index]}{stat.suffix}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
