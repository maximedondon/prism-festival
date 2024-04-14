import Link from "next/link";

export default function Cta({ href, text }) {
  return (
    <>
      <Link
        href={href}
        className="px-5 py-3 bg-green-400 border-2 border-black"
      >
        <div className="text-para font-main">{text}</div>
      </Link>
    </>
  );
}
