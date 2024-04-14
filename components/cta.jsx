import Link from "next/link";

export default function Cta({ href, text, variant }) {
  let colorVariant = "";

  if (variant === "green") {
    colorVariant = "bg-green-400 text-black";
  } else if (variant === "violet") {
    colorVariant = "bg-violet text-white";
  } else if (variant === "yellow") {
    colorVariant = "bg-jaune text-black";
  }

  return (
    <>
      <Link
        href={href}
        className={`px-6 py-3 border-2 border-black relative group ${colorVariant} block w-fit`}
      >
        <div className="text-para font-main relative">{text}</div>
      </Link>
    </>
  );
}
