import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "acepoint-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container">
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4">
          <Cookie className="text-primary shrink-0" size={24} />
          <p className="text-sm text-muted-foreground flex-1">
            We use cookies to enhance your experience and analyze site traffic. By clicking "Accept," you consent to our use of cookies. Read our{" "}
            <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
              Privacy Policy
            </Link>{" "}
            for more details.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
