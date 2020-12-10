import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { clientId } from "../../utils/utils";
import * as actionCreators from "../../store/actions";
let auth = null;
const GoogleOAuth = (props) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const dispatch = useDispatch();
    const setAuthState = useCallback(
        (isSignedIn) => {
            if (isSignedIn) {
                dispatch(
                    actionCreators.signIn({
                        id: auth.currentUser.get().getId(),
                        name: auth.currentUser.get().getBasicProfile().getName(),
                        email: auth.currentUser.get().getBasicProfile().getEmail(),
                        imageUrl: auth.currentUser.get().getBasicProfile().getImageUrl(),
                    })
                );
            } else {
                dispatch(actionCreators.signOut());
                dispatch(actionCreators.clearData());
            }
        },
        [dispatch]
    );
    useEffect(() => {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId,
                    scope: "email",
                })
                .then(() => {
                    auth = window.gapi.auth2.getAuthInstance();
                    setAuthState(auth.isSignedIn.get());
                    auth.isSignedIn.listen(() => {
                        setAuthState(auth.isSignedIn.get());
                    });
                })
                .catch((err) => dispatch(actionCreators.error(err)));
        });
    }, [setAuthState, dispatch]);
    const onClickHandler = () => {
        try {
            if (isSignedIn) {
                auth.signOut();
            } else {
                auth.signIn();
                props.history.replace("/");
            }
        } catch (err) {
            dispatch(actionCreators.error(err));
        }
    };
    return <button onClick={onClickHandler}>{props.children}</button>;
};

export default withRouter(GoogleOAuth);
