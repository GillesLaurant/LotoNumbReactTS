import { PropsWithChildren } from "react";
import { returnArray } from "../assets/funcRandom";

type Props = PropsWithChildren<{
  onChange: Function;
  numberKeno: number;
}>;

// INPUT KENO
function InputKeno({ onChange, numberKeno }: Props) {
  return (
    <div className="inputKeno-container">
      <label htmlFor="inputKeno">Modifiez le nombre de numéros</label>

      <select
        name="inputKeno"
        id="inputKeno"
        value={numberKeno}
        onChange={(ev) => onChange(parseInt(ev.target.value))}
      >
        {returnArray(2, 10).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputKeno;
