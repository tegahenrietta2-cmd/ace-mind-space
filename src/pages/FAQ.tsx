import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What mental health conditions do you treat?",
    answer:
      "We evaluate and treat a broad range of conditions, including anxiety, depression, ADHD, bipolar disorder, trauma-related disorders, OCD, sleep problems, psychotic disorders, and other psychiatric concerns.",
  },
  {
    question: "Do you provide care for children, adults, and older adults?",
    answer:
      "Yes. We provide psychiatric care across the lifespan, including children, adolescents, adults, and seniors. Age availability may vary by provider.",
  },
  {
    question: "Do I have to live in Texas to receive care?",
    answer:
      "You must be physically located in Texas during your appointment. We serve patients throughout the state, including rural and underserved communities.",
  },
  {
    question: "How does a telehealth appointment work?",
    answer:
      "You meet privately with your provider through secure video using a smartphone, tablet, or computer. You can attend from home or another quiet, private location.",
  },
  {
    question: "What happens during my first appointment?",
    answer:
      "Your provider will discuss your symptoms, health history, medications, current concerns, and treatment goals. You will then receive an individualized treatment plan.",
  },
  {
    question: "Do you provide medication management?",
    answer:
      "Yes. When clinically appropriate, our psychiatric providers can prescribe and manage medications, monitor your progress, and make adjustments based on your response.",
  },
  {
    question: "Can you prescribe controlled medications through telehealth?",
    answer:
      "Certain controlled medications may be prescribed when clinically appropriate and permitted by federal and Texas law. Prescriptions are never guaranteed and require a complete psychiatric evaluation and ongoing monitoring.",
  },
  {
    question: "Do you provide therapy?",
    answer:
      "We may provide therapy, supportive counseling, or referrals based on your needs and the services available within our practice. Contact us to confirm the availability of current therapy.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept selected insurance plans and may also offer self-pay options. Please get in touch with us or use our insurance verification process to confirm your specific benefits before scheduling.",
  },
  {
    question: "How much does an appointment cost?",
    answer:
      "Your cost depends on the type of appointment, your insurance coverage, and any deductible or copayment. We provide clear pricing information before your visit whenever possible.",
  },
  {
    question: "How soon can I get an appointment?",
    answer:
      "Appointment availability varies, but we work to offer timely access to care. Check our online schedule or contact our office to find the earliest available appointment.",
  },
  {
    question: "What do I need for my appointment?",
    answer:
      "You will need a reliable internet connection, a device with a camera and microphone, a photo ID, your medication list, insurance information, and a private place to talk.",
  },
  {
    question: "Is telehealth private and secure?",
    answer:
      "Yes. We use secure technology and follow applicable privacy requirements to protect your personal and health information. We also recommend attending from a quiet, private location.",
  },
  {
    question: "Can a family member join my appointment?",
    answer:
      "Yes, when appropriate and with the patient’s permission. Parents or legal guardians are generally involved in the care of minors based on age, clinical needs, and applicable law.",
  },
  {
    question: "What if I need laboratory testing or an in-person examination?",
    answer:
      "Your provider may order laboratory tests, request medical records, coordinate with another healthcare professional, or recommend an in-person evaluation when necessary for safe treatment.",
  },
  {
    question: "What if I am experiencing a mental health emergency?",
    answer:
      "Our telehealth practice is not an emergency service. Call 911, call or text 988, or go to the nearest emergency room if you may harm yourself or someone else, cannot remain safe, or are experiencing a psychiatric emergency.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule an appointment online or contact our office. Our team will help you complete registration, verify insurance when applicable, and prepare for your first visit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-secondary">
        <div className="container px-5 md:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="text-primary" size={32} />
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Frequently Asked Questions
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="container px-5 md:px-8 max-w-3xl">
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-display font-semibold text-sm md:text-base text-foreground pr-2">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-primary transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 md:px-6 pb-4 md:pb-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 md:mt-12 bg-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20 text-center">
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                Still have questions?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-5">
                Our team is happy to help. Reach out and we’ll get back to you as soon as possible.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
