import React from "react";
import GoogleOAuth from "../../containers/GoogleOAuth/GoogleOAuth";
import classes from "./SideDrawer.module.css";
import { NavLink } from "react-router-dom";
const lists = [
    { text: "Dashboard", icon: "home", path: "/dashboard" },
    { text: "Form", icon: "add-circle", path: "/form" },
    { text: "Analysis", icon: "bar-chart", path: "/analysis" },
];
const SideDrawer = (props) => {
    const cssClasses = [classes.SideDrawer];
    if (props.sidebar) {
        cssClasses.push(classes.Show);
    }
    const closeSideDrawer = () => {
        props.sidebarHandler(false);
    };
    return (
        <React.Fragment>
            {/* <Backdrop
                sidebar={props.sidebar}
                backDropClickHandler={() => props.sidebarHandler(false)}
            /> */}
            <aside className={cssClasses.join(" ")}>
                <div className={classes.Profile}>
                    <figure className={classes.ProfileImage}>
                        <img src={props.auth.user.imageUrl} alt="User Profile" />
                    </figure>
                    <div className={classes.ProfileText}>
                        <h2>{props.auth.user.name}</h2>
                        <span>{props.auth.user.email}</span>
                    </div>
                </div>
                <div className={classes.ListBox} onClick={closeSideDrawer}>
                    <div className={classes.List}>
                        {lists.map((list, i) => (
                            <div className={`${classes.ListItem} `} key={i}>
                                <NavLink activeClassName={classes.active} to={list.path} exact>
                                    {list.text}
                                    <ion-icon name={list.icon}></ion-icon>
                                </NavLink>
                            </div>
                        ))}
                        <div className={classes.Logout}>
                            <GoogleOAuth>Logout</GoogleOAuth>
                        </div>
                    </div>
                    <footer>
                        <p>
                            Developed by{" "}
                            <a
                                href="https://htutwaiphyoe.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer    "
                            >
                                Htut Wai Phyoe
                            </a>
                        </p>
                    </footer>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default SideDrawer;
