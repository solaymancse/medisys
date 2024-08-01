import {array,string} from "prop-types";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";

const HomeBox = ({data,grid}) => {
    const { isDarkMode } = useSelector(selectTheme);
    return (
        <div className={`${grid} items-center w-full gap-4   rounded-lg `}>
            {data.map((item, index) => (
                <div className={`grid grid-cols-3 shadow-sm items-center w-full gap-14 h-[100px] ${isDarkMode ? "bg-dark" : item?.bg} rounded-lg p-4`} key={index}>

                    <div className="bg-white dark:bg-dark shadow-sm w-[50px] h-[50px] rounded-full flex items-center justify-center">
                        {item?.icon}
                    </div>

                    <div className="flex flex-col col-span-2  w-full ">
                        <p className="text-[#777] dark:text-white font-semibold">{item?.title}</p>
                        <p className=" text-sm md:text-xl font-semibold">{item?.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

HomeBox.propTypes = {
    data: array,
    grid: string,
}
export default HomeBox
