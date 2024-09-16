import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {setLoginRedirect} from "../redux/auxiliarySlice.js";
import {signup} from "../redux/apiCalls/userCalls.js";

function SignupPage() {

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
        "phone": "123-456-7890",
        "email": "john.doe@example.com",
        "address": "123 Main Street",
        "city": "New York",
        "state": "NY",
        "pincode": "10001",
        "aadharNumber": "123456789012",
        "password": "password123",
        "passwordConfirm": "password123"
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
        await signup(dispatch, formData);
    };

    return (
        <div className="flex justify-center align-middle items-center ">
            <div className="flex flex-col lg:flex-row max-w-[1400px] w-full">
                <div className="hidden lg:block w-1/2 p-4">
                    <img src="https://placehold.co/600x300" alt="Signup" className="w-full my-2 object-contain"/>
                    <img src="https://placehold.co/600x300" alt="Signup" className="w-full my-2 object-contain"/>
                </div>
                <div
                    className="w-full lg:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Student Signup</h5>
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
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                Number</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="123-456-7890" required/>
                        </div>

                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="name@company.com" required/>
                        </div>

                        <div>
                            <label htmlFor="address"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" name="address" id="address" value={formData.address}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="123 Street Name" required/>
                        </div>

                        <div>
                            <label htmlFor="city"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input type="text" name="city" id="city" value={formData.city} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="City" required/>
                        </div>

                        <div>
                            <label htmlFor="state"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                            <input type="text" name="state" id="state" value={formData.state} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="State" required/>
                        </div>

                        <div>
                            <label htmlFor="pincode"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                            <input type="text" name="pincode" id="pincode" value={formData.pincode}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="123456" required/>
                        </div>

                        <div>
                            <label htmlFor="aadharNumber"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar
                                Number</label>
                            <input type="text" name="aadharNumber" id="aadharNumber" value={formData.aadharNumber}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="123456789012" required/>
                        </div>

                        <span></span>

                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={formData.password}
                                   onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="••••••••" required/>
                        </div>

                        <div>
                            <label htmlFor="passwordConfirm"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                Password</label>
                            <input type="password" name="passwordConfirm" id="passwordConfirm"
                                   value={formData.passwordConfirm} onChange={handleChange}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   placeholder="••••••••" required/>
                        </div>


                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already Registered? <NavLink to="/login"
                                               className="text-blue-700 hover:underline dark:text-blue-500">Login</NavLink>
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

export default SignupPage;
