import Image from "next/image";

export default function ArrianeString(): JSX.Element {
  return (
    <div className="w-full text-xs md:text-base h-14 flex border-b border-green-300 items-center align-middle ">
      <span className="text-gray-400 bg-green-200 rounded-sm px-2 py-1 flex items-center align-middle mx-1">
        <Image width={20} height={20} src="/images/home.png" alt="home.png" />
        Vous êtes ici :
      </span>
      <button className="text-gray-400 bg-green-200 rounded-sm px-2 py-1 flex items-center align-middle mx-1">
        Accueil
      </button>
      <button className="text-gray-400  rounded-sm px-2 py-1 flex items-center align-middle mx-1">
        Tarifs
      </button>
      <button className="text-gray-400  rounded-sm px-2 py-1 flex items-center align-middle mx-1">
        Contact
      </button>
    </div>
  );
}
