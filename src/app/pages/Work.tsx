import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

import flashDeliveryVideo from "../../imports/Flashmas_Day_1.mp4";
import premierVideo from "../../imports/Spicy_Wings.mp4";
import voxPopVideo from "../../imports/LaunchDay1_FinalV2.mp4";
import voxPopSkyVideo from "../../imports/VoxPop_Sky.mp4";
import voxPopLogoVideo from "../../imports/Voxpop_logo_animation.mp4";
import poundlandSunflowerVideo from "../../imports/Adam_Higginson_AV1410_Sunflower_Desk.mp4";
import poundlandCreativeVideo from "../../imports/Adam_Higginson_AV1410_Creative_Desk.mp4";

const projects = [
  {
    id: 12,
    title: "VoxPop",
    category: "Brand Launch",
    year: "2026",
    video: voxPopVideo,
    featured: true
  },
  {
    id: 13,
    title: "VoxPop Logo Animation",
    category: "Event Graphics",
    year: "2026",
    video: voxPopSkyVideo,
    featured: true
  },
  {
    id: 14,
    title: "VoxPop Logo Animation",
    category: "Event Graphics",
    year: "2026",
    video: voxPopLogoVideo,
    featured: true
  },
  {
    id: 10,
    title: "Flash Delivery",
    category: "Advertising",
    year: "2026",
    video: flashDeliveryVideo,
    featured: true
  },
  {
    id: 11,
    title: "Premier",
    category: "Advertising",
    year: "2026",
    video: premierVideo,
    featured: true
  },
  {
    id: 15,
    title: "Poundland Sunflower",
    category: "Advertising",
    year: "2026",
    video: poundlandSunflowerVideo,
    featured: true
  },
  {
    id: 16,
    title: "Poundland Creative",
    category: "Advertising",
    year: "2026",
    video: poundlandCreativeVideo,
    featured: true
  }
];

const categories = ["All", "Brand Launch", "Explainer", "Corporate", "Social Media", "Event Graphics", "Broadcast", "Advertising", "Showreel"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            <span className="mr-2">✦</span>Portfolio
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
            Our <span className="text-[var(--bee)]">Work</span>
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
            A selection of our recent projects, from <span className="text-[var(--bee)]">bold brand launches</span> to 
            engaging explainer videos and everything in between.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-[var(--soot)] border-b border-[rgba(255,255,255,0.06)] sticky top-[72px] z-40 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center gap-3 overflow-x-auto">
            <span 
              className="text-[9px] tracking-[0.16em] uppercase mr-2 whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--ash)'
              }}
            >
              Filter:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 border rounded-sm transition-all duration-200 whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderColor: selectedCategory === category ? 'var(--bee)' : 'rgba(255,255,255,0.1)',
                  color: selectedCategory === category ? 'var(--bee)' : 'var(--ash)',
                  background: selectedCategory === category ? 'rgba(245,197,0,0.1)' : 'transparent'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--ash)'
              }}
            >
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[var(--charcoal)] py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(245,197,0,0.08) 0%, transparent 70%)'
          }}
        />
        
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center relative z-[1]">
          <h2 
            className="mb-6 leading-[0.9]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 8vw, 64px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              color: 'var(--paper)'
            }}
          >
            Like What You See?
          </h2>
          <p 
            className="mb-8 mx-auto max-w-[500px]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--ash)',
              lineHeight: 1.8
            }}
          >
            Let's discuss how we can bring your vision to life with motion graphics that demand attention.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--bee)] rounded-sm transition-all duration-200 hover:scale-105"
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
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-[var(--soot)] border border-[rgba(255,255,255,0.06)] rounded overflow-hidden group cursor-pointer hover:border-[rgba(245,197,0,0.3)] transition-all duration-300">
      <div className={`relative overflow-hidden ${project.video ? 'h-auto' : 'h-64'}`}>
        {project.video ? (
          <>
            <video
              src={project.video}
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
            />
          </>
        ) : (
          <>
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-70 pointer-events-none" />
            
            <div className="absolute bottom-4 right-4 pointer-events-none">
              <div 
                className="w-10 h-10 rounded-full bg-[rgba(245,197,0,0.9)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  color: 'var(--ink)'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </>
        )}
        
        {project.featured && (
          <div 
            className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--bee)] rounded-sm z-10"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '8px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,8,0.7)'
            }}
          >
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span 
            className="text-[9px] tracking-[0.14em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--bee)'
            }}
          >
            {project.category}
          </span>
          <span className="text-[var(--ash)]">•</span>
          <span 
            className="text-[9px] tracking-[0.14em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--ash)'
            }}
          >
            {project.year}
          </span>
        </div>
        <h3 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            color: 'var(--paper)'
          }}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}