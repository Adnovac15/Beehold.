import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  return (
    <div className="pt-[72px] min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--charcoal)] py-20 md:py-24 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 right-0 h-2"
          style={{
            background: 'repeating-linear-gradient(-45deg, var(--bee), var(--bee) 12px, var(--ink) 12px, var(--ink) 24px)'
          }}
        />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='90'%20height='51.96'%3E%3Cpolygon%20points='60.0,25.98%2045.0,51.96%2015.0,51.96%200.0,25.98%2015.0,0.0%2045.0,0.0'%20fill='none'%20stroke='rgba%28245,197,0,0.08%29'%20stroke-width='1'/%3E%3Cpolygon%20points='105.0,0.0%2090.0,25.98%2060.0,25.98%2045.0,0.0%2060.0,-25.98%2090.0,-25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.08%29'%20stroke-width='1'/%3E%3Cpolygon%20points='105.0,51.96%2090.0,77.94%2060.0,77.94%2045.0,51.96%2060.0,25.98%2090.0,25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.08%29'%20stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '90px 51.96px'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-[1]">
          <div 
            className="mb-4 text-[10px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)'
            }}
          >
            <span className="mr-2">✦</span>Get In Touch
          </div>
          <h1 
            className="mb-6 leading-[0.9]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px, 12vw, 120px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              color: 'var(--paper)'
            }}
          >
            Let's <span className="text-[var(--bee)]">Talk</span>
          </h1>
          <p 
            className="max-w-[500px]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--ash)',
              lineHeight: 1.8
            }}
          >
            Ready to create something bold? Drop us a line and let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 
                className="mb-6 leading-[0.95]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 5vw, 42px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  color: 'var(--paper)'
                }}
              >
                Contact <span className="text-[var(--bee)]">Info</span>
              </h2>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="hello@beehold.studio"
                  link="mailto:hello@beehold.studio"
                />
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone"
                  value="+44 161 123 4567"
                  link="tel:+441611234567"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  label="Location"
                  value="Northern Quarter, Manchester, UK"
                />
              </div>
            </div>

            <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-6">
              <div 
                className="mb-3 text-[9px] tracking-[0.16em] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--bee)'
                }}
              >
                Office Hours
              </div>
              <div 
                className="space-y-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--ash)',
                  lineHeight: 1.6
                }}
              >
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[var(--paper)]">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[var(--paper)]">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzMzMTg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="BeeHold Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-8">
              <div 
                className="mb-6 text-[11px] tracking-[0.14em] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--bee)'
                }}
              >
                Send Us A Message
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Name" placeholder="Your name" required />
                  <FormField label="Email" type="email" placeholder="your@email.com" required />
                </div>
                
                <FormField label="Company" placeholder="Company name (optional)" />
                
                <FormField label="Project Type" select options={[
                  "Select project type",
                  "Brand Launch",
                  "Explainer Video",
                  "Corporate Video",
                  "Social Media Content",
                  "Event Graphics",
                  "Other"
                ]} />
                
                <FormField 
                  label="Budget Range" 
                  select 
                  options={[
                    "Select budget range",
                    "Under £5,000",
                    "£5,000 - £10,000",
                    "£10,000 - £25,000",
                    "£25,000 - £50,000",
                    "£50,000+"
                  ]} 
                />
                
                <FormField 
                  label="Message" 
                  textarea 
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                />

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[var(--bee)] rounded-sm transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3"
                  style={{
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '16px'
                  }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--charcoal)] py-16 md:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(245,197,0,0.08) 0%, transparent 70%)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center relative z-[1]">
          <div 
            className="mb-4 text-[10px] tracking-[0.18em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)'
            }}
          >
            Prefer Email?
          </div>
          <h2 
            className="mb-3 leading-[0.9]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              color: 'var(--paper)'
            }}
          >
            Drop Us a Line Directly
          </h2>
          <a
            href="mailto:hello@beehold.studio"
            className="inline-block transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.04em',
              color: 'var(--bee)'
            }}
          >
            hello@beehold.studio
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, label, value, link }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  link?: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-3 mb-2">
        <div className="text-[var(--bee)]">{icon}</div>
        <div 
          className="text-[9px] tracking-[0.14em] uppercase"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--bee)'
          }}
        >
          {label}
        </div>
      </div>
      <div 
        className="pl-8"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--paper)',
          lineHeight: 1.6
        }}
      >
        {value}
      </div>
    </>
  );

  if (link) {
    return (
      <a 
        href={link}
        className="block hover:opacity-80 transition-opacity duration-200"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

function FormField({ 
  label, 
  type = "text", 
  placeholder, 
  required = false, 
  textarea = false,
  select = false,
  options,
  rows = 4
}: { 
  label: string; 
  type?: string; 
  placeholder?: string; 
  required?: boolean;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
  rows?: number;
}) {
  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--ash)'
  };

  const inputStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--paper)'
  };

  return (
    <div>
      <label className="block mb-2" style={labelStyle}>
        {label} {required && <span className="text-[var(--bee)]">*</span>}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="w-full bg-[var(--grime)] border border-[rgba(255,255,255,0.1)] rounded px-4 py-3 outline-none focus:border-[var(--bee)] transition-colors duration-200 resize-none"
          style={inputStyle}
        />
      ) : select ? (
        <select
          required={required}
          className="w-full bg-[var(--grime)] border border-[rgba(255,255,255,0.1)] rounded px-4 py-3 outline-none focus:border-[var(--bee)] transition-colors duration-200"
          style={inputStyle}
        >
          {options?.map((option, index) => (
            <option key={index} value={index === 0 ? "" : option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full bg-[var(--grime)] border border-[rgba(255,255,255,0.1)] rounded px-4 py-3 outline-none focus:border-[var(--bee)] transition-colors duration-200"
          style={inputStyle}
        />
      )}
    </div>
  );
}