import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
    const router = createBrowserRouter([{
        path: "/", element: <Root/>, errorElement: <ErrorPage/>, children: [{
            path: "", element: <LandingPage/>,
        }]
    }]);

    return (<>
        <ToastContainer
            position="top-right"
            autoClose="1000"
            closeOnClick="true"
            transition={Zoom}
            draggable="true"
        />
        <RouterProvider router={router}/>
    </>);
}

export default App;
