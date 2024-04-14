import { Artists } from "@/Lists/artists";
import Card from "@/components/ArtistCard";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";

export default function Home() {
  return (
    <>
      <Nav />
      {/* heading */}
      <div className="w-full h-fit flex flex-col gap-20 items-center text-center pt-10 pb-20">
        <div className="flex flex-col items-center gap-0 max-w-6xl">
          <div className="font-main text-para w-fit px-5 py-2 border-2 text-white bg-violet border-black">
            Edition Amiens 2024
          </div>
          <div className="font-h1 text-h1 leading-h1">
            Laisse moi te montrer ou est le son
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="font-main text-content max-w-5xl">
            We are a design agency based in Copenhagen. With a strong belief in
            strategically founded and highly crafted digital experiences.
          </div>
          <Cta text="Reserve ton billet" variant="yellow" href="" />
        </div>
      </div>
      {/* lineup */}
      <div className=" relative h-fit flex flex-wrap px-2 pb-20">
        {Artists?.map((artist, index) => (
          <Card name={artist.name} date={artist.date} key={index} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-5 text-center h-screen bg-violet text-white justify-center">
        <div className="font-main text-content max-w-5xl">
          We are a design agency based in Copenhagen. With a strong belief in
          strategically founded and highly crafted digital experiences.
        </div>
        <Cta text="Reserve ton billet" variant="yellow" href="" />
      </div>
      <Footer />
    </>
  );
}
