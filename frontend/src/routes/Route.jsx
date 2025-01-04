import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashbboard/Dashboard";
import Login from "../pages/login/Login";
import Home from "../pages/dashbboard/home/Home";
import Pricing from "../pages/dashbboard/pricing/Pricing";
import SignUp from "../pages/signup/signup";
import Setting from "../pages/setting/Setting";
import MainLayout from "../pages/form/MainLayout";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import ForgotPassword from "../pages/forgetPassword/ForgetPassword";
import Categories from "../pages/dashbboard/categories";
import Brand from "../components/brands/Brand";
import Unit from "../pages/dashbboard/unit/Unit";
import Supplier from "../pages/dashbboard/supplier/Supplier";
import Product from "../pages/dashbboard/product/Product";
import Purchase from "../pages/dashbboard/purchase/Purchase";
import Customer from "../pages/dashbboard/customer/Customer";
import Sell from "../pages/dashbboard/sale/Sell";



export const route = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: "/dashboard",
        element: <>
            <Dashboard />
        </>,
        children: [
            {
                path: "/dashboard",
                element: <Home />
            },
            {
                path: "/dashboard/categories",
                element: <Categories />

            },
            {
                path: "/dashboard/unit",
                element: <Unit />
            },
            {
                path: "/dashboard/pricing",
                element: <Pricing />
            },
            {
                path: "/dashboard/supplier",
                element: <Supplier />
            },
            {
                path: "/dashboard/products",
                element: <Product />
            },
            {
                path: "/dashboard/purchase",
                element: <Purchase />
            },
            {
                path: "/dashboard/settings",
                element: <Setting />
            },
            {
                path: "/dashboard/form",
                element: <MainLayout />
            },
            {
                path: "/dashboard/brands",
                element: <Brand />
            },
            {
                path: "/dashboard/customer",
                element: <Customer />
            },
            {
                path: "/dashboard/sale",
                element: <Sell />
            }

        ]
    }
])