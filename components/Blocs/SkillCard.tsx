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
    <div className="w-60 text-gray-500">
      <img src={image} alt="" />
      <h1 className="text-gray-700 my-2">{title}</h1>
      <div className="">{body}</div>
    </div>
  );
}
