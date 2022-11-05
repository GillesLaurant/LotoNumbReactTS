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
    const [theme, setTheme] = useState("euro");
    // List themes
    const themes = [
        {
            name: "euro",
            front: "#c49757",
            back: "#1f388d",
        },
        {
            name: "loto",
            front: "#132B78",
            back: "#56ACD5",
        },
        {
            name: "keno",
            front: "#E40521",
            back: "#FAA426",
        },
    ];
    // Toggle themes
    const handleTheme = (value) => setTheme(value);
    return (<div className="App">
      <ThemeContext.Provider value={theme}>
        
        <TitleApp color={themes.find((item) => item.name === theme)}/>
        
        <Nav handles={handleTheme}/>
        
        <div className="app-main">
          {theme === "loto" && <Loto />}
          {theme === "euro" && <EuroMillions />}
          {theme === "keno" && <Keno />}
        </div>
      </ThemeContext.Provider>
      <Author color={themes.find((item) => item.name === theme)}/>
    </div>);
}
export default App;
