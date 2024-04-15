import HoverLine from "@/components/HoverLine";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-screen h-fit sticky top-0 p-4 flex gap-5 z-40">
        <div className="border-2 px-5 py-2 text-para font-main bg-white">
          {" "}
          <HoverLine variant="black" href="" title="Prism" />
        </div>
        <div className="border-2 border-black px-5 py-2 text-para font-main bg-jaune">
          <HoverLine
            variant="black"
            href=""
            title="1 2 3 Juin, Parc du Hotoie"
          />
        </div>
        <div className="flex gap-5 h-full items-center border-2 bg-white flex-1 border-black justify-end text-para font-main relative px-5 py-2">
          <HoverLine variant="black" href="" title="Infos pratiques" />
          <HoverLine variant="black" href="" title="Programmation" />
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
