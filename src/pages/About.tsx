import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
      <div className="container px-5 md:px-8 max-w-4xl">
        <ScrollReveal>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-center leading-tight mb-8 md:mb-12">
            About <span className="text-primary">Us</span>
          </h1>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Acepoint Mental Health provides comprehensive psychiatric evaluation and personalized treatment for children, adolescents, adults, and older adults. We care for individuals experiencing attention deficit hyperactivity disorder (ADHD), anxiety, depression, mood disorders, trauma-related conditions (PTSD), substance use disorder, and insomnia.
            </p>
            <p>
              Our clinical approach begins with a thorough initial assessment of each patient’s symptoms. It develops an individualized care plan using evidence-informed practices, ongoing medication management, monitoring, and collaborative decision-making to support accurate diagnosis, symptom improvement, and long-term stability.
            </p>
            <p>
              At Acepoint Mental Health, our focus is to help every patient achieve better emotional regulation, improved concentration, healthier sleep, stronger coping skills, and a higher quality of life. We provide care in a private, respectful, and supportive environment where patients feel heard, understood, and actively involved in every stage of treatment.
            </p>
            <p>
              For your convenience, Acepoint Mental Health offers secure and confidential telehealth consultations, making expert psychiatric care more accessible wherever you are. Same-day appointments may be available. Call Acepoint Mental Health or schedule an appointment online today to receive personalized care delivered with clinical expertise, empathy, and compassion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-14 md:py-24">
      <div className="container px-5 md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16">Our Values</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.12}>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <v.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-1.5 md:mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-secondary">
      <div className="container max-w-3xl text-center px-5 md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Founded with the vision that everyone deserves compassionate mental health care, 
            Acepoint Mental Health has grown from a small practice into a trusted wellness partner 
            for hundreds of individuals and families in our community.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Our team brings together diverse expertise in cognitive-behavioral therapy, 
            mindfulness-based approaches, trauma-informed care, and family systems therapy — 
            ensuring that we can meet you wherever you are on your journey.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
