import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Users, Sparkles, HeartHandshake, Clock, ShieldCheck } from "lucide-react";
import insuranceMedicare from "@/assets/insurance-medicare.png";
import insuranceAetna from "@/assets/insurance-aetna.png";
import insuranceBcbs from "@/assets/insurance-bcbs.png";
import insuranceCigna from "@/assets/insurance-cigna.png";
import insuranceUhc from "@/assets/insurance-uhc.png";
import insuranceHumana from "@/assets/insurance-humana.png";

const insuranceProviders = [
  { name: "Medicare/Medicaid", logo: insuranceMedicare },
  { name: "Aetna", logo: insuranceAetna },
  { name: "Blue Cross Blue Shield", logo: insuranceBcbs },
  { name: "Cigna", logo: insuranceCigna },
  { name: "UnitedHealthcare/Optum", logo: insuranceUhc },
  { name: "Humana", logo: insuranceHumana },
];

const services = [
  {
    icon: Brain,
    title: "Psychiatric Evaluation",
    desc: "Comprehensive psychiatric assessments to accurately diagnose and develop personalized treatment plans.",
  },
  {
    icon: Sparkles,
    title: "Medication Management",
    desc: "Expert medication prescribing and ongoing monitoring to optimize your treatment and minimize side effects.",
  },
  {
    icon: Users,
    title: "Telepsychiatry Services",
    desc: "Convenient virtual appointments that bring quality psychiatric care to you from the comfort of your home.",
  },
  {
    icon: HeartHandshake,
    title: "Mood & Anxiety Disorder Treatment",
    desc: "Specialized evaluation and evidence-based treatment for depression, bipolar disorder, generalized anxiety, and more.",
  },
  {
    icon: Clock,
    title: "Trauma & PTSD Care",
    desc: "Compassionate, trauma-informed care to help you process and heal from traumatic experiences.",
  },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container px-5 md:px-8">
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Comprehensive <span className="text-primary">Mental Health</span> Services
        </h1>
        <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          We offer a wide range of therapeutic services to support your mental health journey, 
          all delivered with compassion and clinical excellence.
        </p>
      </div>
    </section>

    <section className="pb-16 md:pb-24">
      <div className="container px-5 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 md:mb-5 transition-colors">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-center mb-4">Insurance We Accept</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          We work with major insurance providers to make quality psychiatric care accessible.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 max-w-5xl mx-auto mb-12">
          {insuranceProviders.map((ins) => (
            <img key={ins.name} src={ins.logo} alt={ins.name} className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
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
