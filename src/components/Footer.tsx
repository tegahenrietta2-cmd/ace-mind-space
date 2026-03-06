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
            <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Phone size={14} /> (325) 221-0076</span>
            <span className="flex items-center gap-2"><Phone size={14} /> (346) 202-4840</span>
            <span className="flex items-center gap-2"><span className="text-xs">📠</span> (832) 336-3864</span>
            <span className="flex items-center gap-2"><Mail size={14} /> ace@acepointhealth.com</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> 2404 Greenhouse Rd, Suite D 1020, Houston, TX 77084</span>
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
