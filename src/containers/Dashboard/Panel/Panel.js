import { useSelector } from "react-redux";
import classes from "./Panel.module.css";
import { NavLink } from "react-router-dom";
const lists = [
    { text: "Dashboard", icon: "home", path: "/dashboard" },
    { text: "Form", icon: "add-circle", path: "/form" },
    { text: "Analysis", icon: "bar-chart", path: "/analysis" },
];
const Panel = (props) => {
    const auth = useSelector((state) => state.auth);
    return (
        <aside className={classes.Panel}>
            <div className={classes.Profile}>
                <figure className={classes.ProfileImage}>
                    <img src={auth.user.imageUrl} alt="User Profile" />
                </figure>
                <div className={classes.ProfileText}>
                    <h2>{auth.user.name}</h2>
                    <span>{auth.user.email}</span>
                </div>
            </div>
            <div className={classes.ListBox}>
                <div className={classes.List}>
                    {lists.map((list, i) => (
                        <div className={`${classes.ListItem} `} key={i}>
                            <NavLink activeClassName={classes.active} to={list.path} exact>
                                {list.text}
                                <ion-icon name={list.icon}></ion-icon>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <footer>
                    Developed by{" "}
                    <a
                        href="https://htutwaiphyoe.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer    "
                    >
                        Htut Wai Phyoe
                    </a>
                </footer>
            </div>
        </aside>
    );
};

export default Panel;
