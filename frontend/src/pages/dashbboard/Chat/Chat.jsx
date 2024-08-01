import ChatMedia from "./ChatMedia/ChatMedia"
import ChatBox from "./chatBox/ChatBox"
import ChatSidebar from "./chatSidebar/ChatSidebar"

const Chat = () => {
    return (
        <div className="grid grid-cols-4 p-8 bg-white dark:bg-dark dark:text-white rounded-md h-screen gap-4">
            <ChatSidebar />
            <div className=" col-span-2">
                <ChatBox />
            </div>
            <ChatMedia />
        </div>
    )
}

export default Chat
