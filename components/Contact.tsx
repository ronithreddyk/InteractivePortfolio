"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * ACT V — the red dot starts enormous (filling the screen like the
 * Communitie 'i' dot), then shrinks on scroll and lands exactly as
 * the period after "unforgettable."
 */
export default function Contact() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(".outro-content", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=1600",
          pin: ".outro-pin",
          scrub: 1,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(".dot", { scale: 110 }, { scale: 1, duration: 80 }, 0)
        .fromTo(".outro-h", { opacity: 0 }, { opacity: 1, duration: 30 }, 8)
        .to(".outro-content", { opacity: 1, y: 0, duration: 30 }, 55);
    },
    { scope: root }
  );

  return (
    <div ref={root} id="contact">
      <div className="outro-pin">
        <div className="outro-inner">
          <h2 className="outro-h">
            {contact.heading[0]}
            <br />
            <em>{contact.heading[1]}</em>
            <span className="dot" />
          </h2>

          <div className="outro-content">
            <div className="contact-rows">
              {contact.rows.map((row) => (
                <a
                  className="c-row"
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="c-lbl">{row.label}</span>
                  <span className="c-val">{row.value}</span>
                  <motion.span
                    className="c-arr"
                    whileHover={{ x: 4, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </motion.span>
                </a>
              ))}
            </div>

            <div className="outro-foot">
              <span>{contact.footer[0]}</span>
              <span>{contact.footer[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
