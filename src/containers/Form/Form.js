import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Form.module.css";
import Dashboard from "../Dashboard/Dashboard";
import * as actionCreators from "../../store/actions";
const Form = (props) => {
    const dispatch = useDispatch();
    const isRequested = useSelector((state) => state.ui.isRequested);
    const [info, setInfo] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");

    const onChangeInfoHandler = (e) => {
        setInfo(e.target.value);
    };
    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
    };
    const onChangeTypeHandler = (e) => {
        setType(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (info.trim()) {
            setInfo("");
            setAmount("");
            dispatch(actionCreators.addNewItem(type, { info, amount }));
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
