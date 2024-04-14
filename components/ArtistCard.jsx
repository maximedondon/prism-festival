import Image from "next/image";

export default function Card({ name, date }) {
  const imageBase = name.toLowerCase() + ".webp";
  const uri = "/artists/" + imageBase.split(" ").join("");
  //console.log(uri);

  return (
    <>
      <div className="w-1/4 h-fit relative relative p-2 cursor-pointer">
        <div className=" border-black border-2 p-4 bg-amber-50 flex flex-col gap-5 hover:-translate-y-2 transition-all hover:shadow-[0px_5px_0px_0px_#000000]">
          <Image
            src={uri}
            width="1920"
            height="1080"
            alt=""
            className="object-cover w-full h-full border-2 border-black"
          ></Image>
          <div className="flex flex-col gap-1">
            <div className="text-content font-h1 leading-none">{name}</div>
            <div className="text-para font-main">{date}</div>
          </div>
        </div>
      </div>
    </>
  );
}
