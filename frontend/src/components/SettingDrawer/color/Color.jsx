import { useDispatch } from "react-redux";
import { setThemeColor } from "../../../features/theme/themeSlice";

const Color = ({ onClose }) => {

    const dispatch = useDispatch();

    const colorData = [
        { color: "bg-red-300" },
        { color: "bg-blue-300" },
        { color: "bg-yellow-300" },
        { color: "bg-[#687EFF]" },
        { color: "bg-[#D80032]" },
        { color: "bg-[#6420AA]" },
        { color: "bg-[#F7418F]" },
        { color: "bg-[#FF7D29]" },
        { color: "bg-[#912BBC]" },
        { color: "bg-[#874CCC]" },
        { color: "bg-[#06D001]" },
        { color: "bg-[#973131]" },
    ];

    // Function to handle saving color to localStorage
    const handleColorClick = (color) => {
        dispatch(setThemeColor(color));
        localStorage.setItem('selectedColor',color)
        onClose(); 
    };

    return (
        <div>
            <p className="text-sm font-medium my-4">Color Changes</p>
            <div className="grid grid-cols-6 gap-2 my-6">
                {colorData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`w-[30px] h-[30px] rounded-full ${item.color}`}
                        onClick={() => handleColorClick(item.color)}
                        style={{ cursor: 'pointer' }}
                        title={`Click to select ${item.color}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Color;
