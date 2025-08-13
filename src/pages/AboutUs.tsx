import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Target,
  Heart,
  FileQuestion,
  Package,
  Phone,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  heroContent,
  storyContent,
  HydroponicContent,
  questionContent,
  storeContent,
} from "@/content/AboutUsContent";

const AboutUs = () => {
  const accordionData = [
    {
      id: "story",
      title: "Our Story",
      icon: Heart,
      content: storyContent.paragraphs,
    },
    {
      id: "mission",
      title: "What is Hydroponics' Cultivation?",
      icon: Target,
      content: HydroponicContent.paragraphs,
    },
    {
      id: "important",
      title: "Whether to use TDS reading or EC reading for your hydroponics?",
      icon: FileQuestion,
      content: questionContent.paragraphs,
    },
    {
      id: "store",
      title: "How to store the nutrients?",
      icon: Package,
      content: storeContent.paragraphs,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-gradient-nature text-primary-foreground mb-4"
          >
            About Garden Essence™
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {heroContent.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>
        </div>

        {/* Accordion Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Learn More About Garden Essence™
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {accordionData.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-border rounded-lg px-6 hover:shadow-forest transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-nature rounded-full p-2 shadow-glow">
                      <section.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  <div className="space-y-6 ml-10">
                    <div className="space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Product Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
            <img
              src="/images/product/leafAll.jpg"
              alt="Garden Essence Leafy Greens Formula"
              className="w-full h-72 md:h-96 object-cover rounded-lg"
            />
            {/*             <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-foreground">
                  Leafy Greens - 250
                </h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for herbs & leafy vegetables
                </p>
              </div>
            </div> */}
          </div>

          <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
            <img
              src="/images/product/vegAll.jpg"
              alt="Garden Essence Veggies Formula"
              className="w-full h-72 md:h-96 object-cover rounded-lg"
            />
            {/*             <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-foreground">Veggies - 200</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for fruiting vegetables
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-nature rounded-lg p-8 md:p-12 text-center text-primary-foreground shadow-forest">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join the Garden Essence™ family and experience the difference that
            scientifically formulated nutrients can make in your hydroponic
            garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
              Shop Products
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
                  Contact Us
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 text-lg">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+91 99675 51104</span>
                      </div>
                      <div className="flex items-center gap-2 text-lg">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>support@gardenessence.co.in</span>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
