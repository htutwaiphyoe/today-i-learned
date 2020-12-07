import classes from "./Form.module.css";
import Dashboard from "../Dashboard/Dashboard";
const Form = (props) => {
    return (
        <Dashboard>
            <article>
                <form>
                    <input type="text" placeholder="Information" name="info" />
                    <input type="number" placeholder="Enter amount" name="amount" />
                    <button type="submit">Add new item</button>
                </form>
            </article>
        </Dashboard>
    );
};

export default Form;
