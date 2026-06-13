// src/features/home/components/Hero/Hero.tsx

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FadeIn, StaggerContainer } from "@/components/animations";
import {
  ArrowRight,
  Star,
  User,
  Mail,
  ChevronDown,
  FileText,
} from "lucide-react";
import * as THREE from "three";

// Import your SVG icons
import {
  NextJsIconSrc,
  ReactIconSrc,
  NestJsIconSrc,
  PostgresqlIconSrc,
  DockerIconSrc,
  LinuxSrc,
} from "@/assets/icons";

// ==========================================
// ✅ SILENCE VERtexCOLORS WARNING (HARMLESS)
// ==========================================
if (typeof window !== 'undefined' && typeof console !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = function (...args) {
    if (typeof args[0] === 'string' && args[0].includes('vertexColors')) {
      return; // Ignore this specific warning
    }
    originalWarn.apply(this, args); // Let all other warnings pass
  };
}
// ==========================================

export default function Hero() {
  const vantaContainerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);
  const iconsInjectedRef = useRef(false);


   // ==========================================
  // VANTA.JS GLOBE BACKGROUND + ICONS (FIXED)
  // ==========================================

  
  useEffect(() => {
    if (typeof THREE !== 'undefined') {
      THREE.Material.prototype.vertexColors = false;
    }

    let isMounted = true;

    const loadVanta = async () => {
      try {
        // ✅ Try to import from node_modules directly (most reliable)
        const { default: GLOBE } = await import("vanta/dist/vanta.globe.min.js");
        
        if (!isMounted || !vantaContainerRef.current) return;

        vantaRef.current = GLOBE({
          el: vantaContainerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3fc8ff,
          backgroundColor: 0x0f172a,
        });

        setTimeout(() => {
          if (vantaContainerRef.current && rightColumnRef.current && !iconsInjectedRef.current) {
            injectIcons(vantaContainerRef.current, rightColumnRef.current);
            iconsInjectedRef.current = true;
          }
        }, 500);

      } catch (error) {
        // ✅ If dynamic import fails, fallback to CDN
        console.warn("Vanta dynamic import failed, falling back to CDN:", error);
        
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
        script.async = true;
        script.onload = () => {
          if (!isMounted || !vantaContainerRef.current) return;
          
          if (window.VANTA && window.VANTA.GLOBE) {
            vantaRef.current = window.VANTA.GLOBE({
              el: vantaContainerRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x3fc8ff,
              backgroundColor: 0x0f172a,
            });
            setTimeout(() => {
              if (vantaContainerRef.current && rightColumnRef.current && !iconsInjectedRef.current) {
                injectIcons(vantaContainerRef.current, rightColumnRef.current);
                iconsInjectedRef.current = true;
              }
            }, 500);
          } else {
            console.error("Vanta GLOBE not found even after CDN load");
          }
        };
        document.body.appendChild(script);
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
      if (vantaContainerRef.current) {
        const injectedIcons = vantaContainerRef.current.querySelectorAll('.vanta-icon-wrapper');
        injectedIcons.forEach(el => el.remove());
      }
      iconsInjectedRef.current = false;
    };
  }, []);

  // ==========================================
  // INJECT ICONS FUNCTION (UPDATED)
  // ==========================================
  const injectIcons = (container: HTMLElement, rightColumn: HTMLElement) => {
    const techIcons = [
      { src: NextJsIconSrc, label: "Next.js", alt: "Next.js" },
      { src: ReactIconSrc, label: "React", alt: "React" },
      { src: NestJsIconSrc, label: "NestJS", alt: "NestJS" },
      { src: PostgresqlIconSrc, label: "PostgreSQL", alt: "PostgreSQL" },
      { src: DockerIconSrc, label: "Docker", alt: "Docker" },
      { src: LinuxSrc, label: "Linux", alt: "Linux" },
      // Fallback to lucide-react icons for those missing SVG
      { src: null, label: "Node.js", alt: "Node.js", icon: "terminal" },
      { src: null, label: "AI", alt: "AI", icon: "brain" },
    ];

    const rect = rightColumn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate center relative to the container (not the whole screen)
    const centerX = (rect.left - containerRect.left) + (rect.width / 2);
    const centerY = (rect.top - containerRect.top) + (rect.height / 2);
    const radius = Math.min(rect.width, rect.height) * 0.35;

    // CSS for icons (Already present in code, but keeping it clean)
    const style = document.createElement('style');
    style.textContent = `
      .vanta-icon-wrapper {
        position: absolute;
        width: 64px;
        height: 64px;
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease;
        z-index: 10;
        pointer-events: auto;
      }
      .vanta-icon-wrapper:hover {
        transform: translate(-50%, -50%) scale(1.1);
        border-color: rgba(63, 200, 255, 0.5);
        cursor: pointer;
      }
      .vanta-icon-wrapper img {
        width: 32px;
        height: 32px;
        object-fit: contain;
      }
      .vanta-icon-wrapper span {
        font-size: 10px;
        color: #94a3b8;
        margin-top: 2px;
        text-align: center;
        font-family: sans-serif;
      }
      .vanta-icon-wrapper svg {
        width: 32px;
        height: 32px;
      }
      @keyframes float-icon {
        0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
        50% { transform: translate(-50%, -50%) translateY(-10px); }
      }
      .vanta-icon-wrapper {
        animation: float-icon 4s ease-in-out infinite;
      }
    `;
    if (!document.getElementById('vanta-icon-style')) {
      style.id = 'vanta-icon-style';
      document.head.appendChild(style);
    }

    techIcons.forEach((icon, index) => {
      const angle = (index / techIcons.length) * Math.PI * 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const wrapper = document.createElement('div');
      wrapper.className = 'vanta-icon-wrapper';
      wrapper.style.left = x + 'px';
      wrapper.style.top = y + 'px';
      wrapper.style.animationDelay = (index * 0.2) + 's';

      if (icon.src) {
        const img = document.createElement('img');
        img.src = typeof icon.src === 'string' ? icon.src : icon.src.src;
        img.alt = icon.alt;
        wrapper.appendChild(img);
      } else if (icon.icon === 'terminal') {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.style.width = '32px';
        svg.style.height = '32px';
        svg.style.color = '#22c55e';
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M4 17l4-4-4-4M12 17h8');
        svg.appendChild(path);
        wrapper.appendChild(svg);
      } else if (icon.icon === 'brain') {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.style.width = '32px';
        svg.style.height = '32px';
        svg.style.color = '#a855f7';
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z');
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('d', 'M9.5 9.5a2.5 2.5 0 0 0 0 5M14.5 9.5a2.5 2.5 0 0 1 0 5');
        svg.appendChild(path);
        svg.appendChild(path2);
        wrapper.appendChild(svg);
      }

      const label = document.createElement('span');
      label.textContent = icon.label;
      wrapper.appendChild(label);

      container.appendChild(wrapper);
    });
  };

  // ==========================================
  // GSAP ENTRANCE ANIMATION
  // ==========================================
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
    tl.fromTo(".hero-heading", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4");
    tl.fromTo(".hero-description", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
    tl.fromTo(".hero-buttons", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
    tl.fromTo(".hero-social", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">

      <div ref={vantaContainerRef} className="absolute inset-0 z-0 w-full h-full" />

      <div className="container mx-auto px-6 pb-12 relative z-10">
        <StaggerContainer>
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT COLUMN */}
            <div>
              <div className="hero-badge">
                <FadeIn direction="up" delay={0.1}>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm">
                    🚀 Modern Software Agency
                  </span>
                </FadeIn>
              </div>

              <div className="hero-heading">
                <FadeIn direction="up" delay={0.2}>
                  <h1 className="mt-4 text-3xl font-bold leading-tight lg:text-5xl">
                    Building Scalable <br /> Digital Solutions
                    <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      For Ambitious <br /> Businesses
                    </span>
                  </h1>
                </FadeIn>
              </div>

              <div className="hero-description">
                <FadeIn direction="up" delay={0.3}>
                  <p className="mt-8 max-w-xl text-lg text-slate-300">
                    CloudWent empowers businesses to transform ideas into powerful digital products with modern technologies, AI, and cloud solutions.
                  </p>
                </FadeIn>
              </div>

              <div className="hero-buttons">
                <FadeIn direction="up" delay={0.4}>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-slate-950">
                      Start Project <ArrowRight size={18} />
                    </button>
                    <button className="rounded-xl border border-slate-700 px-8 py-4">
                      View Portfolio
                    </button>
                  </div>
                </FadeIn>
              </div>

              <div className="hero-social">
                <FadeIn direction="up" delay={0.5}>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative h-10 w-10 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-700">
                          <Image
                            src={`https://i.pravatar.cc/150?img=${i}`}
                            alt="User"
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-slate-300">5.0 (50+ Reviews)</span>
                      </div>
                      <p className="text-sm text-slate-500">Trusted by 50+ companies worldwide</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* RIGHT COLUMN (Empty - Vanta background fills the space) */}
            <div ref={rightColumnRef} className="relative flex justify-center items-center min-h-[500px]">
              {/* No image needed - Vanta is the background */}
            </div>

          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}