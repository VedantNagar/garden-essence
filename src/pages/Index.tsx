import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Shield, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroImage from "@/assets/hero-hydroponic.jpg";
import { useRef } from "react";
import substance1Image from "../../public/images/product/green.jpg";
import substance2Image from "../../public/images/product/veg.jpg";

const Index = () => {
  const products = [
    {
      title: "Leafy Greens - 250",
      description:
        "Our premium nutrient solution designed to maximize vegetative growth and overall plant health.",
      image: substance1Image,
      link: "/substance1",
    },
    {
      title: "Veggies – 200",
      description:
        "Complete Nutrition Package for all Vegetables Crops - Tomatoes, Cucumbers, Melons, Chillies, Bell Peppers, Okra, Floral crops, etc.",
      image: substance2Image,
      link: "/substance2",
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Formulated with organic and sustainable ingredients",
    },
    {
      icon: Droplets,
      title: "Superior Results",
      description: "Tried and tested on our own home-grown plants",
    },
    {
      icon: Shield,
      title: "Plant Health",
      description: "Gives remarkable growth and great plant quality",
    },
  ];

  const faqs = [
    {
      q: "What is Hydroponic farming?",
      a: "Hydroponic farming is an innovative way to cultivate plants without using soil. Instead, it relies on nutrient-infused water to nourish the plants. This method involves placing the roots of the plants in a specially formulated water solution that provides all the essential nutrients needed for healthy growth, eliminating the need for traditional soil. Garden Essence™ Premium Hydroponic Nutrients offer total nutrition as a mineral-based plant food and provides superior results in both soil and hydroponic set-ups. Hydroponic systems don’t use soil, so they depend on a nutrient solution to deliver all the essential elements that plants require. Unlike typical plant fertilizers, hydroponic options must provide a comprehensive range of nutrients. This makes them a reliable and well-rounded source of nutrition that's perfect for any garden. ",
    },
    {
      q: "I'm just starting my journey with hydroponics, and I'm excited! What do I need to begin? ",
      a: "Hydroponics is an enjoyable and fulfilling hobby that comes with its own set of challenges and rewards. To kick things off, you'll need a hydroponic system or setup, some hydroponic nutrients, and an inert hydroponic medium (the type will depend on your chosen system). You'll also need a light source, whether it’s natural sunlight or artificial lighting. Don’t forget to grab pH and EC meters to monitor your system, as well as some time to invest and high-quality seeds (if you want to grow from scratch) or healthy plants (if you prefer to start at the transplantation stage). Happy growing!.",
    },
    {
      q: "How does pH level impact the growth of plants?",
      a: "The pH level plays a crucial role in determining how well plants can access and absorb the 16 essential elements required for their growth. Optimal absorption occurs when the pH is between 5.5 and 6.5. If the pH drops below this ideal range, many macronutrients become less available, and the absorption of micronutrients can potentially reach harmful levels.",
    },
    {
      q: "Water quality in hydroponics?",
      a: "The pH level plays a crucial role in determining how well plants can access and absorb the 16 essential elements required for their growth. Optimal absorption occurs when the pH is between 5.5 and 6.5. If the pH drops below this ideal range, many macronutrients become less available, and the absorption of micronutrients can potentially reach harmful levels.",
    },
    {
      q: "Can I foliar spray Hydroponic Nutrients?",
      a: "No, the Hydroponic Nutrients are solely designed and created to be fed, with water dilution, only and only to the root zones of plants and is not to be sprayed (in any form- with or without water) onto the leaves of the plant.",
    },
    {
      q: "What is the role of ventilation in hydroponics?",
      a: "Ventilation, folks, is like that kid in the back of the class—always ignored but totally crucial! You see, plants are like little superheroes when it comes to soaking up nutrients, and they do it while they breathe out, or should I say, “sweat” the water from their leaves. When the air is fresh and zippy, plants can transpire like champs, which means they're guzzling those nutrients even faster. Just remember: ventilation isn’t just about whooshy fans blowing air around—it’s about actually swapping in fresh air, not just stirring the old stuff! Keep those leafy green pals happy and thriving!",
    },
    {
      q: "Where can I cultivate using hydroponics?",
      a: "You can set up your hydroponic garden just about anywhere—indoors, in a greenhouse, or even outside. While nearly any plant can thrive with hydroponics, some varieties may require a bit more care.",
    },
    {
      q: "What pH is best for hydroponically grown plants?",
      a: "The optimal pH level for hydroponically grown plants typically falls between 5.5 and 6.5.",
    },
    {
      q: "How does hydroponic produce taste compared to soil-grown veggies?",
      a: "Well, hold onto your forks because hydroponic greens often blow the competition out of the water! They're like the overachievers of the veggie world—delivering more flavour and nutrition. Why, you ask? Because all the essential nutrients are ready and waiting, like a personal chef at a five-star restaurant, serving up exactly what the plant craves right when it needs it. Who knew growing veggies could be so gourmet?",
    },
    {
      q: "Is Hydroponics organic?",
      a: "The debate surrounding “organic” fertilizers and practices is widespread. Many enthusiasts are keen to explore the integration of organics into hydroponic systems. However, traditional organic fertilizers rely on soil-bound organisms to transform organic materials into forms that plants can use. In hydroponics, we bypass the need for soil entirely by supplying essential minerals directly to the plants. This approach leads to significantly higher growth rates and yields compared to what organic methods can deliver.",
    },
    {
      q: "Why is hydroponic cultivation superior to soil farming?",
      a: "Hydroponically grown produce is generally cleaner, and growers can fine-tune nutrient delivery for optimal growth and higher yields in a shorter time frame.",
    },
    {
      q: "What elements are essential for plant growth?",
      a: "Research has identified a total of ten key elements needed for plants to thrive. Of these, three—carbon (C), hydrogen (H), and oxygen (O)—come from air and water. The remaining seven nutrients, including nitrogen (N), phosphorus (P), potassium (K), calcium (Ca), magnesium (Mg), sulphur (S), and iron (Fe), are sourced from the soil or other growth media. Additionally, five other trace elements—manganese (Mn), zinc (Zn), copper (Cu), boron (B), molybdenum (Mo)- are also crucial for plant health, and they are typically absorbed through the growing medium. Garden Essence™ Premium Hydroponic Nutrients includes all these essential elements for optimal plant growth.",
    },
    {
      q: "Can Garden Essence™ Premium Hydroponic Nutrients be used in soil?",
      a: "Absolutely! Garden Essence™ Premium Hydroponic Nutrients are designed with all the essential elements for healthy plant growth. Start with the dosage listed on the Instruction Card, provided inside the box, for your specific plant or crop, and feel free to adjust and experiment to discover the perfect formula for your needs.",
    },
    {
      q: "Can you use more than the recommended dose of Garden Essence™ Nutrients?",
      a: "Absolutely NO, excessively dosing any hydroponic nutrients can lead to issues such as root rot, loss of blooms, and in severe instances, can result in the death of your plants.",
    },
    {
      q: "Do I need to drain and refill the reservoir?",
      a: "YES (always recommended). It's a good practice to drain and rinse the reservoir/storage tank every 7-14 days, depending on how big your plants are and how much nutrients they're using. Make sure to drain and clean it when you change the nutrient dosage formula (as per the instruction Card provided inside the box) as well. ",
    },
  ];

  const faqRef = useRef<HTMLDivElement>(null);
  const handleLearnMoreClick = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Grow Beyond
            <span className="block bg-gradient-nature bg-clip-text text-transparent">
              Nature's Limits
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium hydroponic nutrients that unlock your plants' full
            potential. Experience faster growth, higher yields, and healthier
            plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg" className="text-lg px-8 py-6">
              Explore Products
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Garden Essence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-formulated nutrients deliver exceptional
              results while maintaining environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-leaf rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-forest">
                  <benefit.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of hydroponic nutrients designed to
              support every stage of your plants' growth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30" ref={faqRef}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Us CTA */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300 shadow-earth"
                >
                  Contact Us
                </Button>
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
      </section>
    </div>
  );
};

export default Index;
