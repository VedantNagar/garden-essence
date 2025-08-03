import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Award, Sprout } from "lucide-react";

const Gallery = () => {
  const videos = [
    {
      id: "1",
      title: "Complete Hydroponic Setup Guide",
      description:
        "Learn how to set up your first hydroponic system from scratch using our premium nutrients.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "15:30",
      category: "Tutorial",
    },
    {
      id: "2",
      title: "Growth Formula vs Traditional Nutrients",
      description:
        "See the amazing results when comparing our Growth Formula with traditional growing methods.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "8:45",
      category: "Comparison",
    },
    {
      id: "3",
      title: "Root Booster Success Stories",
      description:
        "Real customers share their incredible results using our Advanced Root Booster formula.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "12:15",
      category: "Testimonials",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Garden Essence Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the power of our hydroponic nutrients through videos,
            testimonials, and success stories from growers around the world.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Educational Videos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-muted to-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-nature opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <Play className="h-8 w-8 text-primary-foreground fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nature Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nature Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "photo-1472396961693-142e6e269027",
              "photo-1433086966358-54859d0ed716",
              "photo-1465146344425-f00d5f5c8f07",
              "photo-1426604966848-d7adac402bff",
              "photo-1523712999610-f77fbcfc3843",
              "photo-1500673922987-e212871fec22",
              "photo-1506744038136-46273834b3fb",
              "photo-1501854140801-50d01698950b",
              "photo-1615729947596-a598e5de0ab3",
              "photo-1466721591366-2d5fba72006d",
              "photo-1493962853295-0fd70327578a",
              "photo-1535268647677-300dbf3d78d1",
              "photo-1498936178812-4b2e558d2937",
              "photo-1452960962994-acf4fd70b632",
              "photo-1439886183900-e79ec0057170",
              "photo-1485833077593-4278bba3f11f",
              "photo-1438565434616-3ef039228b15",
              "photo-1452378174528-3090a4bba7b2",
            ].map((imageId, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${imageId}?w=400&h=400&fit=crop`}
                    alt={`Nature scene ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-nature opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-nature rounded-lg p-8 md:p-12 text-center text-primary-foreground shadow-forest">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            Join thousands of successful growers who have transformed their
            gardens with our premium hydroponic nutrients. Your plants deserve
            the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300 shadow-earth">
              Shop Products
            </button>
            <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
