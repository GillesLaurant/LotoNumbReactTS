// TITLE APP
function TitleApp({ color }) {
    return (<h1 className="app-title" style={{ color: color?.front, background: color?.back }}>
      I want the winning <span>numbers !</span>
    </h1>);
}
export default TitleApp;
