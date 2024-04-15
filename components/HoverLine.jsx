import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HoverCta({ href, title, variant }) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  let colorVariant = "";

  if (variant === "black") {
    colorVariant = " bg-black";
  } else if (variant === "white") {
    colorVariant = "bg-white ";
  }

  return (
    <>
      <Link
        href={href}
        className="relative w-fit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? "-10%" : 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: 0.05 }}
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? -3 : "100%",
          }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          className={`left-0 bottom-0 h-0.5 w-full ${colorVariant} `}
        />
      </Link>
    </>
  );
}
