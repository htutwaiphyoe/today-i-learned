import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Form.module.css";
import Dashboard from "../Dashboard/Dashboard";
import * as actionCreators from "../../store/actions";
import { getDropDown, getDays, getMonths } from "../../utils/utils";
const Form = (props) => {
    const date = new Date();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const isRequested = useSelector((state) => state.ui.isRequested);
    const [info, setInfo] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [year, setYear] = useState(date.getFullYear());
    const onChangeHandler = (e, setData) => {
        setData(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (info.trim()) {
            setInfo("");
            setAmount("");
            setType("income");
            dispatch(
                actionCreators.addNewItem(type, {
                    info: info.trim(),
                    amount,
                    createdAt: `${user.email}-${day}/${month}/${year}`,
                })
            );
        }
    };
    return (
        <Dashboard>
            <article className={classes.Form}>
                <form onSubmit={onSubmitHandler}>
                    <h1>Let's start with a new one</h1>
                    <div className={classes.FormElement}>
                        <label>Enter information</label>
                        <input
                            type="text"
                            placeholder="eg. Salary"
                            name="info"
                            required
                            value={info}
                            onChange={(e) => onChangeHandler(e, setInfo)}
                        />
                    </div>
                    <div className={classes.FormElement}>
                        <label>Enter Amount</label>
                        <input
                            type="number"
                            placeholder="eg. 3000000"
                            name="amount"
                            required
                            value={amount}
                            onChange={(e) => onChangeHandler(e, setAmount)}
                        />
                    </div>
                    <div className={classes.FormElement}>
                        <label>Select one...</label>
                        <select required value={type} onChange={(e) => onChangeHandler(e, setType)}>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className={classes.FormElement}>
                        <label>Select date...</label>
                        <div className={classes.DateBox}>
                            <select onChange={(e) => onChangeHandler(e, setDay)} value={day}>
                                {getDropDown(getDays(+year, +month, date))}
                            </select>
                            <select onChange={(e) => onChangeHandler(e, setMonth)} value={month}>
                                {getDropDown(getMonths(+year, date))}
                            </select>
                            <select onChange={(e) => onChangeHandler(e, setYear)} value={year}>
                                {getDropDown(11, new Date().getFullYear() - 11)}
                            </select>
                        </div>
                    </div>
                    {isRequested ? (
                        <button className={`${classes.button} ${classes.disable}`} disabled>
                            Loading..
                        </button>
                    ) : (
                        <button type="submit" className={classes.button}>
                            Add item
                        </button>
                    )}
                </form>
            </article>
        </Dashboard>
    );
};

export default Form;
