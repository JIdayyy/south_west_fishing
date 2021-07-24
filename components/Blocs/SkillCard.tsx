import { SkillText } from "./SkillText";

interface IProps {
  title: string;
}

export default function SkillCard({ title }: IProps): JSX.Element {
  const body =
    title === "Float tube"
      ? SkillText.floatTube_1 +
        " " +
        SkillText.floatTube_2 +
        " " +
        SkillText.floatTube_3
      : title === "Barque"
      ? SkillText.boat_1
      : title === "Salmonidés"
      ? SkillText.salmo_1
      : "";

  const image =
    title === "Float tube"
      ? "/images/skill3.png"
      : title === "Barque"
      ? "/images/skill2.png"
      : title === "Salmonidés"
      ? "/images/skill1.png"
      : "";

  return (
    <div className="lg:w-60 border  shadow-lg items-start align-middle my-4 w-full text-gray-500 flex  flex-col ">
      <img
        className="w-40 px-4 lg:px-0 h-40 lg:w-60 lg:h-60"
        src={image}
        alt=""
      />
      <div className="flex flex-col px-4 ">
        <h1 className="text-gray-700 my-2">{title}</h1>
        <div className="">{body}</div>
      </div>
    </div>
  );
}
