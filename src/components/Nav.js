import { useContext } from "react";
import ButtonClick from "./ButtonClick";
import ThemeContext from "./ThemeContext";
// NAVIGATION
function Nav({ handles }) {
    const theme = useContext(ThemeContext);
    return (<nav className="app-nav">
      
      <ButtonClick classCss={"app-nav-loto"} onClick={() => handles("loto")} message={"Loto"} isActive={theme === "loto" ? true : false}/>
      
      <ButtonClick classCss={"app-nav-euro"} onClick={() => handles("euro")} message={"Euro Millions"} isActive={theme === "euro" ? true : false}/>
      
      <ButtonClick classCss={"app-nav-keno"} onClick={() => handles("keno")} message={"Keno"} isActive={theme === "keno" ? true : false}/>
    </nav>);
}
export default Nav;
