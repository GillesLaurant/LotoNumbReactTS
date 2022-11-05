import { PropsWithChildren } from "react";

type Color = PropsWithChildren<{
  color: { name: string; front: string; back: string } | undefined;
}>;

// AUTHOR
function Author({ color }: Color) {
  const returnAuthorSpan = () => {
    let author = "by Gilles Laurant";
    return author.split("");
  };
  return (
    <p className="app-author" style={{ color: color?.front }}>
      {returnAuthorSpan().map((letter, index) => (
        <span key={index} className="app-author-letter">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Author;
