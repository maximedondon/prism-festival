import { Artists } from "@/Lists/artists";
import Card from "@/components/ArtistCard";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";
import RevealLines from "@/components/revealLines";
import RevealWords from "@/components/revealWords";
import Image from "next/image";

const headingText = "Laisse moi te montrer ou est le son";

export default function Home() {
  return (
    <>
      <Nav />
      {/* heading */}
      <div className="w-full h-fit flex flex-col gap-20 items-center text-center pt-10 pb-20 relative">
        <div className="absolute bottom-0 left-0 h-full w-1/3 -z-10">
          <Image
            src="/flower.svg"
            alt=""
            width="1920"
            height="1080"
            className="object-cover w-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 -z-10 -scale-x-100">
          <Image
            src="/flower.svg"
            alt=""
            width="1920"
            height="1080"
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col items-center gap-0 max-w-6xl">
          <div className="font-h1 text-h1 leading-h1">
            <RevealWords text={headingText} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="font-main text-content max-w-5xl leading-tight">
            <RevealLines text="Bienvenue au Prism, le festival qui t’émerveille chaque année aux quatre coins de la France tout en aidant les territoires en difficulté !" />
          </div>
          <Cta text="Reserve ton billet" variant="yellow" href="" />
        </div>
      </div>
      {/* lineup */}
      <div className="relative">
        <div className="w-full h-fit absolute top-0 left-0 -translate-y-[50%]">
          <Image
            src="/wave.svg"
            alt=""
            width="1920"
            height="1080"
            className="object-cover w-full"
          />
        </div>
        <div className=" relative h-fit flex flex-wrap px-2 py-10 bg-violet">
          {Artists?.map((artist, index) => (
            <Card name={artist.name} date={artist.date} key={index} />
          ))}
        </div>
        <div className="w-full h-fit absolute bottom-0 left-0 rotate-180 translate-y-[50%]">
          <Image
            src="/wave.svg"
            alt=""
            width="1920"
            height="1080"
            className="object-cover w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 text-center h-screen justify-center">
        <div className="font-main text-content max-w-5xl leading-tight">
          <RevealLines text="Prism festival s’engage à te proposer des produits locaux tout le long de l’évènement et à employer des entreprises locales afin d’aider la ville." />
        </div>
        <Cta text="Reserve ton billet" variant="yellow" href="" />
      </div>
      <Footer />
    </>
  );
}
