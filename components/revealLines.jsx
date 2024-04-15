"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: "120%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 1,
    },
  },
};
export default function Index({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: "true", threshold: 0.5 });

  const mainControls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className={className} ref={ref}>
      <div className="z-0 h-fit ">
        <p className="sr-only">{text}</p>
        <motion.p
          className="overflow-hidden inline-block h-min "
          initial="hidden"
          animate={mainControls}
          transition={{ staggerChildren: 0.02 }}
        >
          {text.split(" ").map((line, index) => (
            <span
              className="inline-block overflow-hidden"
              key={`${line}-${index}`}
            >
              <motion.span
                className="inline-block origin-bottom"
                aria-hidden
                variants={defaultAnimations}
              >
                {line}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
