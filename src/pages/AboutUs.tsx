import Navbar from "@/components/Navbar";
import {
  heroContent,
  storyContent,
  // missionContent,
} from "@/content/aboutUsContent";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {heroContent.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {storyContent.heading}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            {storyContent.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
            <img
              src="/images/about1.jpg"
              alt="Hydroponic setup"
              className="w-full h-72 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-forest transition-all duration-300 hover:-translate-y-1">
            <img
              src="/images/about2.jpg"
              alt="Lush green produce"
              className="w-full h-72 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
