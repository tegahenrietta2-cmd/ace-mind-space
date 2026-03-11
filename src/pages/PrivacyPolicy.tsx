import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            Last Updated: March 1, 2026 — Acepoint Mental Health
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Acepoint Mental Health ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Information We Collect</h2>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect personally identifiable information that you voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>Name, email address, and phone number</li>
              <li>Information submitted through our contact forms</li>
              <li>Insurance and billing details (for patients)</li>
              <li>Health information as described in our HIPAA Notice</li>
            </ul>

            <h3 className="font-display text-lg font-semibold mb-2 mt-6 text-foreground">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address and general location data</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. We use the following types:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li><strong className="text-foreground">Essential Cookies:</strong> Necessary for the website to function properly (e.g., session management, cookie consent preferences).</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve performance and content.</li>
              <li><strong className="text-foreground">Functional Cookies:</strong> Remember your preferences such as language or region.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>To provide and manage our mental health services</li>
              <li>To respond to inquiries and appointment requests</li>
              <li>To process payments and insurance claims</li>
              <li>To improve our website and services</li>
              <li>To send relevant communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">How We Protect Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard administrative, technical, and physical safeguards to protect your personal and health information. This includes encryption, secure servers, access controls, and regular security assessments. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Third-Party Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information with trusted third parties only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm mt-3">
              <li>Service providers who assist in our operations (e.g., billing, IT support)</li>
              <li>As required by law, regulation, or legal proceedings</li>
              <li>To protect the rights, property, or safety of Acepoint Mental Health, our patients, or others</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              For health information rights, please refer to our{" "}
              <a href="/hipaa-notice" className="text-primary underline hover:text-primary/80">HIPAA Notice of Privacy Practices</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13 without parental consent. If we learn that we have collected such information, we will take steps to delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h2 className="font-display text-xl font-semibold mb-2 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Acepoint Health — Privacy Officer</strong></p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: privacy@acepointhealth.com</p>
              <p>Address: 123 Wellness Way</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
