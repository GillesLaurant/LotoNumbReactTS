// BUTTON CLICK
export default function ButtonClick({ onClick, message, classCss, isActive, }) {
    return (<button type="button" className={!isActive ? classCss : classCss + " isActive"} onClick={() => onClick()}>
      {message}
    </button>);
}
