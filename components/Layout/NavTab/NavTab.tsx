import { useState } from "react";
import { NavButton } from "./NavButton";
import { useRouter } from "next/router";

export default function NavTab(): JSX.Element {
  const [selected, setselected] = useState<selected>("ACCUEIL");
  const router = useRouter();
  const handleClick = (e: any) => {
    if (e.target.value === "ACCUEIL") {
      router.push(`/`);
      return setselected("ACCUEIL");
    }
    if (e.target.value === "CONTACT") {
      router.push(`/`);
      return setselected("CONTACT");
    }
    if (e.target.value === "TARIFS") {
      router.push(`/tarifs`);
      return setselected("TARIFS");
    }
  };

  return (
    <div>
      <ul className="flex items-center align-middlepx-2">
        <NavButton
          selected={selected}
          handleClick={handleClick}
          value="ACCUEIL"
          name="Accueil"
        />

        <NavButton
          selected={selected}
          handleClick={handleClick}
          value="TARIFS"
          name="Tarifs"
        />

        <NavButton
          selected={selected}
          handleClick={handleClick}
          value="CONTACT"
          name="Contact"
        />
      </ul>
    </div>
  );
}
