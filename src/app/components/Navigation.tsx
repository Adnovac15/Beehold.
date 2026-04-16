import { Link, useLocation } from "react-router";
import logo from "../../imports/beehold_logo_2k.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(245,197,0,0.15)]">
      {/* Hazard stripe */}
      <div
        className="h-2"
        style={{
          background: 'repeating-linear-gradient(-45deg, var(--bee), var(--bee) 12px, var(--ink) 12px, var(--ink) 24px)'
        }}
      />

      <div className="bg-[var(--charcoal)] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="BeeHold"
              className="w-8 h-8"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(245,197,0,0.5))'
              }}
            />
            <span
              className="tracking-[0.32em] uppercase text-sm sm:text-base"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'var(--bee)'
              }}
            >
              BEEHOLD
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/work" active={isActive('/work')}>Work</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--bee)] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(245,197,0,0.15)] bg-[var(--charcoal)]">
            <div className="px-6 py-4 space-y-3">
              <MobileNavLink to="/" active={isActive('/')} onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/work" active={isActive('/work')} onClick={() => setMobileMenuOpen(false)}>
                Work
              </MobileNavLink>
              <MobileNavLink to="/about" active={isActive('/about')} onClick={() => setMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/contact" active={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="relative transition-colors duration-200"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active ? 'var(--bee)' : 'var(--ash)',
      }}
    >
      {children}
      {active && (
        <div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--bee)]"
        />
      )}
    </Link>
  );
}

function MobileNavLink({ to, active, children, onClick }: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 border-l-2 pl-4 transition-all duration-200"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active ? 'var(--bee)' : 'var(--ash)',
        borderColor: active ? 'var(--bee)' : 'transparent'
      }}
    >
      {children}
    </Link>
  );
}