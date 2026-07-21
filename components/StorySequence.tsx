"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { identity, education } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * ACT I — one continuous pinned scroll story, Peace Put style:
 * fullscreen hero video → identity shrinks into the RK logo →
 * the video collapses (via clip-path) into a TALL centered tile while,
 * simultaneously, the years, skyline, campus and graduation photo
 * assemble around it — finishing exactly when the tile is smallest.
 * Fully scrubbed, so scrolling up reverses the whole composition.
 */
export default function StorySequence() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* the corner name lives in <Nav>, outside this component's GSAP scope,
         so target the node directly instead of via a scoped selector. */
      const rk = document.getElementById("rk");

      /* Clip the fullscreen video down to exactly 3.5in × 5in, centered.
         1in = 96px; clamped so it always fits small screens.
         Kept in sync with --tile-w / --tile-h in globals.css. */
      const IN = 96;
      const tileClip = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const tw = Math.min(3.5 * IN, w * 0.84);
        const th = Math.min(5 * IN, h * 0.74);
        const lr = (((w - tw) / 2) / w) * 100;
        const tb = (((h - th) / 2) / h) * 100;
        return `inset(${tb.toFixed(2)}% ${lr.toFixed(2)}% ${tb.toFixed(2)}% ${lr.toFixed(2)}% round 14px)`;
      };

      if (reduce) {
        if (rk) gsap.set(rk, { opacity: 1, visibility: "visible" });
        gsap.set(".story-pin", { backgroundColor: "#F2EDE3" });
        gsap.set(".video-wrap", { clipPath: tileClip() });
        gsap.set(".j-scene", { opacity: 1 });
        gsap.set(".j-scene img", { scale: 1, filter: "blur(0px)" });
        gsap.set(".video-wrap video", { scale: 0.82 });
        gsap.set([".j-quote", ".j-year", ".j-edu"], { opacity: 1 });
        gsap.set(".j-edu", { x: 0 });
        gsap.set(".j-year", { x: 0 });
        gsap.set(".j-line", { scaleX: 1 });
        gsap.set(".video-shade", { opacity: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=3700",
          pin: ".story-pin",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      /* identity → RK (0–18) */
      tl.to(
        ".hero-id",
        {
          y: () => -(window.innerHeight * 0.5) + 130,
          scale: 0.22,
          opacity: 0,
          transformOrigin: "left top",
          duration: 18,
        },
        0
      )
        .to(".hero-scroll", { opacity: 0, duration: 6 }, 0)
        .to(rk, { opacity: 1, visibility: "visible", duration: 6 }, 12)

        /* background ink → cream (12–46) */
        .to(".story-pin", { backgroundColor: "#F2EDE3", duration: 34 }, 12)

        /* the spine: video collapses to the 3.5in × 5in tile (14–90) */
        .fromTo(
          ".video-wrap",
          { clipPath: "inset(0% 0% 0% 0% round 0px)" },
          { clipPath: () => tileClip(), duration: 76 },
          14
        )
        /* zoom the video content out as it collapses into the tile.
           Starts at 1 (full-bleed, no gaps) and eases to 0.82; the
           clip-path hides the edges so no letterboxing ever shows. */
        .fromTo(
          ".video-wrap video",
          { scale: 1 },
          { scale: 0.82, transformOrigin: "center center", duration: 76 },
          14
        )
        .to(".video-shade", { opacity: 0, duration: 30 }, 10)

        /* premium reveal: the photograph fades in and pulls into focus
           as the tile shrinks — a lens rack from the reel to the scene (16–90) */
        .to(".j-scene", { opacity: 1, duration: 26 }, 16)
        .fromTo(
          ".j-scene img",
          { scale: 1.06, filter: "blur(6px)" },
          { scale: 1, filter: "blur(0px)", duration: 74 },
          16
        )

        /* years + education + line slide in WHILE the tile shrinks (42–70) */
        .to(".j-year.left", { x: 0, opacity: 1, duration: 20 }, 42)
        .to(".j-year.right", { x: 0, opacity: 1, duration: 20 }, 42)
        .fromTo(
          ".j-edu",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 20 },
          48
        )
        .to(".j-line", { scaleX: 1, duration: 18 }, 52)

        /* quote settles last (82–96) */
        .to(".j-quote", { opacity: 1, duration: 14 }, 82);
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div className="story-pin">
        {/* the journey — one full-bleed photograph */}
        <div className="j-scene">
          <Image
            src="/images/journey_scene.png"
            alt="Ronith's journey — from Montclair State University to the New York City skyline"
            width={1402}
            height={1122}
            sizes="100vw"
            priority
          />
        </div>

        {/* years + education + connecting line + quote */}
        <div className="j-years">
          <div className="j-year left">
            <span className="yr">{education.yearStart}</span>
          </div>
          <div className="j-year right">
            <span className="yr">{education.yearEnd}</span>
            <span className="loc">Montclair, NJ</span>
          </div>
        </div>

        {/* education — a tall pillar on the far left, clear of the subject */}
        <div className="j-edu">
          <span className="loc">{education.school}</span>
          <span className="edu-div" />
          <span className="deg">{education.degree}</span>
          <span className="deg">{education.gpa}</span>
        </div>
        <div className="j-line" />
        <div className="j-quote">
          &ldquo;From classrooms
          <br />
          to possibilities.&rdquo;
        </div>

        {/* fullscreen video → 3.5in × 5in tile */}
        <div className="video-wrap">
          <video autoPlay muted loop playsInline preload="auto" src="/videos/hero_portfolio.mp4" />
        </div>
        <div className="video-shade" />

        {/* hero identity — middle-left over the playing video */}
        <div className="hero-id">
          <h1>
            {identity.firstName}
            <br />
            <em>{identity.lastName}</em>
          </h1>
          <div className="hero-tag">
            <span className="rule" />
            {identity.tagline}
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </div>
    </div>
  );
}
