import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="min-h-screen relative">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Honeycomb pattern background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='90'%20height='51.96'%3E%3Cpolygon%20points='60.0,25.98%2045.0,51.96%2015.0,51.96%200.0,25.98%2015.0,0.0%2045.0,0.0'%20fill='none'%20stroke='rgba%28245,197,0,0.05%29'%20stroke-width='1'/%3E%3Cpolygon%20points='105.0,0.0%2090.0,25.98%2060.0,25.98%2045.0,0.0%2060.0,-25.98%2090.0,-25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.05%29'%20stroke-width='1'/%3E%3Cpolygon%20points='105.0,51.96%2090.0,77.94%2060.0,77.94%2045.0,51.96%2060.0,25.98%2090.0,25.98'%20fill='none'%20stroke='rgba%28245,197,0,0.05%29'%20stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '90px 51.96px'
        }}
      />
      
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}