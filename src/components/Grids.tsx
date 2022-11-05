import React from "react";
import { returnArray } from "../assets/funcRandom";
import ButtonClick from "./ButtonClick";

type Props = {
  handle: Function;
  nameCss: string;
  min: number;
  max: number;
  jackpot: { name: string; table: string[] } | undefined;
};

// GRID
function Grids({ handle, nameCss, min, max, jackpot }: Props) {
  const filterNumber = (v: string) => {
    return jackpot?.table.includes(v);
  };
  return (
    <div className={nameCss}>
      {returnArray(min, max).map((num: string) => (
        <ButtonClick
          key={num}
          classCss={"grid-button " + nameCss}
          onClick={() => handle(nameCss, num.toString())}
          message={num.toString()}
          isActive={filterNumber(num)}
        />
      ))}
    </div>
  );
}

export default Grids;
