import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Shield } from "lucide-react";
import heroImage from "@/assets/hero-hydroponic.jpg";
import substance1Image from "@/assets/substance1.jpg";
import substance2Image from "@/assets/substance2.jpg";

const Index = () => {
  const products = [
    {
      title: "Growth Formula",
      description: "Our premium nutrient solution designed to maximize vegetative growth and overall plant health. Perfect for all stages of plant development.",
      image: substance1Image,
      link: "/substance1",
      features: [
        "Essential macro and micronutrients",
        "Balanced NPK ratio for optimal growth",
        "Enhanced with chelated minerals",
        "pH buffered for stability"
      ]
    },
    {
      title: "Root Booster",
      description: "Advanced root development formula that creates the foundation for exceptional plant growth. Enhance your plants' ability to absorb nutrients.",
      image: substance2Image,
      link: "/substance2",
      features: [
        "Advanced root development complex",
        "Natural growth hormones",
        "Mycorrhizal fungi blend",
        "Amino acid enriched"
      ]
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Formulated with organic and sustainable ingredients"
    },
    {
      icon: Droplets,
      title: "Superior Results",
      description: "Proven to increase yields by up to 40%"
    },
    {
      icon: Shield,
      title: "Plant Health",
      description: "Strengthens plant immunity and disease resistance"
    }
  ];

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
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Grow Beyond
            <span className="block bg-gradient-nature bg-clip-text text-transparent">
              Nature's Limits
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium hydroponic nutrients that unlock your plants' full potential. 
            Experience faster growth, higher yields, and healthier plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg" className="text-lg px-8 py-6">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
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
              Why Choose HydroNature?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-formulated nutrients deliver exceptional results 
              while maintaining environmental responsibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-leaf rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-forest">
                  <benefit.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
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
              Discover our complete range of hydroponic nutrients designed 
              to support every stage of your plants' growth journey.
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
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-nature text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join thousands of growers who have already discovered the power 
            of HydroNature nutrients. Your plants deserve the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-primary-foreground text-primary hover:scale-105 transition-transform duration-300 shadow-earth"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
