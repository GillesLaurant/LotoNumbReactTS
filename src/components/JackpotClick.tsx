import { PropsWithChildren } from "react";
import ButtonClick from "./ButtonClick";

type Props = PropsWithChildren<{
  reset: Function;
  random: Function;
}>;

// Container buttons Reset & Jackpot
function JackpotClick({ reset, random }: Props) {
  return (
    <div className="jackpotClick">
      {/* BUTTON RESET */}
      <ButtonClick classCss="reset" onClick={() => reset()} message="Reset" />
      {/* BUTTON JACKPOT */}
      <ButtonClick
        classCss="jackpot"
        onClick={() => random()}
        message="Jackpot"
      />
    </div>
  );
}

export default JackpotClick;
