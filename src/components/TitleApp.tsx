import { PropsWithChildren } from "react";

type Color = PropsWithChildren<{
  color: { name: string; front: string; back: string } | undefined;
}>;

// TITLE APP
function TitleApp({ color }: Color) {
  return (
    <h1
      className="app-title"
      style={{ color: color?.front, background: color?.back }}
    >
      I want winner numbers !
    </h1>
  );
}

export default TitleApp;
