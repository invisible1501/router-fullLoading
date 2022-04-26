import React from "react";
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { AdminLogin } from "./actions";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function EmployeeLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let acceptLogin = useSelector(state => state.acceptLogin)

    const formik = useFormik({
        initialValues: {
            email: '',
            pwd: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Required!'),
            pwd: Yup.string().required('Required!').min(7, 'Password is at least 7 number/letter')
        }),
        onSubmit: ({email, pwd}) => {
            dispatch(AdminLogin({email, pwd}))
        }
    })

    useEffect(() => {
        if(acceptLogin === true) navigate('/employees');
    }, [acceptLogin])

    return (
        <div className="wrapperForm">
            <form onSubmit={formik.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Email</label></td>
                            <td>
                                <input 
                                    name='email'
                                    type='email'
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="error">
                            <td colSpan='2'>
                                {formik.touched.email && formik.errors.email ? (
                                    <p>{formik.errors.email}</p>
                                ) : (
                                    null
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td>
                                <input 
                                    name='pwd'
                                    type='password'
                                    value={formik.values.pwd}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="error">
                            <td colSpan='2'>
                                {formik.touched.pwd && formik.errors.pwd ? (
                                    <p>{formik.errors.pwd}</p>
                                ) : (
                                    null
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' className="button">
                                <input 
                                    value='Submit'
                                    type='submit'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default EmployeeLogin;