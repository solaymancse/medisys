import { useSelector } from "react-redux";
import { cardData } from "../../Data"
import { selectTheme } from "../../features/theme/themeSlice";

const Card = () => {
    const { isDarkMode } = useSelector(selectTheme);

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {cardData?.map((item, idx) => (
                <div key={idx} className={`${isDarkMode ? "bg-dark border" :item?.bg} w-full h-[100px] flex justify-around items-center rounded-2xl`}>
                    <div>
                        <p className="text-xl font-semibold text-[#fff]">{item?.number}</p>
                        <p className="text-xs font-medium text-[#fff]">{item?.title}</p>
                    </div>
                    <div>
                        {item?.icon}
                    </div>

                </div>
            ))}

        </div>
    )
}

export default Card
