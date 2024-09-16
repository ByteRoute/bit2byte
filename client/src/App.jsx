import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FontChange from "./components/FontChange.jsx";
import ExploreScholarships, {getAllScholarships} from "./pages/ExploreScholarships.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ScholarshipDetails, {getOrderDetails} from "./components/ScholarshipDetails.jsx";
import DiscussionForum from "./components/DiscussionForumComponents/DiscussionForum.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "",
                    element: <LandingPage/>,
                }, {
                    path: "explore",
                    element: <ExploreScholarships/>,
                    loader: getAllScholarships
                }, {
                    path: "signup",
                    element: <SignupPage/>
                }, {
                    path: "login",
                    element: <LoginPage/>
                },
                {
                    path: "scholarshipDetails/:id",
                    element: <ScholarshipDetails/>,
                    loader: getOrderDetails
                },
                {
                    path: "discussionForum",
                    element: <DiscussionForum/>,
                },
            ],
        },
    ]);

    return (
        <div>
            <div className="absolute top-0 translate-y-1/4 right-0 z-20 select-none">
                <FontChange/>
            </div>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose="1000"
                    closeOnClick="true"
                    transition={Zoom}
                    draggable="true"
                />
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
