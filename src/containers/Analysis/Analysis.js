import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dashboard from "../Dashboard/Dashboard";
import classes from "./Analysis.module.css";
import * as actionCreators from "../../store/actions";
import { getDropDown, getDays, getMonths } from "../../utils/utils";
import TableRow from "../../components/TableRow/TableRow";
import Table from "../../components/Table/Table";
import TotalStatus from "../../components/TotalStatus/TotalStatus";
const Analysis = (props) => {
    const date = new Date();
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [year, setYear] = useState(date.getFullYear());
    const user = useSelector((state) => state.auth.user);
    const income = useSelector((state) => state.dashboard.income);
    const expense = useSelector((state) => state.dashboard.expense);
    const totIncome = useSelector((state) => state.dashboard.totincome);
    const totExpense = useSelector((state) => state.dashboard.totexpense);
    const isRequested = useSelector((state) => state.ui.isRequested);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) dispatch(actionCreators.getData(`${user.email}-${day}/${month}/${year}`));
    }, [dispatch, user, day, month, year]);
    const selectChangeHandler = (e, setData) => {
        setData(e.target.value);
    };

    let incomeData = <p>No income available</p>;
    let expenseData = <p>No expense available</p>;
    if (income && income.length > 0) {
        incomeData = <TableRow items={income} type="income" />;
    }
    if (expense && expense.length > 0) {
        expenseData = <TableRow items={expense} type="expense" />;
    }

    return (
        <Dashboard>
            <article className={classes.Analysis}>
                <div className={classes.DateBox}>
                    <select onChange={(e) => selectChangeHandler(e, setDay)} value={day}>
                        {getDropDown(getDays(+year, +month, date))}
                    </select>
                    <select onChange={(e) => selectChangeHandler(e, setMonth)} value={month}>
                        {getDropDown(getMonths(+year, date))}
                    </select>
                    <select onChange={(e) => selectChangeHandler(e, setYear)} value={year}>
                        {getDropDown(11, new Date().getFullYear() - 11)}
                    </select>
                </div>
                <div className={classes.TotalStatus}>
                    <TotalStatus type="Income" total={totIncome} />
                    <TotalStatus type="Expense" total={totExpense} />
                    <TotalStatus type="Networth" total={totIncome - totExpense} />
                </div>
                <div className={classes.TableBox}>
                    <Table caption="Income" isRequested={isRequested} data={incomeData} />
                    <Table caption="Expense" isRequested={isRequested} data={expenseData} />
                </div>
            </article>
        </Dashboard>
    );
};

export default Analysis;
