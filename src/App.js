import React,{lazy, Suspense,useState,useContext, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name:"Prashant Shinde",
        email: "shindeprashant@967@gmail.com"
    });

    return (
        <>
        <Provider store={store}>
        <UserContext.Provider 
        value={{
            user:user,
            setUser: setUser
        }}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
        </UserContext.Provider>
        
        </Provider>
        </>
    );
};

    const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout />,
      errorElement:<Error />,
      children:[
        {
            path: "/about",
            element:<About />,
            children : [
                {
                    path:"profile",
                    element: <Profile />
                },
            ],
        },
        {
            path: "/",
            element:<Body />,
        },
        
        {
            path: "/contact",
            element:<Contact />,
        },
        {
            path: "/restaurant/:resId",
            element:<RestaurantMenu />,
        },
        {
            path: "/instamart",
            element:<Suspense fallback={<Shimmer />}>
                      <InstaMart />
                    </Suspense>,
        },
        {
            path:"/cart",
            element:<Cart />,
        }
      
      ]
    },
    
])



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);