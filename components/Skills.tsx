"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skills } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const root = useRef<HTMLElement>(null);

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

      gsap.from(".s-row", {
        opacity: 0,
        y: 28,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-table",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sec sec-light" id="skills">
      <div className="sec-head">
        <div className="eyebrow">Skills &amp; Expertise</div>
        <h2>
          What I <em>work with.</em>
        </h2>
      </div>

      <div className="skill-table">
        {skills.map((s, i) => (
          <div className="s-row" key={s.title}>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <span className="stack">{s.stack}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
