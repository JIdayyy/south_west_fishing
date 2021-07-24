import Image from "next/image";
import NavTab from "./NavTab/NavTab";

export default function Navbar(): JSX.Element {
  return (
    <div className="w-full h-14 flex items-center align-middle z-50 justify-between px-4 fixed bg-white shadow-md">
      <div className="flex items-center align-middle">
        <Image src={"/images/logo.png"} width={50} height={50} />
        <span className="text-xs md:flex hidden mx-4 font-light">
          “Convivialité partage et aventure, les valeurs que je partage !” Me
          joindre par email : <b>southwestfishing@hotmail.fr</b>
        </span>
      </div>
      <NavTab />
    </div>
  );
}
