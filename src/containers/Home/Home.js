import img from "../../assets/illustration/undraw_wallet_aym5.svg";
import classes from "./Home.module.css";
const Home = (props) => {
    return (
        <header className={classes.Home}>
            <div className={classes.HomeText}>
                <h1>Track budgets flow</h1>
                <p>
                    Let's help you effortlessly manage your personal finances in one place beacuse
                    money matters.
                </p>
                <button>Sign in free</button>
            </div>
            <figure className={classes.HomeImg}>
                <img src={img} alt="Hero Illustration" />
            </figure>
        </header>
    );
};

export default Home;
