import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Users, Award, Zap, Target } from "lucide-react";

const team = [
  { name: "Alex Thompson", role: "Creative Director", specialty: "Vision & Strategy" },
  { name: "Jordan Lee", role: "Lead Animator", specialty: "Motion Design" },
  { name: "Sam Rivera", role: "Senior Editor", specialty: "Post-Production" },
  { name: "Casey Morgan", role: "Art Director", specialty: "Visual Identity" },
];

const values = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We push creative boundaries to deliver work that exceeds expectations and wins awards."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation",
    description: "Constantly exploring new techniques and technologies to stay ahead of the curve."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "Working closely with clients as partners to bring their vision to life."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Impact",
    description: "Creating motion graphics that don't just look good—they drive results."
  }
];

export default function About() {
  return (
    <div className="pt-[72px] min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--charcoal)] py-24 relative overflow-hidden">
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
        
        <div className="max-w-[1100px] mx-auto px-12 relative z-[1]">
          <div 
            className="mb-4 text-[10px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)'
            }}
          >
            <span className="mr-2">✦</span>Who We Are
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
            About <span className="text-[var(--bee)]">BeeHold</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1100px] mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="mb-4 text-[11px] tracking-[0.14em] uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--bee)'
              }}
            >
              Our Story
            </div>
            <h2 
              className="mb-6 leading-[0.95]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(42px, 6vw, 56px)',
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                color: 'var(--paper)'
              }}
            >
              Born in Manchester, <span className="text-[var(--bee)]">Built for Impact</span>
            </h2>
            <div 
              className="space-y-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--ash)',
                lineHeight: 1.8
              }}
            >
              <p>
                Founded in 2016, BeeHold emerged from Manchester's vibrant creative scene with a simple mission: 
                create <span className="text-[var(--bee)]">bold motion graphics</span> that make brands impossible to ignore.
              </p>
              <p>
                Drawing inspiration from the city's <span className="text-[var(--bee)]">industrial heritage</span> and 
                contemporary creative energy, we've built a reputation for work that's both visually striking and strategically 
                effective.
              </p>
              <p>
                Today, we're a team of <span className="text-[var(--bee)]">award-winning creatives</span> working with brands 
                across the UK and beyond, from ambitious startups to global enterprises.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1638637869635-f1a90c8f7edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzczMzIxNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manchester skyline"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 px-6 py-4 bg-[var(--bee)] rounded"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: 900,
                fontStyle: 'italic',
                color: 'var(--ink)'
              }}
            >
              MCR
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--charcoal)] py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.012) 28px, rgba(255,255,255,0.012) 30px)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-12 relative z-[1]">
          <div className="flex items-end gap-5 mb-14 border-b-[3px] border-[var(--bee)] pb-4 relative">
            <div className="absolute right-0 bottom-[-3px] w-8 h-[3px] bg-[var(--brick)]" />
            <div 
              className="text-[11px] tracking-[0.14em] uppercase mb-1"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--bee)'
              }}
            >
              Our Values
            </div>
            <h2 
              className="flex-1 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '64px',
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                color: 'var(--paper)'
              }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-7 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--bee)]" />
                <div className="text-[var(--bee)] mb-4 pl-3.5">{value.icon}</div>
                <h3 
                  className="mb-3 pl-3.5"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '0.04em',
                    color: 'var(--paper)'
                  }}
                >
                  {value.title}
                </h3>
                <p 
                  className="pl-3.5"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--ash)',
                    lineHeight: 1.7
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1100px] mx-auto px-12 py-20">
        <div className="flex items-end gap-5 mb-14 border-b-[3px] border-[var(--bee)] pb-4 relative">
          <div className="absolute right-0 bottom-[-3px] w-8 h-[3px] bg-[var(--brick)]" />
          <div 
            className="text-[11px] tracking-[0.14em] uppercase mb-1"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)'
            }}
          >
            The Team
          </div>
          <h2 
            className="flex-1 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '64px',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: 'var(--paper)'
            }}
          >
            Meet The Crew
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded overflow-hidden group hover:border-[rgba(245,197,0,0.3)] transition-all duration-300"
            >
              <div className="aspect-square bg-[var(--grime)] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzI2NTg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5">
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '0.04em',
                    color: 'var(--paper)'
                  }}
                >
                  {member.name}
                </h3>
                <div 
                  className="mb-2 text-[9px] tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--bee)'
                  }}
                >
                  {member.role}
                </div>
                <p 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--ash)',
                    lineHeight: 1.6
                  }}
                >
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-8 text-center">
          <p 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--ash)',
              lineHeight: 1.8
            }}
          >
            Plus a network of talented freelancers and specialists we collaborate with to bring the perfect team 
            to every project.
          </p>
          <div 
            className="inline-block px-6 py-3 bg-[rgba(245,197,0,0.1)] border border-[rgba(245,197,0,0.2)] rounded-sm"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--bee)'
            }}
          >
            Want to Join Us? Get in Touch
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--bee)] py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.04) 12px, rgba(0,0,0,0.04) 13px)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-12 relative z-[1]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="10" label="Years Running" />
            <Stat number="200+" label="Projects Delivered" />
            <Stat number="50+" label="Happy Clients" />
            <Stat number="15" label="Awards Won" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div 
        className="leading-none mb-2"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 8vw, 72px)',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'var(--ink)'
        }}
      >
        {number}
      </div>
      <div 
        className="text-[10px] tracking-[0.14em] uppercase"
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'rgba(10,10,8,0.6)'
        }}
      >
        {label}
      </div>
    </div>
  );
}
