import classes from "./Table.module.css";
import Loader from "../UI/Loader/Loader";
const Table = (props) => {
    return (
        <table>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    <th className={classes.No}>No.</th>
                    <th>Inforamtion</th>
                    <th>Amount</th>
                    <th className={classes.No}></th>
                </tr>
            </thead>
            <tbody>{props.isRequested ? <Loader /> : props.data}</tbody>
        </table>
    );
};

export default Table;
