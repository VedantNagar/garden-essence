import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Droplets,
  Zap,
  Shield,
  CheckCircle,
  Leaf,
  Info,
  Beaker,
  Target,
  Users,
} from "lucide-react";
import veggiesImg from "../../public/images/product/veggies.jpg";

const Substance2 = () => {
  const features = [
    "Makes 200 litres of working nutrient solution",
    "Two bottles make 2L stock (1L each of A & B)",
    "Works with cocopeat, soil, and inert mediums",
    "100% water soluble – clog-free & clean",
    "Ideal for tomatoes, cucumbers, chillies, bell peppers, floral crops & more",
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Clean Application",
      description:
        "100% soluble – won’t clog drip lines, emitters, or spray pipes",
    },
    {
      icon: Zap,
      title: "Complete Nutrition",
      description: "No need for additional supplements if used as directed",
    },
    {
      icon: Shield,
      title: "Proven Performance",
      description:
        "Tested across diverse vegetables & conditions with consistent results",
    },
  ];

  const specifications = [
    {
      label: "Crop Type",
      value:
        "Tomatoes, Cucumbers, Chillies, Bell Peppers, Melons, Floral Crops",
    },
    { label: "Net Weight", value: "240 gms" },
    { label: "Stock Solution", value: "2L (1L A + 1L B)" },
    { label: "Dilution", value: "Makes up to 200L nutrient solution" },
    { label: "Shelf Life", value: "3 years" },
  ];

  const detailedInfo = {
    composition: [
      "Balanced NPK ratio optimized for fruiting vegetables",
      "Enhanced Calcium content for strong cell walls and disease resistance",
      "Secondary nutrients: Magnesium (Mg), Sulfur (S) for protein synthesis",
      "Complete micronutrient package with chelated Iron, Zinc, Manganese",
      "Boron and Molybdenum for flower and fruit development",
      "pH stabilizers for consistent nutrient availability",
    ],
    usage: [
      "Prepare stock solutions A and B separately in clean containers",
      "Add equal amounts of stock A and B to fresh water",
      "Maintain EC levels: 1200-1800 ppm for mature fruiting plants",
      "Optimal pH range: 5.8-6.2 for maximum nutrient uptake",
      "Monitor and replace solution every 2-3 weeks",
      "Increase concentration during flowering and fruiting stages",
    ],
    applications: [
      "Commercial greenhouse production",
      "Vertical farming systems",
      "Dutch bucket (Bato bucket) systems",
      "Rockwool slab cultivation",
      "Coco coir and perlite mix",
      "Recirculating hydroponic systems",
      "Drip-to-waste systems",
    ],
    crops: [
      "Tomatoes (all varieties - cherry, beefsteak, heirloom)",
      "Cucumbers and zucchini",
      "Bell peppers and chili peppers",
      "Eggplant and okra",
      "Melons and watermelons",
      "Flowering plants and ornamentals",
      "Strawberries and berry crops",
    ],
  };

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
                className="bg-gradient-earth text-primary-foreground"
              >
                Vegetable Formula
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Garden Essence™ – Hydroponic Nutrients (Veggies – 200)
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Balanced hydroponic nutrition for all types of vegetable crops
              including tomatoes, cucumbers, chillies, melons, and flowering
              vegetables. Clean, effective, and easy to use for home or
              commercial growers.
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Info className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">
                      Complete Product Information - Veggies Formula
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* Composition Section */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Beaker className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">
                          Nutrient Composition
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {detailedInfo.composition.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Usage Instructions */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">
                          Usage Instructions
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {detailedInfo.usage.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Droplets className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">
                          System Compatibility
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {detailedInfo.applications.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable Crops */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Leaf className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">
                          Suitable Crops
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {detailedInfo.crops.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-earth rounded-lg p-6 text-center text-primary-foreground mt-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Perfect for Your Vegetable Garden
                      </h4>
                      <p className="text-sm opacity-90 mb-4">
                        Achieve commercial-grade results with our specialized
                        vegetable formula
                      </p>
                      <Button
                        variant="secondary"
                        className="bg-primary-foreground text-primary hover:scale-105 transition-transform"
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-card rounded-lg p-8 shadow-earth">
              <img
                src={veggiesImg}
                alt="Veggies Nutrient"
                className="w-full max-w-md mx-auto rounded-lg shadow-forest hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-earth text-primary-foreground rounded-full p-4 shadow-glow animate-float">
              <Leaf className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Garden Essence™ for Vegetables?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-earth transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="bg-gradient-earth rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-earth">
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

        {/* Specifications & Description */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-forest">
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

          <Card className="bg-gradient-earth text-primary-foreground shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Product Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base opacity-95">
              <p>
                Garden Essence™ Premium Hydroponic Nutrients are 100% water
                soluble and specially designed for a wide range of vegetable
                crops including tomatoes, chillies, bell peppers, melons,
                cucumbers, and floral crops.
              </p>
              <p>
                Suitable for all hydroponic systems – open or closed, drip
                irrigation, and ebb & flow. It provides a complete nutrient
                profile for all stages of plant growth.
              </p>
              <p>
                If used as per the provided instructions and crop conditions are
                maintained, no additional feeding is needed. Ideal for home
                growers, hobbyists, and commercial producers alike.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Substance2;
