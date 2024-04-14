import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-screen h-fit sticky top-0 p-4 flex gap-5 z-50">
        <div className="border-2 w-full bg-white border-black flex justify-between text-para font-main relative px-5 py-2">
          <div>Prism</div>
          <div className="flex gap-5 h-full items-center">
            <div>Infos pratiques</div>
            <div>Programmation</div>
          </div>
        </div>
        <Link
          href=""
          className="bg-violet text-white px-5 h-full py-2 border-2 border-black text-para font-main relative z-10"
        >
          Tickets
        </Link>
      </div>
    </>
  );
}
