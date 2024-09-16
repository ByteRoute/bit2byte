import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { useSelector } from "react-redux";
import FontChange from "./components/FontChange.jsx";
import ExploreScholarships from "./pages/ExploreScholarships.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import React from "react";

function App() {
  const fontClass = useSelector((state) => state.font.fontSizeClass);
  const count = useSelector((state) => state.counter.value);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },{
          path: "explore",
          element: <ExploreScholarships/>
        },{
          path: "signup",
          element: <SignupPage/>
        },{
          path: "login",
          element: <LoginPage/>
        }
      ],
    },
  ]);
  //   console.log(count);

  return (
    <div>
      {/* xl is the default font size */}
      {/*following div is just for class font purpose, everything must be inside this div,
       if you want to reflect the font changes in your component*/}
      {/* {count} */}

      <div className="absolute top-0 translate-y-1/4 right-0 z-20 select-none">
        <FontChange />
      </div>
      <div className={fontClass}>
        <ToastContainer
          position="top-right"
          autoClose="1000"
          closeOnClick="true"
          transition={Zoom}
          draggable="true"
        />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
