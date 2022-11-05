import { useContext } from "react";
import ThemeContext from "./ThemeContext";
// CONTAINER RESULT DISPLAY
function TableResult({ jackpot }) {
    const theme = useContext(ThemeContext);
    // Dispatch state
    const nums = jackpot.find((item) => item.name === "nums");
    const stars = jackpot.find((item) => item.name === "stars");
    const numsUser = jackpot.find((item) => item.name === "userNums");
    const starsUser = jackpot.find((item) => item.name === "userStars");
    return (<div className="jackpot-results">
      
      <div className={"result_" + nums?.name}>
        {nums?.table.map((item, index) => (<span key={index} className={numsUser?.table.includes(item) ? "userNumbers" : "numsEuro"}>
            {item}
            <span>{"  "}</span>
          </span>))}
      </div>
      
      <div className={"result_" + stars?.name}>
        {theme !== "keno" &&
        stars?.table.map((item, index) => (<span key={index} className={starsUser?.table.includes(item) ? "userNumbers" : "numsEuro"}>
              {item}
              <span>{"  "}</span>
            </span>))}
      </div>
    </div>);
}
export default TableResult;
