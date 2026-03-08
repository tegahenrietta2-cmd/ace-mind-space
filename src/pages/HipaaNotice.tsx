import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const HipaaNotice = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-primary" size={32} />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              HIPAA Notice of Privacy Practices
            </h1>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Effective Date: January 1, 2026 — Acepoint Health
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">
              Your Information. Your Rights. Our Responsibilities.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information.{" "}
              <strong className="text-foreground">Please review it carefully.</strong>
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              How We Use or Disclose Your Health Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We are permitted or required to use and disclose your protected health information (PHI) in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Treatment:</strong> We may use your PHI to provide, coordinate, or manage your mental health care and related services.</li>
              <li><strong className="text-foreground">Payment:</strong> We may use and disclose your PHI to bill and receive payment for the services we provide.</li>
              <li><strong className="text-foreground">Health Care Operations:</strong> We may use and disclose your PHI for our internal operations, including quality assessment and improvement.</li>
              <li><strong className="text-foreground">As Required by Law:</strong> We will disclose your PHI when required to do so by federal, state, or local law.</li>
              <li><strong className="text-foreground">Public Health Activities:</strong> As required for public health purposes such as preventing or controlling disease.</li>
              <li><strong className="text-foreground">Health and Safety:</strong> To prevent a serious threat to your health and safety or the health and safety of the public or another person.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              Your Rights Regarding Your Health Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Right to Inspect and Copy:</strong> You have the right to inspect and obtain a copy of your PHI maintained by our practice.</li>
              <li><strong className="text-foreground">Right to Amend:</strong> You may request an amendment of your PHI if you believe it is incorrect or incomplete.</li>
              <li><strong className="text-foreground">Right to an Accounting of Disclosures:</strong> You have the right to request a list of disclosures we have made of your PHI.</li>
              <li><strong className="text-foreground">Right to Request Restrictions:</strong> You may request restrictions on how we use or disclose your PHI for treatment, payment, or health care operations.</li>
              <li><strong className="text-foreground">Right to Request Confidential Communications:</strong> You may request that we communicate with you in a specific way or at a specific location.</li>
              <li><strong className="text-foreground">Right to a Copy of This Notice:</strong> You may request a paper copy of this notice at any time.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              Our Responsibilities
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We are required by law to maintain the privacy and security of your PHI.</li>
              <li>We will notify you promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
              <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
              <li>We will not use or share your information other than as described here unless you tell us we can in writing. You may change your mind at any time by contacting us.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              Complaints
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you believe your privacy rights have been violated, you may file a complaint with our practice or with the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for filing a complaint.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              Contact Us
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              For questions about this notice or to exercise your rights, please contact our Privacy Officer:
            </p>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Acepoint Health — Privacy Officer</strong></p>
              <p>Phone: <a href="tel:3252210076" className="hover:text-primary transition-colors">(325) 221-0076</a></p>
              <p>Email: <a href="mailto:ace@acepointhealth.com" className="hover:text-primary transition-colors">ace@acepointhealth.com</a></p>
              <p>Address: 2404 Greenhouse Rd, Suite D 1020, Houston, TX 77084</p>
            </div>
          </div>

          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
              Federal & State Regulations
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Acepoint Health complies with all applicable federal and state regulations regarding mental health care and privacy, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li><strong className="text-foreground">HIPAA Privacy Rule</strong> (45 CFR Part 160 and Subparts A and E of Part 164)</li>
              <li><strong className="text-foreground">HIPAA Security Rule</strong> (45 CFR Part 160 and Subparts A and C of Part 164)</li>
              <li><strong className="text-foreground">HITECH Act</strong> — Health Information Technology for Economic and Clinical Health Act</li>
              <li><strong className="text-foreground">42 CFR Part 2</strong> — Confidentiality of Substance Use Disorder Patient Records</li>
              <li><strong className="text-foreground">State Mental Health Confidentiality Laws</strong> — applicable state-specific statutes governing mental health records</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HipaaNotice;
