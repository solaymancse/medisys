import { Dropdown, Space } from 'antd';
import { profileDataMenu } from '../../../Data';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const menu = ({handleLogout,email}) => (
    <div className="p-4 bg-white">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                    className="w-full h-full"
                    src="https://i.pravatar.cc/300"
                    alt="Profile"
                />
            </div>
            <div>
                <p className="text-sm font-semibold">Dilshad Jahin</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div>
        <div className='mt-6'>
            {profileDataMenu.map((item, index) => (
                <div key={index} className=' hover:bg-slate-100 rounded-lg cursor-pointer transition-all duration-300 ease-out  p-2 flex items-center gap-3 mb-2'>
                    <div className='bg-[#ecf2ff] w-[40px] h-[40px] rounded-lg flex items-center justify-center'>
                        {item?.icon}
                    </div>
                    <div>
                        <p className='text-text font-semibold'>{item?.title}</p>
                        <p className='text-[#777] text-xs '>{item?.subtitle}</p>
                    </div>
                </div>
            ))}

        </div>
        <button
            className="w-full mt-6 border border-red-400 hover:bg-red-400 text-red-400 hover:text-white transition-all duration-300 ease-out py-2 rounded-xl"
            onClick={handleLogout}
        >
            Logout
        </button>
    </div>
);

const HoverProfile = () => {
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            // Clear user data from local storage
            localStorage.removeItem('authUser');
            navigate('/');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };


    return (
        <Space direction="vertical">
            <Space wrap>


                <Dropdown
                    // overlay={menu({handleLogout,email})}
                    placement="bottomRight"
                    arrow={{
                        pointAtCenter: true,
                    }}
                >
                    <div className="flex items-center gap-3 cursor-pointer">
                        <p className="text-xs font-semibold hidden md:flex">Dilshad Jahin</p>
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img
                                className="w-full h-full"
                                src="https://i.pravatar.cc/300"
                                alt="Profile"
                            />
                        </div>
                    </div>
                </Dropdown>
            </Space>

        </Space>
    )
};
export default HoverProfile;