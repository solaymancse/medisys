import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaDollarSign, FaRegFolderOpen, FaUserAlt } from "react-icons/fa";
import { FaArrowTrendUp, FaRegFolderClosed } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { RiPassPendingFill } from "react-icons/ri";
import { SiEventstore, SiVirustotal } from "react-icons/si";
import { TbReport } from "react-icons/tb";

export const countries = [
  {
    name: "United States",
    dialCode: "+1",
    isoCode: "US",
    lan: "en",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
  },

  {
    name: "Bangladesh",
    dialCode: "+880",
    isoCode: "BD",
    lan: "bn",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
  },
  {
    name: "Saudi Arabia",
    dialCode: "+966",
    isoCode: "SA",
    lan: "ar",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
  },
  {
    name: "India",
    dialCode: "+91",
    isoCode: "IN",
    lan: "hi",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
  },
];


export const HomeBoxdata = [
  {
    title: "Employee",
    number: "78",
    icon: <FaUserAlt className="text-orange-300" />,
    bg: "bg-[#ECF2FF]"
  },
  {
    title: "Clients",
    number: "34",
    icon: <BsClipboard2CheckFill color="#B0EBB4" />,
    bg: "bg-[#FEF5E5]"
  },
  {
    title: "Projects",
    number: "3445",
    icon: <GoProjectSymlink className="text-[#5D87FF]" />,
    bg: "bg-[#E8F7FF]"
  },
  {
    title: "Events",
    number: "78",
    icon: <SiEventstore className="text-orange-300 " />,
    bg: "bg-[#FDEDE8]"
  },
  {
    title: "Payroll",
    number: "$78,989",
    icon: <FaDollarSign color="#B0EBB4" />,
    bg: "bg-[#E6FFFA]"
  },
  {
    title: "Reports",
    number: "989",
    icon: <TbReport className="text-[#5D87FF]" />,
    bg: "bg-[#EBF3FE]"
  },
]
export const ticketBoxdata = [
  {
    title: "Total Tickets",
    number: "8",
    icon: <SiVirustotal className="text-orange-300" />,
    bg: "bg-[#ECF2FF]"
  },
  {
    title: "Pending Tickets",
    number: "4",
    icon: <RiPassPendingFill color="#B0EBB4" />,
    bg: "bg-[#FEF5E5]"
  },
  {
    title: "Open Tickets",
    number: "5",
    icon: <FaRegFolderOpen className="text-[#5D87FF]" />,
    bg: "bg-[#E8F7FF]"
  },
  {
    title: "Closed Tickets",
    number: "7",
    icon: <FaRegFolderClosed className="text-orange-300 " />,
    bg: "bg-[#FDEDE8]"
  },

]

export const ticketData = [
  {
    key: '1',
    id: '1',
    ticket: {
      subject: "Sed ut perspiciatis unde omnis iste",
      description: "ab illo inventore veritatis et quasi arc",
    },
    address: 'New York No. 1 Lake Park',
    status: "Close",
    assignTo: {
      name: 'Dilshad Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
    }
  },
  {
    key: '2',
    id: '2',
    ticket: {
      subject: "Sed ut perspiciatis unde omnis iste",
      description: "ab illo inventore veritatis et quasi arc",
    },
    address: 'London No. 1 Lake Park',
    status: 'Pending',
    assignTo: {
      name: 'Daisy Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg",
    }
  },
  {
    key: '3',
    id: '3',
    ticket: {
      subject: "Sed ut perspiciatis unde omnis iste",
      description: "ab illo inventore veritatis et quasi arc",
    },
    address: 'Sydney No. 1 Lake Park',
    status: 'Open',
    assignTo: {
      name: 'Mehzin Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
    }
  },
];

export const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export const profileDataMenu = [
  {
    icon: <FaUserAlt />,
    title: "My Profile",
    subtitle: "Account Setting"
  },
  {
    icon: <FaUserAlt />,
    title: "My Inbox",
    subtitle: "Recent Messages"
  },
  {
    icon: <FaUserAlt />,
    title: "My Tasks",
    subtitle: "To-do and Daily Tasks"
  }
]

export const employeeSalaryData = [
  {
    title: "Customers",
    number: "55,000",
    icon: <FaArrowTrendUp color="#FAA9CF" />,
    bg: "bg-red-100"
  },
  {
    title: "Projects",
    number: "58,809",
    icon: <FaArrowTrendUp color="#4ee3c5" />,
    bg: "bg-[#E6FFFA]"
  },
]

export const faceData = [
  {
    image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
  },
  {
    image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg",
  },
  {
    image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
  },
  {
    image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg",
  },
  {
    image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
  }
]

export const projectData = [
  {
    title: "Employee Salary",
    number: "55,000",
    color: "#687EFF"
  },
  {
    title: "Project Expense",
    number: "58,809",
    color: "#23AFDB"
  }
]

export const revenueData = [
  {
    title: "Earnings this month",
    number: "55,000",
    color: "bg-[#687EFF]"
  },
  {
    title: "Expense this month",
    number: "58,809",
    color: "bg-[#F87171]"
  }
]

export const cardData = [
  {
    title: "Top Sales",
    number: "55,000",
    bg: "bg-[#8576FF]",
    icon: <FaArrowTrendUp color="#fff" size={30} />
  },
  {
    title: "Best Seller",
    number: "58,809",
    bg: "bg-[#41C9E2]",
    icon: <FaArrowTrendUp color="#fff" size={30} />
  },
  {
    title: "Most Commented",
    number: "55,000",
    bg: "bg-[#FF8E8F]",
    icon: <FaArrowTrendUp color="#fff" size={30} />
  },
  {
    title: "Top Projects",
    number: "58,809",
    bg: "bg-[#1F2544]",
    icon: <FaArrowTrendUp color="#fff" size={30} />
  }
]

export const permisionData = [
  {
    key: '1',
    name: 'Super Admin',
    permit: 3,
    assignTo: [
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg" },
    ],
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    permit: 42,
    assignTo: [
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/tony-luginsland-bbOOTiq-EPA-unsplash_eazqpd.jpg" },
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg" },
    ],
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    permit: 32,
    assignTo: [
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/tony-luginsland-bbOOTiq-EPA-unsplash_eazqpd.jpg" },
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg" },
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg" },
      { image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg" }
    ],
    tags: ['cool', 'teacher'],
  },
];

export const permission = [
  {
    title: "Settings",
    subtitle: ['Profile', 'Password', 'Notifications', 'Role & Permission'],
  },
  {
    title: "Profile",
    subtitle: ['My Profile', 'My Password', 'Inbox', 'Role & Permission'],
  },
  {
    title: "User",
    subtitle: ['Tickets', 'Pending Tickets', 'Notifications', 'Role & Permission'],
  },
  {
    title: "Profile",
    subtitle: ['My Profile', 'My Password', 'Inbox', 'Role & Permission'],
  }
]
