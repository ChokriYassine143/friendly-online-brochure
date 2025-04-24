
import { ChartBar, Users, Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "500+",
      label: "Clients Served"
    },
    {
      icon: <Star className="h-6 w-6" />,
      number: "150+",
      label: "Projects Completed"
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      number: "15",
      label: "Years Experience"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      number: "98%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4 text-primary">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
