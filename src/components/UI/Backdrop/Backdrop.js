import classes from "./Backdrop.module.css";
const Backdrop = (props) => {
    const cssClasses = [classes.Backdrop];
    if (props.sidebar) {
        cssClasses.push(classes.Show);
    }
    return <div className={cssClasses.join(" ")} onClick={props.backDropClickHandler}></div>;
};
export default Backdrop;
