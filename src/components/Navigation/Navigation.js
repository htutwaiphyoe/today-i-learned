import classes from "./Navigation.module.css";
import logo from "../../assets/imgs/logo11.png";

const Navigation = (props) => {
    return (
        <nav className={classes.Navigation}>
            <ul>
                <li>
                    <img src={logo} alt="Financy" />
                    <span>Financy</span>
                </li>

                <li className={classes.SignIn}>Home</li>
            </ul>
        </nav>
    );
};

export default Navigation;
