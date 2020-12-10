import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Today.module.css";
import Dashboard from "../Dashboard/Dashboard";
import * as actionCreators from "../../store/actions";
import TableRow from "../../components/TableRow/TableRow";
import Table from "../../components/Table/Table";
import TotalStatus from "../../components/TotalStatus/TotalStatus";
const Today = (props) => {
    const date = useMemo(() => new Date(), []);
    const user = useSelector((state) => state.auth.user);
    const income = useSelector((state) => state.dashboard.income);
    const expense = useSelector((state) => state.dashboard.expense);
    const totIncome = useSelector((state) => state.dashboard.totincome);
    const totExpense = useSelector((state) => state.dashboard.totexpense);
    const isRequested = useSelector((state) => state.ui.isRequested);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(
                actionCreators.getData(
                    `${user.email}-${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                )
            );
        }
    }, [dispatch, user, date]);

    let incomeData = <p>No income for today</p>;
    let expenseData = <p>No expense for today</p>;
    if (income && income.length > 0) {
        incomeData = <TableRow items={income} type="income" />;
    }
    if (expense && expense.length > 0) {
        expenseData = <TableRow items={expense} type="expense" />;
    }
    return (
        <Dashboard>
            <article className={classes.Today}>
                <h1>
                    <ion-icon name="calendar"></ion-icon>
                    {new Date().toDateString()}
                </h1>
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

export default Today;
