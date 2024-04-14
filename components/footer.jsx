import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="h-screen w-full bg-black flex flex-col justify-between p-10 text-white font-main text-para">
        <div className="flex justify-between">
          <Link href="mailto:bonjour@prismfestival.com">
            bonjour@prismfestival.com
          </Link>
          <div>
            <div>Index</div>
            <div>Programation</div>
            <div>Infos Pratiques</div>
            <div>Contact</div>
          </div>
          <div>
            <div>Instagram</div>
            <div>Twitter</div>
          </div>
        </div>
        <Image
          src="/prismLogo.svg"
          alt="logo prism festival"
          width="1920"
          height="1080"
          className="invert object-cover w-full h-1/2"
        ></Image>
        <div className="flex justify-between">
          <div>© 2024 Prism Festival</div>
          <div>Site fait main avec amour</div>
        </div>
      </footer>
    </>
  );
}
