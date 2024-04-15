import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cta({ href, text, variant }) {
  let colorVariant = "";

  if (variant === "green") {
    colorVariant = "bg-green-400 text-black";
  } else if (variant === "violet") {
    colorVariant = "bg-violet text-white";
  } else if (variant === "yellow") {
    colorVariant = "bg-jaune text-black";
  }

  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ boxShadow: "0 0 0 0", y: 0 }}
        animate={{
          boxShadow: isHovered ? "0px 10px 0px #000000" : "0",
          y: isHovered ? "-10px" : 0,
        }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
      >
        <Link
          href={href}
          className={`px-6 py-3 border-2 border-black relative group overflow-hidden ${colorVariant} block w-fit`}
        >
          <div className="text-para font-main relative">{text}</div>
          <motion.div
            initial={{ scale: 0.9, y: "50%", x: "0%" }}
            animate={{
              scale: isHovered ? 1 : 0.9,
              y: isHovered ? 0 : "50%",
            }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
            className="absolute bottom-0 left-1/2 w-1/3 translate-y-8 translate-x-5"
          >
            <Image src="/blob-music.svg" width="200" height="200" alt="" />
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}
