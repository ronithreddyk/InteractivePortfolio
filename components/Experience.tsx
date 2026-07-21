"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
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

      gsap.to(".t-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 75%",
          end: "bottom 55%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".t-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="sec sec-dark" id="experience">
      <div className="sec-head">
        <div className="eyebrow">Experience</div>
        <h2>
          Where I&apos;ve <em>put in the hours.</em>
        </h2>
      </div>

      <div className="timeline">
        <div className="t-rail" />
        <div className="t-line" />
        <div className="t-dot" />
        {experience.map((job) => (
          <div className="t-item" key={job.role}>
            <span className="t-node" />
            <div className="t-meta">
              <span className="t-when">{job.period}</span>
              <span className="t-where">{job.company}</span>
            </div>
            <h3>{job.role}</h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
