"use client";

import { motion } from "framer-motion";
import { identity } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="nav">
      {/* Opacity/visibility is driven by the hero scroll timeline (targets #rk). */}
      <a className="nav-rk" id="rk" href="#" aria-label="Ronith Komatireddy — home">
        {identity.firstName}
        <br />
        <em>{identity.lastName}</em>
      </a>
      <div className="nav-status">
        <motion.i
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>{identity.status}</span>
      </div>
    </nav>
  );
}
