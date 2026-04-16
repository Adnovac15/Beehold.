import { Link } from "react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../../imports/beehold_logo_2k.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[rgba(255,255,255,0.06)] relative">
      {/* Hazard stripe */}
      <div
        className="h-1"
        style={{
          background: 'repeating-linear-gradient(-45deg, var(--bee), var(--bee) 8px, var(--ink) 8px, var(--ink) 16px)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="BeeHold"
                className="w-7 h-7"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(245,197,0,0.5))'
                }}
              />
              <span
                className="tracking-[0.32em] uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '16px',
                  color: 'var(--bee)'
                }}
              >
                BEEHOLD
              </span>
            </div>
            <p 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--ash)',
                lineHeight: 1.7
              }}
            >
              Motion graphics studio based in Manchester, creating bold visual stories for brands worldwide.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <FooterTitle>Navigation</FooterTitle>
            <div className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/work">Work</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <FooterTitle>Services</FooterTitle>
            <div className="space-y-3">
              <FooterText>Motion Graphics</FooterText>
              <FooterText>Brand Animation</FooterText>
              <FooterText>Video Production</FooterText>
              <FooterText>Explainer Videos</FooterText>
              <FooterText>Social Content</FooterText>
            </div>
          </div>

          {/* Contact */}
          <div>
            <FooterTitle>Get In Touch</FooterTitle>
            <div className="space-y-3">
              <FooterText>
                <a href="mailto:hello@beehold.studio" className="hover:text-[var(--bee)] transition-colors duration-200">
                  hello@beehold.studio
                </a>
              </FooterText>
              <FooterText>
                <a href="tel:+441611234567" className="hover:text-[var(--bee)] transition-colors duration-200">
                  +44 161 123 4567
                </a>
              </FooterText>
              <FooterText>
                Northern Quarter<br />
                Manchester, UK
              </FooterText>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            className="text-[10px] tracking-[0.1em]"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--ash)'
            }}
          >
            © 2026 BeeHold Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>
            <FooterBottomLink href="#">Terms of Service</FooterBottomLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="mb-4 text-[11px] tracking-[0.14em] uppercase"
      style={{
        fontFamily: 'var(--font-mono)',
        color: 'var(--bee)'
      }}
    >
      {children}
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <div>
      <Link
        to={to}
        className="hover:text-[var(--bee)] transition-colors duration-200"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--ash)',
          display: 'block'
        }}
      >
        {children}
      </Link>
    </div>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return (
    <div 
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--ash)',
        lineHeight: 1.6
      }}
    >
      {children}
    </div>
  );
}

function FooterBottomLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:text-[var(--bee)] transition-colors duration-200"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--ash)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 border border-[rgba(255,255,255,0.1)] rounded flex items-center justify-center hover:border-[var(--bee)] hover:bg-[rgba(245,197,0,0.1)] transition-all duration-200"
      style={{
        color: 'var(--ash)'
      }}
    >
      {icon}
    </a>
  );
}