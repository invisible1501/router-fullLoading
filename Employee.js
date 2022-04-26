import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Reset } from "./actions";
import ReactLoading from "react-loading";


function Employee() {
    const arrEmployees = useSelector(state => state.employees);
    const isLoading = useSelector(state => state.isLoading);
    const [employees, setEmployees] = useState(arrEmployees);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setEmployees(arrEmployees);
    }, [arrEmployees]);

    const handleViewDetail = (id) => {
        dispatch(Reset({key: 'isLoading', value: true}));
        navigate(`/employees/${id}`);
    };

    useEffect(() => {
        dispatch(Reset({key: 'acceptLogin', value: false}));
    }, [])

    return(
        <div className="wrapperTable">
            {!isLoading ? (<div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map(employeesItem => {
                            return (
                                <tr key={employeesItem.id}>
                                    <td>{employeesItem.id}</td>
                                    <td>{employeesItem.name}</td>
                                    <td>{employeesItem.age}</td>
                                    <td>
                                        <button onClick={evg => handleViewDetail(employeesItem.id)}>Details</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>) : (
                <div className="wrap_loading">
                    <ReactLoading className="loading" type="bubbles" color="#0000FF" height={100} width={50} />
                </div>
            )}
        </div> 
    )
}

export default Employee;