import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Closer Secrets"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-brand-gray text-sm leading-relaxed">
              We design, build, and scale high-performing sales departments,
              helping companies in the health and wellness space grow and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-gray-dark mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-gray hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-gray-dark mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Sales Team Recruitment",
                "Closer Training & Coaching",
                "Performance Management",
                "Sales System Design",
                "Team Scaling",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-brand-gray">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-gray-dark mb-4">
              Get in Touch
            </h4>
            <Link
              to="/contact#inquiry"
              className="mt-2 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold px-5 py-2.5 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray-dark">
            &copy; {new Date().getFullYear()} Closer Secrets. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-brand-gray-dark hover:text-brand-gray transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-brand-gray-dark hover:text-brand-gray transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
