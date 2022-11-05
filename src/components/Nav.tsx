import { PropsWithChildren, useContext } from "react";
import ButtonClick from "./ButtonClick";
import ThemeContext from "./ThemeContext";

type Props = PropsWithChildren<{
  handles: Function;
}>;

// NAVIGATION
function Nav({ handles }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <nav className="app-nav">
      {/* LOTO */}
      <ButtonClick
        classCss={"app-nav-loto"}
        onClick={() => handles("loto")}
        message={"Loto"}
        isActive={theme === "loto" ? true : false}
      />
      {/* EUROMILLIONS */}
      <ButtonClick
        classCss={"app-nav-euro"}
        onClick={() => handles("euro")}
        message={"Euro Millions"}
        isActive={theme === "euro" ? true : false}
      />
      {/* KENO */}
      <ButtonClick
        classCss={"app-nav-keno"}
        onClick={() => handles("keno")}
        message={"Keno"}
        isActive={theme === "keno" ? true : false}
      />
    </nav>
  );
}

export default Nav;
