
import { Card, CardContent } from "./ui/card";
import { MessageCircle, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Solutions",
      content: "Working with Arclight Designs was a game-changer for our office space. Their innovative approach and attention to detail created a perfect balance of functionality and aesthetics.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Restaurant Owner",
      content: "The team at Arclight transformed our restaurant into a stunning dining destination. Their understanding of flow and ambiance was exceptional.",
      rating: 5
    },
    {
      name: "Mark Wilson",
      role: "Real Estate Developer",
      content: "Professional, creative, and extremely efficient. Arclight Designs consistently delivers outstanding results that exceed expectations.",
      rating: 5
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4 text-center italic">"{testimonial.content}"</p>
            <div className="text-center">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
