import Image from "next/image";

export default function tarifs(): JSX.Element {
  return (
    <div className="w-full h-screen ">
      <Image
        src="/images/tarifs_bg.png"
        className="z-10 relative bg-opacity-75"
        layout="fill"
      />
    </div>
  );
}
