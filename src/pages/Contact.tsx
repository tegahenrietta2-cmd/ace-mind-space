import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container px-5 md:px-8">
          <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h1>
          <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            Reach out to schedule an appointment, ask a question, or simply learn more about our services.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="font-display text-2xl font-semibold mb-6">Send Us a Message</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-medium mb-1.5 block text-foreground">Phone (Optional)</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="mb-6">
                  <label className="text-sm font-medium mb-1.5 block text-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:3252210076" className="hover:text-primary transition-colors">(325) 221-0076</a>
                      <a href="tel:3462024840" className="hover:text-primary transition-colors block">(346) 202-4840</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Printer size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Fax</p>
                      <a href="tel:8323363864" className="hover:text-primary transition-colors">(832) 336-3864</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:ace@acepointhealth.com" className="hover:text-primary transition-colors">ace@acepointhealth.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <a href="https://maps.google.com/?q=2404+Greenhouse+Rd+Suite+D+1020+Houston+TX+77084" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">2404 Greenhouse Rd<br />Suite D 1020, Houston, TX 77084</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold">Office Hours</h3>
                </div>
                <div className="text-sm text-muted-foreground space-y-1.5">
                  <p>Monday – Friday: 8:00 AM – 7:00 PM</p>
                  <p>Saturday: 9:00 AM – 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
