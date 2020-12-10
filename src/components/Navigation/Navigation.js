import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/imgs/logo11.png";
import GoogleOAuth from "../../containers/GoogleOAuth/GoogleOAuth";
import { useSelector } from "react-redux";

const Navigation = (props) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const sidebar = useSelector((state) => state.ui.sidebar);
    let style = {
        height: isSignedIn ? "7rem" : "9rem",
        boxShadow: isSignedIn ? "0 0.15rem 0.5rem 0 rgba(58, 59, 69, 0.2)" : "none",
    };
    let navClasses = [classes.Navigation];

    if (sidebar) {
        style = {
            boxShadow: "0 0.15rem 0.5rem 0 rgba(58, 59, 69, 0.2)",
            // overflow: "hidden",
            height: isSignedIn ? "7rem" : "9rem",
        };
        navClasses.push("Slide");
    }
    return (
        <nav className={navClasses.join(" ")} style={style}>
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
