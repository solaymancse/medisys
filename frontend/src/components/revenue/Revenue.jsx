import { Select } from "antd"
import Chart from "../chart/Chart"
import BreakupChart from "../chart/BreakupChart"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Areacharts from "../chart/Areacharts";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { revenueData } from "../../Data";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";

const Revenue = () => {
    const { themeColor,isDarkMode } = useSelector(selectTheme);

    console.log(themeColor)
    return (
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white dark:bg-dark dark:text-white flex flex-col justify-between shadow-sm lg:col-span-2 rounded-md p-6">
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
                    <div>
                        <h1 className="text-lg font-semibold">Revenue Updates</h1>
                        <p className="text-sm">Overview of Profit</p>
                    </div>
                    <div>
                        <Select
                            defaultValue="July 2024"
                            style={{
                                width: 120,
                                border: '1px solid gray',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                            }}
                            options={[
                                {
                                    value: 'May 2024',
                                    label: 'May 2024',
                                },
                                {
                                    value: 'June 2024',
                                    label: 'June 2024',
                                },
                                {
                                    value: 'July 2024',
                                    label: 'July 2024',
                                },


                            ]}
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3">
                    <div className="w-full col-span-2 h-[250px] md:h-[300px] mt-8">
                        <Chart />
                    </div>

                    {/* revenue report card started */}


                    <div className="mt-4 grid lg:grid-cols-1 md:grid-cols-3 md:mt-0 px-4 ml-3 h-full w-full my-2">
                        <div className="flex items-center gap-4">
                            <div className="text-xl rounded-lg bg-[#ECF2FF] h-12 w-12 flex items-center ">
                                <MdOutlineDashboardCustomize className="text-[#8cadfb] mx-2 text-3xl" />
                            </div>
                            <div className="">
                                <p className="text-xl font-bold mb-1">$36,358</p>
                                <p className="text-sm font-medium mb-2">Total Earnings</p>
                            </div>
                        </div>
                        {revenueData?.map((item, index) => (
                            <div key={index} className="flex items-center gap-8 my-6">
                                <div className={`w-[10px] h-[10px] rounded-full ${item?.color}`}></div>
                                <div className="mb-2">

                                    <p className="text-sm font-medium ">{item?.title}</p>
                                    <p className="text-xl font-semibold ">${item?.number}</p>
                                </div>
                            </div>
                        ))}

                        <button className={`${isDarkMode ? "bg-dark border" :themeColor} mb-4 w-full text-white p-2 rounded-lg flex justify-center text-sm`}>
                            View Full Report
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    <Card />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-white dark:bg-dark dark:text-white gap-4 h-full lg:h-[250px]  rounded-md shadow-sm grid p-8 lg:grid-cols-2">
                    <div className="w-full flex flex-col justify-between h-full">
                        <p className="text-lg font-semibold ">Yearly Breakup</p>
                        <div>
                            <p className="text-2xl font-bold mb-2">$36,358</p>
                            <div className="flex items-center gap-2">
                                <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E6FFFA]">
                                    <FaArrowTrendUp color="#4ee3c5" />
                                </div>
                                <p className="text-sm">+9%
                                    <span className="text-[#777] text-sm ml-2">  last year</span></p>
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <div className="flex gap-2 item-center">
                                <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
                                <p className="text-sm">2023</p>
                            </div>
                            <div className="flex  gap-2 item-center">
                                <div className="w-[10px] h-[10px] rounded-full bg-red-400"></div>
                                <p className="text-sm">2024</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-[200px]">
                        <BreakupChart />
                    </div>
                </div>
                <div className="bg-white dark:bg-dark dark:text-white rounded-md shadow-sm grid p-8">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Monthly Earnings</p>
                        <div className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${isDarkMode ? "bg-dark border" : themeColor}`}>
                            <FaDollarSign color="#fff" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold mb-2">$6,820</p>
                        <div className="flex items-center gap-2">
                            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-red-100">
                                <FaArrowTrendUp color="#f44336" />
                            </div>
                            <p className="text-sm">+9%
                                <span className="text-[#777] text-sm ml-2">  last year</span></p>
                        </div>
                    </div>
                    <div>
                        <Areacharts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue
