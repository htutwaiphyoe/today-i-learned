import { formatNumber } from "../../utils/utils";
import classes from "./TotalStatus.module.css";
const TotalStatus = (props) => {
    return (
        <div className={`${classes.TotalStatusBox} ${classes[props.type]}`}>
            <h2>{props.type}</h2>
            <h3>$ {formatNumber(Number.parseFloat(props.total).toFixed(2))}</h3>
        </div>
    );
};

export default TotalStatus;
