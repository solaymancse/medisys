import { BiSolidCapsule, BiSolidPurchaseTag } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RiDashboardHorizontalFill />,
    },
    {
        title: "Sell",
        path: "/blogs",
        icon: <TbCurrencyTaka size={22} />,
        isDropdown: true,
        subItems: [
            {
                title: "POS Sale",
                path: "/dashboard/sale",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Products",
        path: "/products",
        icon: <BiSolidCapsule size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Product",
                path: "/dashboard/products",
                icon: <VscDebugBreakpointDataUnverified />,
            },

            {
                title: "Units",
                path: "/dashboard/unit",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Categories",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Brands",
                path: "/dashboard/brands",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Purchase",
        path: "/",
        icon: <BiSolidPurchaseTag size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Purchase List",
                path: "/dashboard/purchase",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Return Purchase List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Supplier",
        path: "/dashboard/supplier",
        icon: <BiSolidPurchaseTag size={20} />,
    },
    {
        title: "Customer",
        path: "/dashboard/customer",
        icon: <BiSolidPurchaseTag size={20} />,
    },
    {
        title: "Stock Adjustment",
        path: "/blogs",
        icon: <BiSolidPurchaseTag size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Post",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Details",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Return",
        path: "/blogs",
        icon: <BiSolidPurchaseTag size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Expense List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Expense Categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },

    {
        title: "Reports",
        path: "/blogs",
        icon: <BiSolidPurchaseTag size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Post",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Details",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "User Management",
        path: "/blogs",
        icon: <BiSolidPurchaseTag size={20} />,
        isDropdown: true,
        subItems: [
            {
                title: "Post",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Details",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Settings",
        path: "/users",
        icon: <FaGear size={20} />,
        cName: "nav-text",
        isDropdown: true,
        subItems: [
            {
                title: "Business Setting",
                icon: <FaUsers />,
            },
            {
                title: "Business Location",
                icon: <FaUsers />,
            },
            {
                title: "Invoice Setting",
                icon: <FaUsers />,
            },
            {
                title: "Barcode Setting",
                icon: <FaUsers />,
            },
        ]
    },

    {
        title: "Logout",
        path: "/",
        icon: <MdOutlineLogout size={20} />,
        cName: "nav-text",
    }
]