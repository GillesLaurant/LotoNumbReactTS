import { useState } from "react";
import { checkValinArray, getJackpot, returnArray } from "../assets/funcRandom";
import Grids from "../components/Grids";
import InputKeno from "../components/InputKeno";
import JackpotClick from "../components/JackpotClick";
import TableResult from "../components/TableResult";

// KENO
function Keno() {
  // Select state input
  const [select, setSelect] = useState(10),
    // State
    [jackpot, setJackpot] = useState([
      {
        name: "nums",
        table: returnArray(1, select, "*"),
      },
      { name: "stars", table: ["*"] },
      {
        name: "userNums",
        table: returnArray(1, select, "*"),
      },
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
        stateCopy.forEach((element, ind) => {
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
      {
        ...jackpot[0],
        table: returnArray(1, select, "*"),
      },
      { ...jackpot[1] },
      {
        ...jackpot[2],
        table: returnArray(1, select, "*"),
      },
      { ...jackpot[3] },
    ]);
  };

  // Jackpot button
  const handleJackpot = () => {
    const tableNums = getJackpot(jackpot[0].table, 70, jackpot[2].table);
    setJackpot([
      { ...jackpot[0], table: tableNums },
      { ...jackpot[1] },
      { ...jackpot[2] },
      { ...jackpot[3] },
    ]);
  };

  // Change select input
  const handleChange = (v: number) => {
    let copy: any = jackpot;
    // Array state
    copy[0].table = Array(v)
      .fill(1)
      .map((item) => (item = "*"));
    // Array user state
    copy[2].table = Array(v)
      .fill(1)
      .map((item) => (item = "*"));

    setJackpot([...copy]);
    setSelect(v);
  };

  return (
    <section className="keno">
      <div className="keno-grids-container">
        {/* NUMS GRID */}
        <Grids
          handle={handleUserClick}
          nameCss={"userNums"}
          min={1}
          max={70}
          jackpot={jackpot.find((item) => item.name === "userNums")}
        />
        {/* INPUT SELECT */}
        <InputKeno onChange={handleChange} numberKeno={select} />
      </div>
      {/* RESULT DISPLAY */}
      <TableResult jackpot={jackpot} />
      {/* ACTIONS BUTTONS */}
      <JackpotClick reset={handleReset} random={handleJackpot} />
    </section>
  );
}

export default Keno;
