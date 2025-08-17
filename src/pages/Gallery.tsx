import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Award, Sprout, Phone, Mail } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
            Discover the power of our hydroponic nutrients through videos and
            pictures of our <strong>own home grown plants</strong> using these
            Garden Essence™ nutrients.
          </p>
        </div>

        {/* Educational Videos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Educational Videos
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {videos
              .filter((v) => v.src)
              .map((video) => (
                <Card
                  key={video.id}
                  className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-2 overflow-hidden w-full max-w-xl"
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <video
                      src={video.src}
                      controls
                      className="w-full h-[400px] object-cover rounded-lg"
                      poster={video.thumbnail}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 left-4"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
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
            Give your plants the nutrients they deserve with Garden Essence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
                  For Order
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Order & Bulk Purchase</DialogTitle>
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
                      <div className="text-center text-base font-semibold text-primary mt-4">
                        BULK PURCHASE OPTIONS AVAILABLE.
                        <br />
                        PLEASE CONTACT AT:-{" "}
                        <span className="underline">
                          support@gardenessence.co.in
                        </span>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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

export default Gallery;
