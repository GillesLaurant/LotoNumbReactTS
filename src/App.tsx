import { useState } from "react";
import "./App.css";
import Author from "./components/Author";
import Nav from "./components/Nav";
import ThemeContext from "./components/ThemeContext";
import TitleApp from "./components/TitleApp";
import EuroMillions from "./views/EuroMillions";
import Keno from "./views/Keno";
import Loto from "./views/Loto";

// APP
function App() {
  // CONTEXT
  const [theme, setTheme] = useState<string>("euro");
  // List themes
  const themes = [
    {
      name: "euro",
      front: "#c49757", // 1 à 49 et 1 à 12
      back: "#1f388d",
    },
    {
      name: "loto",
      front: "#132B78", // 1 à 49 et 1 à 10 => 5 num tiré et 1 complémentaire
      back: "#56ACD5",
    },
    {
      name: "keno",
      front: "#E40521", // 1 à 70 => 20 num tirés 10 num nécéssaire
      back: "#FAA426", // Choisir le nombre de num que l'on veut jouer 2 à 10
    },
  ];
  // Toggle themes
  const handleTheme = (value: string) => setTheme(value);

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        {/* TITLE */}
        <TitleApp color={themes.find((item) => item.name === theme)} />
        {/* NAV */}
        <Nav handles={handleTheme} />
        {/* MAIN */}
        <div className="app-main">
          {theme === "loto" && <Loto />}
          {theme === "euro" && <EuroMillions />}
          {theme === "keno" && <Keno />}
        </div>
      </ThemeContext.Provider>
      <Author color={themes.find((item) => item.name === theme)} />
    </div>
  );
}

export default App;
