import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold mb-3">Acepoint Health</h3>
          <p className="text-primary-foreground/80 max-w-md text-sm leading-relaxed">
            Compassionate, evidence-based mental health care designed to help you thrive. 
            Your journey to wellness starts here.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
            <Link to="/hipaa-notice" className="hover:text-primary-foreground transition-colors">HIPAA Notice</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={14} /> hello@acepointhealth.com</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> 123 Wellness Way</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <span>© 2026 Acepoint Health. All rights reserved.</span>
        <span className="flex items-center gap-1">Made with <Heart size={12} className="text-accent" /> for your wellbeing</span>
      </div>
    </div>
  </footer>
);

export default Footer;
