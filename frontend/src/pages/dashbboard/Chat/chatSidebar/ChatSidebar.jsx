import { CiSearch } from "react-icons/ci"
import ChatList from "../ChatList/ChatList"


const ChatSidebar = () => {

    return (
        <div>
            <div className=" shadow-sm px-3 flex items-center gap-4 rounded-md dark:border bg-[#F3F6FD] dark:bg-dark dark:text-white  py-2">
                <CiSearch size={30} color="#777" />
                <input type="text" placeholder="Search" className="w-full bg-[#F3F6FD] dark:bg-dark dark:text-white  outline-none " />
            </div>
            <ChatList/>
           
        </div>
    )
}

export default ChatSidebar
