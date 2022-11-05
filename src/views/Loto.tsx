import { useState } from "react";
import { checkValinArray, getJackpot } from "../assets/funcRandom";
import Grids from "../components/Grids";
import JackpotClick from "../components/JackpotClick";
import TableResult from "../components/TableResult";

// LOTO
function Loto() {
  // State
  const [jackpot, setJackpot] = useState([
    { name: "nums", table: ["*", "*", "*", "*", "*"] },
    { name: "stars", table: ["*"] },
    { name: "userNums", table: ["*", "*", "*", "*", "*"] },
    { name: "userStars", table: ["*"] },
  ]);

  // Grid user's click
  const handleUserClick = (arr: string, v: string) => {
    // Copy state
    let stateCopy = jackpot;
    let arrTarget = [""];
    // User array
    stateCopy.forEach((item, index) => {
      if (item.name === arr) {
        arrTarget = item.table;
        stateCopy[index].table = checkValinArray(arrTarget, v);
        // State array
        stateCopy.forEach((element) => {
          if (element.name.includes(arr.toLowerCase().slice(4))) {
            element.table = checkValinArray(element.table, v);

            element.table = element.table
              .slice(arrTarget.length)
              .concat(arrTarget);

            setJackpot([...stateCopy]);
          }
        });
      }
    });
  };

  // Reset button
  const handleReset = () => {
    setJackpot([
      { ...jackpot[0], table: ["*", "*", "*", "*", "*"] },
      { ...jackpot[1], table: ["*"] },
      { ...jackpot[2], table: ["*", "*", "*", "*", "*"] },
      { ...jackpot[3], table: ["*"] },
    ]);
  };

  // Jackpot button
  const handleJackpot = () => {
    const tableNums = getJackpot(jackpot[0].table, 49, jackpot[2].table);
    const tableStars = getJackpot(jackpot[1].table, 10, jackpot[3].table);
    setJackpot([
      { ...jackpot[0], table: tableNums },
      { ...jackpot[1], table: tableStars },
      { ...jackpot[2] },
      { ...jackpot[3] },
    ]);
  };

  return (
    <section className="loto">
      <div className="loto-grids-container">
        {/* NUMS GRID */}
        <Grids
          handle={handleUserClick}
          nameCss={"userNums"}
          min={1}
          max={49}
          jackpot={jackpot.find((item) => item.name === "userNums")}
        />
        {/* STARS GRID */}
        <Grids
          handle={handleUserClick}
          nameCss={"userStars"}
          min={1}
          max={10}
          jackpot={jackpot.find((item) => item.name === "userStars")}
        />
      </div>
      {/* RESULT DISPLAY */}
      <TableResult jackpot={jackpot} />
      {/* ACTIONS BUTTONS */}
      <JackpotClick reset={handleReset} random={handleJackpot} />
    </section>
  );
}

export default Loto;
