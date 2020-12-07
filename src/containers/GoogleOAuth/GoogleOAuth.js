import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
                });
        });
    }, [setAuthState]);
    const onClickHandler = () => {
        if (isSignedIn) {
            auth.signOut();
        } else {
            auth.signIn();
        }
    };
    return <button onClick={onClickHandler}>{props.children}</button>;
};

export default GoogleOAuth;
