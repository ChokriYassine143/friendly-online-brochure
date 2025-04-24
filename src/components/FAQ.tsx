
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Arclight Designs offer?",
      answer: "We offer a comprehensive range of architectural and design services including residential design, commercial spaces, interior design, sustainable architecture, and project management."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical residential project might take 3-6 months, while larger commercial projects can take 6-12 months or more."
    },
    {
      question: "Do you handle permits and regulations?",
      answer: "Yes, we handle all necessary permits and ensure compliance with local building codes and regulations as part of our service."
    },
    {
      question: "What is your design philosophy?",
      answer: "Our design philosophy centers on creating sustainable, functional spaces that seamlessly blend aesthetics with practicality, always putting our clients' needs first."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
