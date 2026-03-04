import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading font-semibold text-lg">Vaykr</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span>© {new Date().getFullYear()} Vaykr. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
