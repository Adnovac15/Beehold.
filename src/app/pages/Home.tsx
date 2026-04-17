import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Play, Award, Users, Zap } from "lucide-react";

import voxPopVideo from "../../imports/LaunchDay1_FinalV2.mp4";
import flashDeliveryVideo from "../../imports/Flashmas_Day_1.mp4";
import voxPopLogoVideo from "../../imports/Voxpop_logo_animation.mp4";
import premierVideo from "../../imports/Spicy_Wings.mp4";
import poundlandSunflowerVideo from "../../imports/Adam_Higginson_AV1410_Sunflower_Desk.mp4";

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="min-h-screen bg-[var(--charcoal)] relative overflow-hidden flex flex-col">
        {/* Hazard stripe top */}
        <div 
          className="absolute top-0 left-0 right-0 h-2 z-10"
          style={{
            background: 'repeating-linear-gradient(-45deg, var(--bee), var(--bee) 12px, var(--ink) 12px, var(--ink) 24px)'
          }}
        />
        
        {/* Honeycomb pattern */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='90'%20height='51.96'%3E%3Cpolygon%20points='60.0,25.98%2045.0,51.96%2015.0,51.96%200.0,25.98%2015.0,0.0%2045.0,0.0'%20fill='none'%20stroke='rgba%28245,197,0,0.12%29'%20stroke-width='1.5'/%3E%3Cpolygon%20points='105.0,0.0%2090.0,25.98%2060.0,25.98%2045.0,0.0%2060.0,-25.98%2090.0,-25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.12%29'%20stroke-width='1.5'/%3E%3Cpolygon%20points='105.0,51.96%2090.0,77.94%2060.0,77.94%2045.0,51.96%2060.0,25.98%2090.0,25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.12%29'%20stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: '90px 51.96px'
          }}
        />

        {/* Spray paint effects */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full top-[-200px] right-[-100px] pointer-events-none z-[1] blur-[2px]"
          style={{
            background: 'radial-gradient(ellipse at 40% 40%, rgba(245,197,0,0.18) 0%, rgba(245,197,0,0.06) 40%, transparent 70%)'
          }}
        />
        <div 
          className="absolute w-[500px] h-[300px] bottom-0 left-[-80px] pointer-events-none z-[1] blur-[1px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(192,57,43,0.12) 0%, transparent 70%)'
          }}
        />

        {/* Ghost text */}
        <div 
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none z-[1] select-none leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(200px, 25vw, 340px)',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '-0.05em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(245,197,0,0.07)'
          }}
        >
          MOTION
        </div>

        {/* Top area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 md:px-14 pt-6 md:pt-10 relative z-[5]">
          <div className="flex items-center gap-2.5">
            <div 
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--ash)'
              }}
            >
              <span className="text-[var(--bee)] mr-2.5">✦</span>
              MANCHESTER
            </div>
          </div>
          <div 
            className="border-2 border-[rgba(245,197,0,0.3)] px-3.5 py-2 rounded rotate-2 relative"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,197,0,0.6)'
            }}
          >
            MOTION STUDIO
            <div className="absolute inset-[3px] border border-[rgba(245,197,0,0.15)] rounded-sm" />
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-14 py-10 relative z-[5]">
          <div className="max-w-[900px]">
            <h1 className="mb-1">
              <span 
                className="block leading-[0.87]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(80px, 15vw, 180px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  color: 'var(--paper)'
                }}
              >
                Bringing
              </span>
              <span 
                className="block leading-[0.87]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(80px, 15vw, 180px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  color: 'transparent',
                  WebkitTextStroke: '3px var(--bee)'
                }}
              >
                Ideas
              </span>
              <span 
                className="block leading-[0.87]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(80px, 15vw, 180px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  color: 'var(--bee)'
                }}
              >
                To Life
              </span>
            </h1>

            <div 
              className="max-w-[420px] mt-7 pt-6 border-t border-[rgba(245,197,0,0.15)]"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--ash)',
                lineHeight: 1.8
              }}
            >
              We're a <span className="text-[var(--bee)]">Manchester-based</span> motion graphics studio crafting 
              bold, <span className="text-[var(--bee)]">impactful</span> visual stories for brands that demand attention.
            </div>

            <div className="flex gap-4 mt-10">
              <Link
                to="/work"
                className="px-6 py-3 rounded-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--bee)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '14px'
                }}
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-sm border border-[rgba(245,197,0,0.3)] transition-all duration-200 hover:border-[var(--bee)]"
                style={{
                  color: 'var(--bee)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '14px'
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="border-t border-[rgba(255,255,255,0.06)] px-6 md:px-14 py-6 md:py-8 relative z-[5] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div 
            className="text-[10px] leading-relaxed"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--ash)',
              letterSpacing: '0.1em'
            }}
          >
            <div><strong className="text-[var(--bee)]">53.4808° N</strong></div>
            <div><strong className="text-[var(--bee)]">2.2426° W</strong></div>
          </div>
          
          <div className="flex flex-wrap gap-6 sm:gap-10 text-left sm:text-right">
            <div>
              <div 
                className="leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 8vw, 40px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--bee)'
                }}
              >
                200+
              </div>
              <div 
                className="mt-0.5 text-[9px] tracking-[0.14em] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--ash)'
                }}
              >
                Projects
              </div>
            </div>
            <div>
              <div 
                className="leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 8vw, 40px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--bee)'
                }}
              >
                50+
              </div>
              <div 
                className="mt-0.5 text-[9px] tracking-[0.14em] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--ash)'
                }}
              >
                Clients
              </div>
            </div>
            <div>
              <div 
                className="leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 8vw, 40px)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--bee)'
                }}
              >
                10
              </div>
              <div 
                className="mt-0.5 text-[9px] tracking-[0.14em] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--ash)'
                }}
              >
                Years
              </div>
            </div>
          </div>
        </div>

        {/* Hazard stripe bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 z-10"
          style={{
            background: 'repeating-linear-gradient(-45deg, var(--bee), var(--bee) 8px, var(--ink) 8px, var(--ink) 16px)'
          }}
        />
      </section>

      {/* Services Section */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-5 mb-10 md:mb-14 border-b-[3px] border-[var(--bee)] pb-4 relative">
          <div className="hidden sm:block absolute right-0 bottom-[-3px] w-8 h-[3px] bg-[var(--brick)]" />
          <div 
            className="text-[11px] tracking-[0.14em] uppercase mb-1"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)',
              letterSpacing: '0.14em'
            }}
          >
            01
          </div>
          <h2 
            className="flex-1 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 10vw, 64px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: 'var(--paper)'
            }}
          >
            Services
          </h2>
          <div 
            className="hidden sm:block text-[10px] text-right leading-relaxed pb-1"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--ash)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            What We Do
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ServiceCard
            icon={<Play className="w-6 h-6" />}
            title="Motion Graphics"
            description="Bold, kinetic visuals that capture attention and communicate your message with impact."
          />
          <ServiceCard
            icon={<Zap className="w-6 h-6" />}
            title="Brand Animation"
            description="Bringing brand identities to life through dynamic animation and visual storytelling."
          />
          <ServiceCard
            icon={<Award className="w-6 h-6" />}
            title="Video Production"
            description="Full-service production from concept to delivery, crafted for maximum impact."
          />
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-5 mb-10 md:mb-14 border-b-[3px] border-[var(--bee)] pb-4 relative">
          <div className="hidden sm:block absolute right-0 bottom-[-3px] w-8 h-[3px] bg-[var(--brick)]" />
          <div 
            className="text-[11px] tracking-[0.14em] uppercase mb-1"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)',
              letterSpacing: '0.14em'
            }}
          >
            02
          </div>
          <h2 
            className="flex-1 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 10vw, 64px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: 'var(--paper)'
            }}
          >
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <FeaturedWorkCard
            video={voxPopVideo}
            category="Brand Launch"
            title="VoxPop"
            large
          />
          <FeaturedWorkCard
            video={flashDeliveryVideo}
            category="Advertising"
            title="Flash Delivery"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <SmallWorkCard
            video={voxPopLogoVideo}
            title="VoxPop Logo Animation"
          />
          <SmallWorkCard
            video={premierVideo}
            title="Premier"
            accent="brick"
          />
          <SmallWorkCard
            video={poundlandSunflowerVideo}
            title="Poundland Sunflower"
            accent="canal"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="inline-block px-6 py-3 border border-[rgba(245,197,0,0.3)] rounded-sm transition-all duration-200 hover:border-[var(--bee)] hover:bg-[rgba(245,197,0,0.05)]"
            style={{
              color: 'var(--bee)',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '14px'
            }}
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--charcoal)] py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.012) 28px, rgba(255,255,255,0.012) 30px)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-[1]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-5 mb-10 md:mb-14 border-b-[3px] border-[var(--bee)] pb-4 relative">
            <div className="hidden sm:block absolute right-0 bottom-[-3px] w-8 h-[3px] bg-[var(--brick)]" />
            <div 
              className="text-[11px] tracking-[0.14em] uppercase mb-1"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--bee)',
                letterSpacing: '0.14em'
              }}
            >
              03
            </div>
            <h2 
              className="flex-1 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 10vw, 64px)',
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                color: 'var(--paper)'
              }}
            >
              Why BeeHold
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <WhyCard
              icon={<Award className="w-8 h-8" />}
              title="Award-Winning"
              description="Recognised for excellence in motion graphics and visual storytelling across the industry."
            />
            <WhyCard
              icon={<Users className="w-8 h-8" />}
              title="Collaborative"
              description="We work as an extension of your team, bringing creativity and expertise to every project."
            />
            <WhyCard
              icon={<Zap className="w-8 h-8" />}
              title="Fast Delivery"
              description="Quick turnarounds without compromising on quality. We keep your campaigns on schedule."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--bee)] py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.04) 12px, rgba(0,0,0,0.04) 13px)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-12 text-center relative z-[1]">
          <div 
            className="mb-4 text-[10px] tracking-[0.18em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(10,10,8,0.45)'
            }}
          >
            Ready to start?
          </div>
          <h2 
            className="mb-6 leading-[0.9]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 8vw, 72px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              color: 'var(--ink)'
            }}
          >
            Let's Create Something Bold
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[var(--ink)] rounded-sm transition-all duration-200 hover:scale-105"
            style={{
              color: 'var(--bee)',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '16px'
            }}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-7 relative overflow-hidden group hover:border-[rgba(245,197,0,0.3)] transition-all duration-300">
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at top right, rgba(245,197,0,0.05) 0%, transparent 70%)'
        }}
      />
      <div className="text-[var(--bee)] mb-4 relative z-[1]">{icon}</div>
      <h3 
        className="mb-3 relative z-[1]"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '24px',
          fontWeight: 900,
          fontStyle: 'italic',
          letterSpacing: '0.04em',
          color: 'var(--paper)'
        }}
      >
        {title}
      </h3>
      <p 
        className="relative z-[1]"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--ash)',
          lineHeight: 1.7
        }}
      >
        {description}
      </p>
    </div>
  );
}

function FeaturedWorkCard({ video, category, title, large = false }: { video: string; category: string; title: string; large?: boolean }) {
  return (
    <div className={`bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded overflow-hidden group cursor-pointer hover:border-[rgba(245,197,0,0.3)] transition-all duration-300 ${large ? 'row-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <video
          src={video}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <div 
            className="px-3 py-1.5 bg-[var(--bee)] rounded-sm"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '8px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,8,0.6)'
            }}
          >
            {category}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            color: 'var(--paper)'
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function SmallWorkCard({ video, title, accent = 'bee' }: { video: string; title: string; accent?: 'bee' | 'brick' | 'canal' }) {
  const accentColors = {
    bee: 'var(--bee)',
    brick: 'var(--brick)',
    canal: 'var(--canal)'
  };

  return (
    <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded overflow-hidden group cursor-pointer hover:border-[rgba(245,197,0,0.3)] transition-all duration-300 relative">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accentColors[accent] }} />
      <div className="relative overflow-hidden">
        <video
          src={video}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
          muted
          loop
          autoPlay
        />
      </div>
      <div className="p-5">
        <h3 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            color: 'var(--paper)'
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded p-7 relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--bee)]" />
      <div className="text-[var(--bee)] mb-4 pl-3.5">{icon}</div>
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
        {title}
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
        {description}
      </p>
    </div>
  );
}