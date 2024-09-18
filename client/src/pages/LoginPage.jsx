import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {setLoginRedirect} from "../redux/auxiliarySlice.js";
import {loginUser, signup} from "../redux/apiCalls/userCalls.js";

function LoginPage() {

    let user = useSelector((state) => state.persistedReducer.user.user);
    const loginRedirect = useSelector((state) => state.persistedReducer.auxiliary.loginRedirect);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(loginRedirect ? loginRedirect : "/", {replace: true});
            dispatch(setLoginRedirect(null));
        }
    }, [user]);


    const [formData, setFormData] = useState({
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "password123"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(dispatch, formData);
    };

    return (
        <div className="min-h-[90dvh] flex justify-center align-middle items-center ">
            <div className="flex flex-col lg:flex-row max-w-[1400px] w-full justify-center items-center align-middle">
                <div
                    className="w-full lg:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Student Login</h5>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="firstName"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                Name</label>
                            <input type="text" name="firstName" id="firstName" value={formData.firstName}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="John" required/>
                        </div>

                        <div>
                            <label htmlFor="lastName"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                Name</label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="Doe" required/>
                        </div>


                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="name@company.com" required/>
                        </div>

                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={formData.password}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="••••••••" required/>
                        </div>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            New User? <NavLink to="/signup"
                                                   className="text-blue-700 hover:underline dark:text-blue-500">Signup</NavLink>
                        </div>

                        <span></span>
                        <span></span>

                        <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
