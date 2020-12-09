import classes from "./Navigation.module.css";
import logo from "../../assets/imgs/logo11.png";
import GoogleOAuth from "../../containers/GoogleOAuth/GoogleOAuth";
import { useSelector } from "react-redux";

const Navigation = (props) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    return (
        <nav className={classes.Navigation} style={{ height: isSignedIn ? "7rem" : "9rem" }}>
            <ul style={{ width: isSignedIn ? "90%" : "80%" }}>
                <li>
                    <img src={logo} alt="Financy" />
                    <span>Financy</span>
                </li>
                {!isSignedIn ? (
                    <li className={classes.SignIn}>Home</li>
                ) : (
                    <li className={classes.SignIn}>
                        <GoogleOAuth>Logout</GoogleOAuth>
                    </li>
                )}
                <li className={classes.ListIcon}>
                    <ion-icon name="list-sharp" size="large"></ion-icon>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
