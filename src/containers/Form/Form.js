import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Form.module.css";
import Dashboard from "../Dashboard/Dashboard";
import * as actionCreators from "../../store/actions";
import { getDropDown } from "../../utils/utils";
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

    const onChangeInfoHandler = (e) => {
        setInfo(e.target.value);
    };
    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
    };
    const onChangeTypeHandler = (e) => {
        setType(e.target.value);
    };
    const dayChangeHandler = (e) => {
        setDay(e.target.value);
    };
    const monthChangeHandler = (e) => {
        setMonth(e.target.value);
    };
    const yearChangeHandler = (e) => {
        setYear(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (info.trim()) {
            setInfo("");
            setAmount("");
            setType("income");
            dispatch(
                actionCreators.addNewItem(type, {
                    info,
                    amount,
                    createdAt: `${user.email}-${month}/${day}/${year}`,
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
                            onChange={onChangeInfoHandler}
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
                            onChange={onChangeAmountHandler}
                        />
                    </div>
                    <div className={classes.FormElement}>
                        <label>Select one...</label>
                        <select required value={type} onChange={onChangeTypeHandler}>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className={classes.FormElement}>
                        <label>Select date...</label>
                        <div className={classes.DateBox}>
                            <select onChange={dayChangeHandler} value={day}>
                                {getDropDown(31)}
                            </select>
                            <select onChange={monthChangeHandler} value={month}>
                                {getDropDown(12)}
                            </select>
                            <select onChange={yearChangeHandler} value={year}>
                                {getDropDown(10, 2010)}
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
