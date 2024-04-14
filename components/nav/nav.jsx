import HoverLine from "@/components/HoverLine";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-screen h-fit sticky top-0 p-4 flex gap-5 z-50">
        <div className="border-2 w-full bg-white border-black flex justify-between text-para font-main relative px-5 py-2">
          <HoverLine href="" title="Prism" />
          <div className="flex gap-5 h-full items-center">
            <HoverLine href="" title="Infos pratiques" />
            <HoverLine href="" title="Programmation" />
          </div>
        </div>
        <Link
          href=""
          className="bg-jaune px-5 h-full py-2 border-2 border-black text-para font-main relative z-10"
        >
          Tickets
        </Link>
      </div>
    </>
  );
}
