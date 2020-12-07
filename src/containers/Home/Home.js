import img from "../../assets/illustration/undraw_wallet_aym5.svg";
import classes from "./Home.module.css";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";
const Home = (props) => {
    return (
        <header className={classes.Home}>
            <div className={classes.HomeText}>
                <h1>Track budgets simply</h1>
                <p>
                    Let's help you effortlessly manage your personal finances in one place beacuse
                    money matters.
                </p>
                <GoogleOAuth>Sign in free</GoogleOAuth>
            </div>
            <figure className={classes.HomeImg}>
                <img src={img} alt="Hero Illustration" />
            </figure>
        </header>
    );
};

export default Home;
