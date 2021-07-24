import SkillCard from "./SkillCard";

export default function Skills(): JSX.Element {
  return (
    <div>
      <div className="w-full text-xs lg:text-base my-5  lg:my-20 items-center align-middle justify-center flex">
        <span className="bg-gray-200 w-full h-5"></span>
        <h1 className="w-full text-center">MES TECHNIQUES DE PÊCHE</h1>
        <span className="bg-gray-200 w-full h-5"></span>
      </div>
      <div className="w-full lg:px-60 flex lg:flex-row flex-col  justify-between">
        <SkillCard title="Float tube" />
        <SkillCard title="Barque" />
        <SkillCard title="Salmonidés" />
      </div>
    </div>
  );
}
