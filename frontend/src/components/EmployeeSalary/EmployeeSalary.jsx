import { TbGridDots } from 'react-icons/tb';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import Areacharts from '../chart/Areacharts';
import { employeeSalaryData, faceData, projectData } from '../../Data';
import { BiMessageAltDetail } from 'react-icons/bi';
import { Progress } from 'antd';

const data = [
    {
        name: 'Jan',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',

        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',

        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',

        pv: 3908,
        amt: 2000,
    },

    {
        name: 'May',

        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Jun',

        pv: 4300,
        amt: 2100,
    },
];


const EmployeeSalary = () => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 '>

            <div className='bg-white dark:bg-dark dark:text-white p-8 md:col-span-2 lg:col-span-1 rounded-md'>
                <div className='mb-6'>
                    <h1 className='text-text font-semibold '>Employee Salary</h1>
                    <p className='text-text text-sm'>Every month</p>
                </div>
                <div className='w-full h-[300px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="pv" fill="#687EFF" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='grid grid-cols-2 items-center gap-6 mt-4'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-[#ECF2FF] dark:bg-dark dark:border dark:text-white rounded-md w-[40px] h-[40px] flex justify-center items-center'>
                            <TbGridDots color='#687EFF' />
                        </div>
                        <div>
                            <p className='text-gray-700 dark:text-white text-sm'>Salary</p>
                            <h1 className='text-text font-semibold dark:text-white  text-base'>$1,090</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-[#ECF2FF] dark:bg-dark dark:border dark:text-white rounded-md w-[40px] h-[40px] flex justify-center items-center'>
                            <TbGridDots color='#687EFF' />
                        </div>
                        <div>
                            <p className='text-gray-700 text-sm dark:text-white '>Profit</p>
                            <h1 className='text-text font-semibold text-base dark:text-white '>$1,090</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grid md:grid-rows-2 gap-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                    {employeeSalaryData?.map((item, idx) => (
                        <div key={idx} className='bg-white dark:bg-dark dark:text-white h-[250px] rounded-md' >
                            <div className='pt-8 px-8'>
                                <p className='text-sm '>{item?.title}</p>
                                <h1 className='text-xl mb-2 font-bold'>{item?.number}</h1>
                            </div>
                            <div className="flex gap-2 px-8">
                                <div className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${item?.bg}`}>
                                    {item?.icon}
                                </div>
                                <p className='text-semibold'>+9%</p>
                            </div>
                            <Areacharts height={100} top={20} />

                        </div>
                    ))}
                </div>

                <div className='bg-white dark:bg-dark dark:text-white p-8 flex justify-between flex-col rounded-lg'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[60px] h-[60px] rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                        </div>
                        <div>
                            <h1 className='text-text text-sm md:text-base font-semibold'>Super awesome, Vue <br /> coming soon!</h1>
                            <p className='text-text text-sm'>22 March, 2022</p>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div className='flex'>
                            {faceData?.map((item, idx) => (
                                <div key={idx} className='w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] rounded-full ring-2 overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={item?.image} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-lg bg-[#ECF2FF] dark:bg-dark dark:text-white dark:border'>
                            <BiMessageAltDetail />
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683141106292-efb635b8b24a?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }} className=' relative w-full rounded-lg overflow-hidden h-[400px] md:h-full flex justify-center '>
                <div className=' absolute top-0 left-0 w-full h-full m-6'>
                    <p className='text-white font-semibold text-base '>Overview Of 2024</p>
                </div>

                <div className='bg-white dark:bg-dark dark:text-white w-[90%] p-6 absolute bottom-4 rounded-lg z-10 h-[200px]'>
                    {projectData?.map((item, idx) => (
                        <div key={idx} className='mb-2'>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-text text-xs '>{item?.title}</h1>
                                    <p className='font-bold text-xl'>${item?.number}</p>
                                </div>
                                <div className='bg-[#ECF2FF] dark:bg-dark dark:text-white dark:border w-[35px] h-[35px] rounded-lg flex justify-center items-center'>
                                    <p className='text-text font-semibold text-xs text-[#687EFF]'>55%</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <Progress
                                    percent={55}
                                    showInfo={false}
                                    percentPosition={{
                                        align: 'center',
                                        type: 'inner',
                                    }}
                                    size={[380, 10]}
                                    strokeColor={item?.color}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default EmployeeSalary
