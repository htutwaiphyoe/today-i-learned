import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Today.module.css";
import Dashboard from "../Dashboard/Dashboard";
import * as actionCreators from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";
const Today = (props) => {
    const user = useSelector((state) => state.auth.user);
    const income = useSelector((state) => state.dashboard.income);
    const expense = useSelector((state) => state.dashboard.expense);
    const totIncome = useSelector((state) => state.dashboard.totincome);
    const totExpense = useSelector((state) => state.dashboard.totexpense);
    const isRequested = useSelector((state) => state.ui.isRequested);
    const dispatch = useDispatch();

    useEffect(() => {
        if (income === null && expense === null && user) {
            console.log(user);
            dispatch(actionCreators.getData(user.email));
        }
    }, [dispatch, income, expense, user]);
    const formatNumber = (amount) => {
        return parseInt(amount.split(".")[0]).toLocaleString() + "." + amount.split(".")[1];
    };
    const deleteRowHandler = (type, id, amount) => {
        if (id) {
            dispatch(actionCreators.deleteItem(type, id, amount));
        }
    };
    const getTableRow = (items, type) => {
        return items.map((item, i) => {
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
                        onClick={() => deleteRowHandler(type, item.id, item.amount)}
                    >
                        <ion-icon name="close-circle"></ion-icon>
                    </td>
                </tr>
            );
        });
    };

    let incomeData = <p>No income for today</p>;
    let expenseData = <p>No expense for today</p>;
    if (income && income.length > 0) {
        incomeData = getTableRow(income, "income");
    }
    if (expense && expense.length > 0) {
        expenseData = getTableRow(expense, "expense");
    }
    return (
        <Dashboard>
            <article className={classes.Today}>
                <h1>
                    <ion-icon name="calendar"></ion-icon>
                    {new Date().toDateString()}
                </h1>
                <div className={classes.Status}>
                    <div className={classes.StatusBox}>
                        <h2>Income</h2>
                        <h3>$ {formatNumber(Number.parseFloat(totIncome).toFixed(2))}</h3>
                    </div>
                    <div className={classes.StatusBox}>
                        <h2>Expense</h2>
                        <h3>$ {formatNumber(Number.parseFloat(totExpense).toFixed(2))}</h3>
                    </div>
                    <div className={classes.StatusBox}>
                        <h2>Networth</h2>
                        <h3>
                            $ {formatNumber(Number.parseFloat(totIncome - totExpense).toFixed(2))}
                        </h3>
                    </div>
                </div>
                <div className={classes.TableBox}>
                    <table>
                        <caption>Income</caption>
                        <thead>
                            <tr>
                                <th className={classes.No}>No.</th>
                                <th>Inforamtion</th>
                                <th>Amount</th>
                                <th className={classes.No}></th>
                            </tr>
                        </thead>
                        <tbody>{isRequested ? <Loader /> : incomeData}</tbody>
                    </table>
                    <table>
                        <caption>Expense</caption>
                        <thead>
                            <tr>
                                <th className={classes.No}>No.</th>
                                <th>Inforamtion</th>
                                <th>Amount</th>
                                <th className={classes.No}></th>
                            </tr>
                        </thead>
                        <tbody>{isRequested ? <Loader /> : expenseData}</tbody>
                    </table>
                </div>
            </article>
        </Dashboard>
    );
};

export default Today;
