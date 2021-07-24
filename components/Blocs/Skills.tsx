import SkillCard from "./SkillCard";

export default function Skills(): JSX.Element {
  return (
    <div>
      <div className="w-full  my-20 items-center align-middle justify-center flex">
        <span className="bg-gray-200 w-full h-5"></span>
        <h1 className="w-full text-center">MES TECHNIQUES DE PÊCHE</h1>
        <span className="bg-gray-200 w-full h-5"></span>
      </div>
      <div className="w-full px-60 flex  justify-between">
        <SkillCard title="Float tube" />
        <SkillCard title="Barque" />
        <SkillCard title="Salmonidés" />
      </div>
    </div>
  );
}
