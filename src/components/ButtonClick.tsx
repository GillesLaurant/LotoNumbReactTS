type Props = {
  onClick: Function;
  message: string;
  classCss: string;
  isActive?: boolean;
};

// BUTTON CLICK
export default function ButtonClick({
  onClick,
  message,
  classCss,
  isActive,
}: Props) {
  return (
    <button
      type="button"
      className={!isActive ? classCss : classCss + " isActive"}
      onClick={() => onClick()}
    >
      {message}
    </button>
  );
}
