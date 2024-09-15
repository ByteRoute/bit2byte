import React from "react";
import {useNavigate, useRouteError} from "react-router-dom";
import {useDispatch} from "react-redux";

const ErrorPage = () => {
    const error = useRouteError();
    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    return (
        <div>This is error page</div>
    );
};

export default ErrorPage;
