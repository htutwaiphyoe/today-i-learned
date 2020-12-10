import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/imgs/logo11.png";
import GoogleOAuth from "../../containers/GoogleOAuth/GoogleOAuth";
import { useSelector } from "react-redux";

const Navigation = (props) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const sidebar = useSelector((state) => state.ui.sidebar);
    let style = {
        transform: "translateX(0px)",
        height: isSignedIn ? "7rem" : "9rem",
    };
    if (sidebar) {
        style = {
            transform: "translateX(-300px)",
            overflow: "hidden",
            height: isSignedIn ? "7rem" : "9rem",
        };
    }
    return (
        <nav className={classes.Navigation} style={style}>
            <ul style={{ width: isSignedIn ? "90%" : "80%" }}>
                <li>
                    <img src={logo} alt="Financy" />
                    <span>Financy</span>
                </li>
                {!isSignedIn ? (
                    <li>Home</li>
                ) : (
                    <React.Fragment>
                        <li className={classes.SignIn}>
                            <GoogleOAuth>Logout</GoogleOAuth>
                        </li>
                        <li
                            className={classes.ListIcon}
                            onClick={() => props.sidebarHandler(!sidebar)}
                        >
                            <ion-icon name="list-sharp" size="large"></ion-icon>
                        </li>
                    </React.Fragment>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
