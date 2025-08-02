import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Shield, CheckCircle, Leaf } from "lucide-react";
import substance1Image from "@/assets/substance1.jpg";

const Substance1 = () => {
  const features = [
    "Essential macro and micronutrients",
    "Balanced NPK ratio for optimal growth",
    "Enhanced with chelated minerals",
    "pH buffered for stability",
    "Compatible with all growing media"
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Superior Absorption",
      description: "Chelated nutrients ensure maximum uptake by plant roots"
    },
    {
      icon: Zap,
      title: "Fast-Acting Formula",
      description: "See visible results within days of application"
    },
    {
      icon: Shield,
      title: "Plant Protection",
      description: "Strengthens plant immunity and disease resistance"
    }
  ];

  const specifications = [
    { label: "NPK Ratio", value: "20-10-20" },
    { label: "pH Range", value: "5.5 - 6.5" },
    { label: "EC Level", value: "1.2 - 2.0" },
    { label: "Concentration", value: "1-2ml per liter" },
    { label: "Shelf Life", value: "3 years" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-gradient-leaf text-primary-foreground">
                Growth Formula
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Premium Growth Formula
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our flagship nutrient solution designed to maximize vegetative growth and 
              overall plant health. Perfect for all stages of plant development.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="nature" size="lg" className="flex-1">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Download Guide
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-card rounded-lg p-8 shadow-forest">
              <img
                src={substance1Image}
                alt="Growth Formula"
                className="w-full max-w-md mx-auto rounded-lg shadow-earth hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-nature text-primary-foreground rounded-full p-4 shadow-glow animate-float">
              <Leaf className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Growth Formula?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="bg-gradient-leaf rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-forest">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-nature text-primary-foreground shadow-forest">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Usage Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="opacity-95">Mix 1-2ml per liter of water</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="opacity-95">Adjust pH to 5.5-6.5 range</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="opacity-95">Apply to growing medium</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="opacity-95">Monitor EC levels regularly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Substance1;