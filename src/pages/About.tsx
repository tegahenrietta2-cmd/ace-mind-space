import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Award, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "We lead with empathy in every interaction, creating a space where you feel truly heard." },
  { icon: Award, title: "Excellence", desc: "Our team stays at the forefront of mental health research and therapeutic techniques." },
  { icon: BookOpen, title: "Education", desc: "We empower you with knowledge and tools to sustain your mental wellness long-term." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container px-5 md:px-8">
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Dedicated to Your <span className="text-primary">Mental Health</span> & Wellbeing
        </h1>
        <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          At Acepoint Health, we believe that mental wellness is the foundation of a fulfilling life. 
          Our team of licensed professionals provides personalized, evidence-based therapy in a warm 
          and welcoming environment.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-secondary">
      <div className="container px-5 md:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Our Mission</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto text-sm md:text-base">
          To provide accessible, high-quality mental health care that empowers individuals 
          and families to live their most authentic lives.
        </p>
      </div>
    </section>

    <section className="py-14 md:py-24">
      <div className="container px-5 md:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-5">
                <v.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Founded with the vision that everyone deserves compassionate mental health care, 
          Acepoint Health has grown from a small practice into a trusted wellness partner 
          for hundreds of individuals and families in our community.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our team brings together diverse expertise in cognitive-behavioral therapy, 
          mindfulness-based approaches, trauma-informed care, and family systems therapy — 
          ensuring that we can meet you wherever you are on your journey.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
