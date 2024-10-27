import { BiSolidPurchaseTag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { HiOutlineCurrencyDollar, HiOutlineMail } from "react-icons/hi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLogout, MdProductionQuantityLimits, MdWidgets } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TiContacts, TiTicket } from "react-icons/ti";
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
        icon: <BiSolidPurchaseTag />,
        isDropdown: true,
        subItems: [
            {
                title: "Sales List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "List POS",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "POS Sale",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Draft List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Quotation List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Sales Return List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Shipment",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Discount",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Import Sales",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Products",
        path: "/products",
        icon: <MdProductionQuantityLimits />,
        isDropdown: true,
        subItems: [
            {
                title: "Product List",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Print Labels",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Variations",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Import Opening Stock",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Selling Price Group",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Units",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Categories",
                path: "/dashboard/categories",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Brands",
                path: "/brands",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Warranties",
                path: "/brands",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Purchase",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
        isDropdown: true,
        subItems: [
            {
                title: "Purchase List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Return Purchase List",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "Stock Transfer",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
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
        title: "Stock Adjustment",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
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
        title: "Expense",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
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
        icon: <BiSolidPurchaseTag />,
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
        title: "Contacts",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
        isDropdown: true,
        subItems: [
            {
                title: "Suppliers",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Customers",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Customers Groups",
                icon: <VscDebugBreakpointDataUnverified />,
            },
            {
                title: "Import Contact",
                icon: <VscDebugBreakpointDataUnverified />,
            },
        ]
    },
    {
        title: "User Management",
        path: "/blogs",
        icon: <BiSolidPurchaseTag />,
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
        icon: <FaUsers />,
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
        icon: <MdOutlineLogout />,
        cName: "nav-text",
    }
]