import React, { Fragment } from "react";
import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { logoutUser } from "../redux/apiCalls/userCalls.js";
import { FaGraduationCap } from "react-icons/fa";
import { PiStudentLight } from "react-icons/pi";
import FontChange from "./FontChange.jsx";

const UserNavbar = () => {
    const user = useSelector((state) => state.persistedReducer.user.user);
    // const user = false; // just temporarily for seeing how the user screen looks;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // just to debug
    const count = useSelector((state) => state.counter.value);

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    async function handleLogout() {
        await logoutUser(dispatch);
    }

    const underlineIfActive = ({ isActive }) =>
        `${
            isActive
                ? "text-yellow-200 box-border transition-all border-yellow-300 border-b-2"
                : ""
        }`;

    const links = (
        <>
            <NavLink to="" className={underlineIfActive}>
                Home
            </NavLink>
            {!user && (
                <NavLink to="/signup" className={underlineIfActive}>
                    Signup
                </NavLink>
            )}
            {!user && (
                <NavLink to="/login" className={underlineIfActive}>
                    Login
                </NavLink>
            )}
            <NavLink to="/explore" className={underlineIfActive}>
                Explore
            </NavLink>
        </>
    );

    return (
        <div className="sticky top-0 z-10 font-montserrat w-full">
            <Disclosure
                as="nav"
                className="bg-blue-main p-0 text-white border-none outline-none z-20 shadow-sm relative"
            >
                {({ open }) => (
                    <div className="relative">
                        <div className="mx-auto max-w-7xl px-2 w-full">
                            <div className="navbar min-h-6 pt-0">
                                <div className="navbar-start">
                                    <div className="navbar-start lg:hidden">
                                        <div className="dropdown">
                                            <div
                                                tabIndex={0}
                                                role="button"
                                                className="btn btn-ghost btn-circle"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h16M4 18h7"
                                                    />
                                                </svg>
                                            </div>
                                            <div
                                                tabIndex={0}
                                                className="menu menu-sm p-1 border-1 shadow-sm border-white bg-slate-900 rounded-md m-1 dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-52"
                                            >
                                                {links}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row-reverse lg:flex-row flex-1">
                                        <NavLink
                                            to="/"
                                            className="flex relative items-center translate-x-full lg:translate-x-0"
                                        >
                                            <FaGraduationCap size={30} className="mr-2 opacity-100" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <div className="flex flex-row-reverse flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">{links}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-end">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {user && (
                                            <Menu as="div" className="relative ml-3">
                                                <Menu.Button className="relative flex p-1 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <PiStudentLight size={24} className="text-black" />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/profilepage/"
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    )}
                                                                >
                                                                    Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item>

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    onClick={handleLogout}
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                                                    )}
                                                                >
                                                                    Logout
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <NavLink to="/">Home</NavLink>
                                {!user && <NavLink to="/signup">Signup</NavLink>}
                                {!user && <NavLink to="/login">Login</NavLink>}
                            </div>
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
            <div className="h-1 w-full relative">
                {navigation.state === "loading" ? (
                    <progress
                        className="progress progress-primary absolute h-[5px] border-b-2 border-black bg-stone-700"
                        style={{ "--progress-color": "#FACA15" }}
                    ></progress>
                ) : (
                    ""
                )}
            </div>

        </div>
    );
};

export default UserNavbar;
