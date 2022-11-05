import ButtonClick from "./ButtonClick";
// Container buttons Reset & Jackpot
function JackpotClick({ reset, random }) {
    return (<div className="jackpotClick">
      
      <ButtonClick classCss="reset" onClick={() => reset()} message="Reset"/>
      
      <ButtonClick classCss="jackpot" onClick={() => random()} message="Jackpot"/>
    </div>);
}
export default JackpotClick;
