import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, Globe } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to eco-friendly solutions that help create a sustainable future for agriculture."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of growers who share knowledge and support each other's success."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium formulations backed by scientific research and rigorous testing."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Constantly evolving our products to meet the changing needs of modern agriculture."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About HydroNature
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about revolutionizing agriculture through innovative hydroponic solutions 
            that nurture plants and protect our planet.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to make hydroponic growing accessible to everyone, HydroNature 
                began as a small team of agricultural scientists and passionate gardeners who believed 
                in the power of soil-free cultivation.
              </p>
              <p>
                Today, we're proud to offer premium hydroponic nutrients that help growers achieve 
                exceptional results while minimizing environmental impact. Our formulations are the 
                result of years of research and real-world testing.
              </p>
              <p>
                From home gardeners to commercial operations, we're here to support your growing 
                journey with products that deliver consistent, reliable results.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-nature rounded-lg p-8 text-primary-foreground shadow-forest">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-95 leading-relaxed">
              To empower growers worldwide with scientifically-formulated hydroponic solutions 
              that maximize plant health, optimize yields, and contribute to a more sustainable 
              agricultural future.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-leaf rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-forest">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;