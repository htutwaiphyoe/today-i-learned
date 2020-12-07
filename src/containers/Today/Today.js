import classes from "./Today.module.css";

import Dashboard from "../Dashboard/Dashboard";
const Today = (props) => {
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
                        <h3>$30000</h3>
                    </div>
                    <div className={classes.StatusBox}>
                        <h2>Expense</h2>
                        <h3>$30000</h3>
                    </div>
                    <div className={classes.StatusBox}>
                        <h2>Networth</h2>
                        <h3>$30000</h3>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr className={classes.light}>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <caption>Expense</caption>
                        <thead>
                            <tr>
                                <th className={classes.No}>No.</th>
                                <th>Inforamtion</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr className={classes.light}>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </Dashboard>
    );
};

export default Today;
