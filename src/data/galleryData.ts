export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/image1.jpg", alt: "Hydroponic setup showcase" },
  { src: "/images/gallery/image2.jpg", alt: "Tomato plants growing" },
  { src: "/images/gallery/image3.jpg", alt: "Tomato plants growing" },
  { src: "/images/gallery/image4.jpg", alt: "Leafy greens harvest" },
  { src: "/images/gallery/image5.jpg", alt: "Root development progress" },
  { src: "/images/gallery/image6.jpg", alt: "Nutrient solution mixing" },
  {
    src: "/images/gallery/image7.jpg",
    alt: "Before and after growth comparison",
  },
  { src: "/images/gallery/image8.jpg", alt: "Healthy plant roots" },
  { src: "/images/gallery/image9.jpg", alt: "Fresh vegetable harvest" },
  { src: "/images/gallery/image10.jpg", alt: "Hydroponic system in action" },
  { src: "/images/gallery/image11.jpg", alt: "Growing medium setup" },
  { src: "/images/gallery/image12.jpg", alt: "Plant growth monitoring" },
  { src: "/images/gallery/image13.jpg", alt: "Nutrient dosing process" },
  { src: "/images/gallery/image14.jpg", alt: "Healthy leaf development" },
  { src: "/images/gallery/image15.jpg", alt: "Water circulation system" },
  { src: "/images/gallery/image16.jpg", alt: "Garden ecosystem overview" },
  { src: "/images/gallery/image17.jpg", alt: "Flowering stage plants" },
  { src: "/images/gallery/image18.jpg", alt: "Optimal pH testing" },
  { src: "/images/gallery/image19.jpg", alt: "Advanced growing techniques" },
  { src: "/images/gallery/image20.jpg", alt: "Successful harvest results" },
  { src: "/images/gallery/image21.jpg", alt: "Professional hydroponic setup" },
  { src: "/images/gallery/image22.jpg", alt: "Mature plant development" },
  { src: "/images/gallery/image23.jpg", alt: "Nutrient tank maintenance" },
  { src: "/images/gallery/image24.jpg", alt: "Greenhouse environment control" },
  { src: "/images/gallery/image25.jpg", alt: "Automated watering system" },
  { src: "/images/gallery/image26.jpg", alt: "Premium harvest quality" },
];

export interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export const videos: VideoData[] = [
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
    title: "Leafy Greens - 250 vs Traditional Nutrients",
    description:
      "See the amazing results when comparing our Leafy Greens - 250 with traditional growing methods.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "8:45",
    category: "Comparison",
  },
  {
    id: "3",
    title: "Veggies – 200 Success Stories",
    description:
      "Real customers share their incredible results using our Advanced Veggies – 200 formula.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "12:15",
    category: "Testimonials",
  },
];
