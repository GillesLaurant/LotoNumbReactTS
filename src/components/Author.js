// AUTHOR
function Author({ color }) {
    const returnAuthorSpan = () => {
        let author = "by Gilles Laurant";
        return author.split("");
    };
    return (<p className="app-author" style={{ color: color?.front }}>
      {returnAuthorSpan().map((letter, index) => (<span key={index} className="app-author-letter">
          {letter}
        </span>))}
    </p>);
}
export default Author;
