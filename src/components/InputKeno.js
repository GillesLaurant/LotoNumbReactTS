import { returnArray } from "../assets/funcRandom";
// INPUT KENO
function InputKeno({ onChange, numberKeno }) {
    return (<div className="inputKeno-container">
      <label htmlFor="inputKeno">Modifiez le nombre de numéros</label>

      <select name="inputKeno" id="inputKeno" value={numberKeno} onChange={(ev) => onChange(parseInt(ev.target.value))}>
        {returnArray(2, 10).map((option) => (<option key={option} value={option}>
            {option}
          </option>))}
      </select>
    </div>);
}
export default InputKeno;
