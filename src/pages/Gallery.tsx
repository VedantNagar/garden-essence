import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Award, Sprout } from "lucide-react";
import { galleryImages, videos } from "@/data/galleryData";

const Gallery = () => {
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

        {/* Educational Videos */}
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

        {/* My Garden Gallery - Aligned Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            My Garden Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-nature opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

   {/*                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">
                      {image.alt}
                    </p>
                  </div> */}
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
