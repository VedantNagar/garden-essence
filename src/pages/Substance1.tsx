import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Shield, CheckCircle, Leaf } from "lucide-react";
import leafyGreenImg from "../../public/images/product/leafy-green.jpg";

const Substance1 = () => {
  const features = [
    "Makes 250 litres of working nutrient solution",
    "Includes 2 bottles – makes 2.5L stock solution (1.25L each A & B)",
    "Usable in cocopeat, soil & all inert mediums",
    "100% water soluble & clog-free for drip/spray systems",
    "Ideal for all leafy crops – lettuce, spinach, herbs, etc.",
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Clean & Soluble",
      description:
        "Dissolves completely in water, leaving no residue or clogging",
    },
    {
      icon: Zap,
      title: "Optimized for Leafy Greens",
      description:
        "Specially formulated for crops like lettuce, spinach, and herbs",
    },
    {
      icon: Shield,
      title: "Reliable & Safe",
      description: "Proven through extensive trials for consistent results",
    },
  ];

  const specifications = [
    { label: "Crop Type", value: "Leafy Greens (Lettuce, Spinach, Herbs)" },
    { label: "Net Weight", value: "300 gms" },
    { label: "Stock Solution", value: "2.5L (1.25L A + 1.25L B)" },
    { label: "Dilution", value: "Makes up to 250L nutrient solution" },
    { label: "Shelf Life", value: "3 years" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="bg-gradient-leaf text-primary-foreground"
              >
                Leafy Greens Formula
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Garden Essence™ – Hydroponic Nutrients (Leafy Greens - 250)
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete nutrition package for leafy crops like lettuce, spinach,
              and annual herbs. This balanced formula makes 250L of working
              solution and is suitable for all hydroponic systems and growing
              mediums.
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
                src={leafyGreenImg}
                alt="Leafy Greens Nutrient"
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
            Why Choose Garden Essence™ for Leafy Greens?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="bg-gradient-leaf rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-forest">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specifications and Usage */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                  >
                    <span className="font-medium text-foreground">
                      {spec.label}
                    </span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-nature text-primary-foreground shadow-forest">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Product Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base opacity-95">
              <p>
                Garden Essence™ Premium Hydroponic Nutrients are 100%
                water-soluble and specially formulated for a wide range of leafy
                greens like lettuce, spinach, sweet basil, cilantro, parsley,
                and more.
              </p>
              <p>
                The formula is suitable for open and closed hydroponic systems,
                drip irrigation, and ebb & flow setups. It delivers complete and
                balanced nutrition with no need for additional supplements when
                used as directed.
              </p>
              <p>
                Designed for home growers and professionals alike, the dry mix
                has a long shelf life of 3 years and offers consistent
                performance in diverse growing conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Substance1;
