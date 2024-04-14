import Card from "@/components/ArtistCard";
import Cta from "@/components/cta";
import Nav from "@/components/nav/nav";

export default function Home() {
  return (
    <>
      <Nav />
      {/* heading */}
      <div className="w-full h-fit flex flex-col gap-20 items-center text-center pt-[50vh] pb-20">
        <div className="font-h1 text-h1 max-w-6xl leading-h1">
          Laisse moi te montrer ou est le son
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="font-main text-content max-w-5xl">
            We are a design agency based in Copenhagen. With a strong belief in
            strategically founded and highly crafted digital experiences.
          </div>
          <Cta text="Reserve ton billet" href="" />
        </div>
      </div>
      {/* lineup */}
      <div className=" relative h-screen flex flex-wrap">
        <Card name="Nekfeu" img="/nekfeu.jpeg" />
        <Card name="Sofiane Pamart" img="/sofiane-pamart.jpeg" />
        <Card name="de" img="/sofiane-pamart.jpg" />
      </div>
    </>
  );
}
