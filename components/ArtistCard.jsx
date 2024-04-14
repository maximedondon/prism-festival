import Image from "next/image";

export default function Card({ img, name }) {
  return (
    <>
      <div className="w-1/3 h-fit relative  relative flex flex-col gap-5 pb-10 px-4">
        <Image
          src={img}
          width="1920"
          height="1080"
          alt=""
          className="object-cover w-full h-full border-black border-2"
        ></Image>
        <div className="flex flex-col gap-1">
          <div className="text-content font-h1 leading-none">{name}</div>
          <div className="text-para font-main">Vendredi 1 juin</div>
        </div>
      </div>
    </>
  );
}
