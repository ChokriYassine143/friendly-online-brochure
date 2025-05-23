import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Modern Minimalist Home",
    description: "A contemporary residential project emphasizing clean lines and natural light.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
  },
  {
    title: "Urban Office Complex",
    description: "Sustainable commercial space designed for the modern workforce.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
  },
  {
    title: "Waterfront Restaurant",
    description: "An elegant dining venue with panoramic ocean views.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    title: "Eco-Friendly School",
    description: "Educational facility with sustainable design principles.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069"
  },
  {
    title: "Luxury Spa Retreat",
    description: "A serene wellness center combining modern amenities with natural elements.",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074"
  },
  {
    title: "Historic Building Renovation",
    description: "Careful restoration of a heritage building with modern updates.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070"
  }
];

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Arclight Designs</h1>
          <p className="text-xl md:text-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>Where Vision Meets Architecture</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll">
            <Stats />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Arclight Designs is a forward-thinking architecture firm that combines innovative design 
              with sustainable practices. With over 15 years of experience, we create spaces that 
              inspire and endure.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="reveal-on-scroll">
            <Team />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="reveal-on-scroll">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="reveal-on-scroll">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="reveal-on-scroll">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <ContactForm />
            </div>
            <div className="reveal-on-scroll">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
