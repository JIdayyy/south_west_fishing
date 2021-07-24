const SpanTab = (
  <span className="bg-green-400 absolute transform translate-y-9  w-12 h-2"></span>
);

interface IProps {
  handleClick: (e: unknown) => void;
  value: string;
  selected: string;
  name: string;
}

export function NavButton({
  handleClick,
  value,
  selected,
  name,
}: IProps): JSX.Element {
  return (
    <button
      value={value}
      className=" mx-4 relative flex flex-col"
      onClick={handleClick}
    >
      {name} {selected === value && SpanTab}
    </button>
  );
}
