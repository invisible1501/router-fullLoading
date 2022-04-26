import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Reset } from "./actions";
import ReactLoading from "react-loading";

function EmployeeDetail(props) {
    const param = useParams();
    const dispatch = useDispatch();
    const idSelected = param.id;
    const isLoading = useSelector(state => state.isLoading);
    const employeeSelected = useSelector(state => state.employees[idSelected - 1]);

    useEffect(() => {
        setTimeout(() => {dispatch(Reset({key: 'isLoading', value: false}))}, 2000);
    }, []);

    /* useEffect(() => {
        console.log(isLoading);
    }, [isLoading]) */

    return(
        !isLoading ? (<div className="wrapperCard">
            <div className="employeeCard">
                <div className="heading">Detail</div>
                <div>ID: {employeeSelected.id}</div>
                <div>Name: {employeeSelected.name}</div>
                <div>Age: {employeeSelected.age}</div>
            </div>
        </div>) : (
            <div className="wrap_loading">
                <ReactLoading className="loading" type="bubbles" color="#0000FF" height={100} width={50} />
            </div>
        )
    )
}

export default EmployeeDetail;