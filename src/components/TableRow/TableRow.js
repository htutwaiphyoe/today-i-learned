import { useDispatch } from "react-redux";
import { formatNumber } from "../../utils/utils";
import * as actionCreators from "../../store/actions";
import classes from "./TableRow.module.css";

const TableRow = (props) => {
    const dispatch = useDispatch();
    const deleteRowHandler = (type, id, amount) => {
        if (id) {
            dispatch(actionCreators.deleteItem(type, id, amount));
        }
    };
    return props.items.map((item, i) => {
        let cssClasses = [];
        if (i % 2 !== 0) {
            cssClasses.push(classes.light);
        }
        return (
            <tr key={item.id} className={cssClasses.join(" ")}>
                <td className={classes.No}>{i + 1}.</td>
                <td>{item.info}</td>
                <td>$ {formatNumber(Number.parseFloat(item.amount).toFixed(2))}</td>
                <td
                    className={classes.No}
                    onClick={() => deleteRowHandler(props.type, item.id, item.amount)}
                >
                    <ion-icon name="close-circle"></ion-icon>
                </td>
            </tr>
        );
    });
};

export default TableRow;
