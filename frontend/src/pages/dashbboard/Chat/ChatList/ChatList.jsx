import { RiPushpinFill } from "react-icons/ri"

const chatData = [
    {
        id: 1,
        name: "John",
        img: "https://res.cloudinary.com/dqyusvzi9/image/upload/v1705470223/samples/smile.jpg",
        time: "4m",
        message: "Hello John, how are you?",
        unreadCount: 4
    },
    {
        id: 2,
        name: "Jane",
        img: "https://res.cloudinary.com/dqyusvzi9/image/upload/v1705470229/samples/upscale-face-1.jpg",
        time: "10m",
        message: "Are you coming to the party?",
        unreadCount: 2
    },
    {
        id: 3,
        name: "Mike",
        img: "https://res.cloudinary.com/dqyusvzi9/image/upload/v1707037880/qkaq3pbo3d55fqpixjcq.jpg",
        time: "1h",
        message: "Let's catch up tomorrow.",
        unreadCount: 1
    },
    {
        id: 4,
        name: "Saika",
        img: "https://res.cloudinary.com/dqyusvzi9/image/upload/v1707723132/coaching1_yvdfmz.jpg",
        time: "2h",
        message: "see you tomorrow.",
        unreadCount: 1
    }
];

const ChatList = () => {
    return (
        <>
            {chatData.map(chat => (

                <div key={chat.id} className="mt-8 h-[60px]  flex gap-4">

                    <div className="w-[60px] rounded-md">
                        <div className="w-[60px]  h-[60px] rounded-md overflow-hidden">
                            <img src={chat.img} className="w-full h-full  object-cover" alt="" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col h-full py-1 justify-between">
                        <div className="flex w-full items-center justify-between">
                            <p className="text-base font-semibold">{chat.name}</p>
                            <p className="text-xs text-[#777] font-medium">{chat.time}</p>
                        </div>
                        <div className="flex w-full  items-center justify-between">
                            <p className="text-blue-400 text-sm font-medium">{chat.message}</p>
                            <p className="text-xs flex justify-center items-center w-[20px] h-[20px] rounded-full text-[#fff] font-medium bg-red-400">{chat.unreadCount}</p>
                            <RiPushpinFill size={24} color="#7678ED" />
                        </div>
                    </div>
                </div>

            ))}

        </>
    )
}

export default ChatList
