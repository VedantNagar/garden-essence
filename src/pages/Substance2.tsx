import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, Sparkles, CheckCircle, Leaf, Flower } from "lucide-react";
import substance2Image from "@/assets/substance2.jpg";

const Substance2 = () => {
  const features = [
    "Advanced root development complex",
    "Natural growth hormones",
    "Mycorrhizal fungi blend",
    "Amino acid enriched",
    "Organic certified ingredients"
  ];

  const benefits = [
    {
      icon: Flower,
      title: "Enhanced Root Growth",
      description: "Stimulates rapid root development and branching for better nutrient uptake"
    },
    {
      icon: TreePine,
      title: "Stronger Plants",
      description: "Builds robust root systems that support healthier, more resilient plants"
    },
    {
      icon: Sparkles,
      title: "Natural Ingredients",
      description: "Formulated with organic compounds and beneficial microorganisms"
    }
  ];

  const specifications = [
    { label: "Application Rate", value: "0.5-1ml per liter" },
    { label: "pH Range", value: "6.0 - 7.0" },
    { label: "Frequency", value: "Weekly application" },
    { label: "Growth Stage", value: "Seedling to vegetative" },
    { label: "Shelf Life", value: "2 years" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-gradient-earth text-primary-foreground">
                Root Booster
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Advanced Root Booster
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A specialized root development formula that creates the foundation for exceptional 
              plant growth. Enhance your plants' ability to absorb nutrients and thrive.
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
              <Button variant="earth" size="lg" className="flex-1">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Download Guide
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-card rounded-lg p-8 shadow-earth">
              <img
                src={substance2Image}
                alt="Root Booster"
                className="w-full max-w-md mx-auto rounded-lg shadow-forest hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-earth text-primary-foreground rounded-full p-4 shadow-glow animate-float">
              <Flower className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Root Booster?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-earth transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="bg-gradient-earth rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-earth">
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
          <Card className="shadow-forest">
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

          <Card className="bg-gradient-earth text-primary-foreground shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Usage Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="opacity-95">Mix 0.5-1ml per liter of water</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="opacity-95">Apply during transplanting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="opacity-95">Use weekly for best results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="opacity-95">Compatible with all nutrients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Substance2;