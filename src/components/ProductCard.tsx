import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

const ProductCard = ({ title, description, image, link, features }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-forest transition-all duration-300 hover:-translate-y-2 bg-card border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={link} className="w-full">
          <Button 
            variant="nature" 
            className="w-full group-hover:scale-105 transition-transform duration-300"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;