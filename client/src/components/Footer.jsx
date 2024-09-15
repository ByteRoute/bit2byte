import React from "react";
import {FaGraduationCap} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black w-[100vw] text-white outline-none z-10 shadow-sm border-t-2 border-dotted">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 pb-2 ">
                <div className="md:flex md:justify-between ">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <FaGraduationCap size={30} className="mr-2"/>
                            <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-black">
                                <span className="hover:text-yellow-300">ByteRoute</span>
                            </span>
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8 border-t-2 border-dotted"/>
            </div>
        </footer>
    );
};

export default Footer;
