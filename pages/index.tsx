import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GetStaticProps } from "next";
import ArrianeString from "../components/ArrianeString/ArrianeString";
import Description from "../components/Blocs/Description";
import Image from "next/image";
import Skills from "../components/Blocs/Skills";
export default function Home(): JSX.Element {
  return (
    <div className="w-full  relative py-14 z-10">
      <Carousel className="z-10" showThumbs={false}>
        <div>
          <img src="/images/carroussel/img1.png" alt="carroussel" />
        </div>
        <div>
          <img src="/images/carroussel/img2.png" alt="carroussel" />
        </div>
      </Carousel>
      <div className="w-full lg:px-60">
        <ArrianeString />
        <Description />
      </div>
      <div className="relative flex items-center font-serif justify-center align-middle text-white">
        <Image src={"/images/river_bg.png"} width={4000} height={800} />
        <div className="absolute flex flex-col">
          <span className="lg:text-4xl text-xs font-light text-center w-full">
            &quot;ConvivialitÃ© partage et aventure !&quot;
          </span>
          <span className="w-full text-center ">
            &quot;Les valeurs qui nous animent&quot;
          </span>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: "hello",
    },
  };
};
