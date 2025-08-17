import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                Garden Essence
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Premium hydroponic nutrients for superior plant growth.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@gardenessence.co.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 99675 51104</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Garden St, Green Valley, CA 90210</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/substance1"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Leafy Greens - 250
                </Link>
              </li>
              <li>
                <Link
                  to="/substance2"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Veggies – 200
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Garden Essence. All rights reserved.</p>
          <p className="mt-2 font-bold">
            Mfd. by HYDROBOOST, New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
