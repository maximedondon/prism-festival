import HoverCta from "@/components/HoverLine";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="h-[80vh] w-full bg-black flex flex-col overflow-hidden justify-between p-10 text-white font-main text-para relative">
        <div className="flex justify-between">
          <HoverCta
            variant="white"
            title="bonjour@prismfestival.com"
            href="mailto:bonjour@prismfestival.com"
          />
          <div className="flex flex-col">
            <HoverCta variant="white" title="Index" href="/" />
            <HoverCta variant="white" title="Programmation" href="" />
            <HoverCta
              variant="white"
              title="Infos pratiques"
              href="/informations"
            />
            <HoverCta
              variant="white"
              title="Contact"
              href="mailto:bonjour@prismfestival.com"
            />
          </div>
          <div className="flex flex-col">
            <HoverCta
              variant="white"
              title="Instagram"
              href="https://instagram.com/prismfestival"
            />
            <HoverCta
              variant="white"
              title="Twitter"
              href="https://x.com/prismfestival"
            />
          </div>
        </div>
        <Image
          src="/prismLogo.svg"
          alt="logo prism festival"
          width="1920"
          height="1080"
          className="invert object-cover w-full translate-y-[50vh] absolute bottom-0 left-0 "
        ></Image>
      </footer>
    </>
  );
}
