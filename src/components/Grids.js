import React from "react";
import { returnArray } from "../assets/funcRandom";
import ButtonClick from "./ButtonClick";
// GRID
function Grids({ handle, nameCss, min, max, jackpot }) {
    const filterNumber = (v) => {
        return jackpot?.table.includes(v);
    };
    return (<div className={nameCss}>
      {returnArray(min, max).map((num) => (<ButtonClick key={num} classCss={"grid-button " + nameCss} onClick={() => handle(nameCss, num.toString())} message={num.toString()} isActive={filterNumber(num)}/>))}
    </div>);
}
export default Grids;
