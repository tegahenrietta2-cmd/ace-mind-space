import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3];

const features = [
  {
    icon: Leaf,
    title: "Holistic Approach",
    desc: "We treat the whole person — mind, body, and spirit — with personalized care plans.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    desc: "A judgment-free space where your privacy and comfort are our top priorities.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Licensed therapists and counselors with decades of combined experience.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 md:pt-20 overflow-hidden">
        {/* 3D Sliding Background */}
        <div className="absolute inset-0" style={{ perspective: "1200px" }}>
          {heroSlides.map((slide, i) => {
            const offset = i - currentSlide;
            return (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-[1.2s] ease-in-out"
                style={{
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: offset === 0 ? 1 : 0,
                  transform: `translateZ(${offset === 0 ? "0px" : offset > 0 ? "-300px" : "100px"}) 
                              translateX(${offset * 30}%) 
                              rotateY(${offset * -15}deg)
                              scale(${offset === 0 ? 1 : 0.85})`,
                  zIndex: offset === 0 ? 1 : 0,
                }}
              />
            );
          })}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background via-background/90 to-background/50 z-[2]" />

        <div className="container relative z-10 px-5 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground animate-fade-in">
              Your Path to <span className="text-primary">Mental Wellness</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in">
              We provide thoughtful medication management and mental health care tailored to your unique needs, helping you regain stability, clarity, and confidence.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 md:px-7 md:py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 md:px-7 md:py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Our Services
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="mt-8 md:mt-10 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentSlide ? "w-8 bg-primary" : "w-3 bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-24 bg-secondary">
        <div className="container px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4">
            Why Choose Acepoint Health?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
            We believe everyone deserves access to quality mental health care in a nurturing environment.
          </p>
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-24">
        <div className="container px-5 md:px-8">
          <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              Taking the first step is often the hardest. We're here to walk alongside you every step of the way.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-card text-primary px-6 py-3 md:px-8 md:py-3.5 font-semibold hover:bg-card/90 transition-colors shadow-lg text-sm md:text-base"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
