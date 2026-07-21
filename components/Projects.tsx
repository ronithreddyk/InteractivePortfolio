"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const quick = useRef<{ x: gsap.QuickToFunc; y: gsap.QuickToFunc } | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const visible = useRef(false);

  const playOnly = (i: number) => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === i) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  useGSAP(
    () => {
      gsap.from(".sec-head", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sec-head",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /* Rows rise and fade in with a gentle stagger */
      const rows = gsap.utils.toArray<HTMLElement>(".p-row");
      if (rows.length) {
        gsap.from(rows, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".p-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (previewRef.current) {
        quick.current = {
          x: gsap.quickTo(previewRef.current, "x", { duration: 0.45, ease: "power3" }),
          y: gsap.quickTo(previewRef.current, "y", { duration: 0.45, ease: "power3" }),
        };
      }
    },
    { scope: root }
  );

  const onMove = (e: React.MouseEvent) => {
    quick.current?.x(e.clientX + 28);
    quick.current?.y(e.clientY - 120);
  };

  const show = (i: number) => {
    setActive(i);
    playOnly(i);
    if (!visible.current && previewRef.current) {
      visible.current = true;
      gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" });
    }
  };

  const hide = () => {
    videoRefs.current.forEach((v) => v?.pause());
    if (previewRef.current) {
      visible.current = false;
      gsap.to(previewRef.current, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power3.in" });
    }
  };

  return (
    <section ref={root} className="sec sec-dark" id="projects">
      <div className="sec-head">
        <div className="eyebrow">Things I&apos;ve built</div>
        <h2>
          Ideas, turned into <em>experiences.</em>
        </h2>
      </div>

      <div className="p-list" onMouseMove={onMove} onMouseLeave={hide}>
        {projects.map((p, i) => (
          <a
            className="p-row"
            key={p.title}
            href={p.href.startsWith("http") ? p.href : undefined}
            onMouseEnter={() => show(i)}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <span className="p-cta">
              {p.cta} <ArrowRight size={14} strokeWidth={1.5} />
            </span>
          </a>
        ))}
      </div>

      {/* Cursor-following preview card (desktop only, hidden via CSS on mobile) */}
      <div className="p-preview" ref={previewRef} aria-hidden="true">
        <div className="p-card">
          <div
            className="p-visual"
            style={{
              background: projects[active].accent,
              display: projects[active].video || projects[active].image ? undefined : "none",
            }}
          >
            {projects.map((p, i) =>
              p.video ? (
                <video
                  key={p.title}
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="p-media"
                  src={p.video}
                  poster={p.poster ?? undefined}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              ) : null
            )}
            {!projects[active].video &&
              (projects[active].image ? (
                <Image
                  src={projects[active].image!}
                  alt=""
                  width={680}
                  height={420}
                  sizes="340px"
                />
              ) : (
                <span>{projects[active].title.charAt(0)}</span>
              ))}
          </div>
          <div className="p-info">
            <b>{projects[active].title}</b>
            <small>{projects[active].tag}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
