import React from "react";
import { useSelector } from "react-redux";
import classes from "./Dashboard.module.css";
const Dashboard = (props) => {
    const auth = useSelector((state) => state.auth);
    return (
        <section className={classes.Dashboard}>
            <aside className={classes.Panel}>
                <div className={classes.Profile}>
                    <figure className={classes.ProfileImage}>
                        <img src={auth.user.imageUrl} alt="User Profile" />
                    </figure>
                    <div className={classes.ProfileText}>
                        <h2>{auth.user.name}</h2>
                        <span>{auth.user.email}</span>
                    </div>
                </div>
                <div className={classes.ListBox}>
                    <div className={classes.List}>
                        <div className={`${classes.ListItem} ${classes.active}`}>
                            <span>Dashboard</span>
                            <ion-icon name="home"></ion-icon>
                        </div>
                        <div className={classes.ListItem}>
                            <span>Forms stuff</span>
                            <ion-icon name="add-circle"></ion-icon>
                        </div>
                        <div className={classes.ListItem}>
                            <span>Analysis</span>
                            <ion-icon name="bar-chart"></ion-icon>
                        </div>
                    </div>
                    <footer>
                        Developed by{" "}
                        <a
                            href="https://htutwaiphyoe.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer    "
                        >
                            Htut Wai Phyoe
                        </a>
                    </footer>
                </div>
            </aside>
            <article className={classes.Content}>
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
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>${4000}</td>
                            </tr>
                            <tr>
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
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>${4000}</td>
                            </tr>
                            <tr>
                                <td className={classes.No}>1.</td>
                                <td>Salary</td>
                                <td>$4000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    );
};
export default Dashboard;
