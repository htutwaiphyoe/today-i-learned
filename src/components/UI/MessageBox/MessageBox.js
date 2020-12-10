import React from "react";
import classes from "./MessageBox.module.css";
const MessageBox = (props) => {
    let message = null;
    if (props.message === "Network Error") {
        message = (
            <React.Fragment>
                <p>No Internet connection⚠</p>
                <p>Please reconnect and try again🙏</p>
            </React.Fragment>
        );
    } else {
        message = (
            <React.Fragment>
                <p>Something went wrong!💔</p>
                <p>Please check your internet and reload again🙏</p>
            </React.Fragment>
        );
    }
    return <section className={classes.MessageBox}>{message}</section>;
};

export default MessageBox;
