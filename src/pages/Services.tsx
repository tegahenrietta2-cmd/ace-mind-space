import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Users, Baby, Sparkles, HeartHandshake, Clock } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    desc: "One-on-one sessions tailored to your unique needs, addressing anxiety, depression, trauma, and more.",
  },
  {
    icon: Users,
    title: "Couples Counseling",
    desc: "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
  },
  {
    icon: Baby,
    title: "Family Therapy",
    desc: "Navigate family dynamics and build healthier relationships with guidance from experienced therapists.",
  },
  {
    icon: Sparkles,
    title: "Stress Management",
    desc: "Learn practical coping strategies and mindfulness techniques to manage life's daily pressures.",
  },
  {
    icon: HeartHandshake,
    title: "Trauma & PTSD",
    desc: "Specialized trauma-informed care using EMDR, somatic experiencing, and cognitive processing therapy.",
  },
  {
    icon: Clock,
    title: "Crisis Support",
    desc: "Immediate support during difficult moments with flexible scheduling and same-day availability options.",
  },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-32 pb-20">
      <div className="container">
        <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">Our Services</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          Comprehensive <span className="text-primary">Mental Health</span> Services
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          We offer a wide range of therapeutic services to support your mental health journey, 
          all delivered with compassion and clinical excellence.
        </p>
      </div>
    </section>

    <section className="pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Book a free 15-minute consultation and we'll help you find the right path forward.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          Book a Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
