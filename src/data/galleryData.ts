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
  src?: string; // Optional: path to local video file
}

export const videos: VideoData[] = [
  {
    id: "1",
    title: "Leafy Greens-250",
    description:
      "Results of the leafy greens-250 nutrients. These are our home grown plants.",
    thumbnail: "/images/gallery/image26.jpg",
    duration: "--",
    category: "Local Video",
    src: "/videos/video1.mp4",
  },
  {
    id: "2",
    title: "Veggies-200",
    description:
      "Results of the veggies-200 nutrients. These are our home grown plants.",
    thumbnail: "/images/gallery/image13.jpg",
    duration: "--",
    category: "Local Video",
    src: "/videos/video2.mp4",
  },
];
