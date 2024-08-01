import {  Space, Table, Tag} from "antd";
import { permisionData } from "../../../Data";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { useState } from "react";
import Modals from "../../resusable/modals.jsx/Modals";
import PermissionData from "../../permissionData/PermissionData";
const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};


const columns = (handleOpenModal) => [
    {
        title: 'Role Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Total Permit',
        key: 'permit',
        dataIndex: 'permit',
        render: (permit) => {
            const color = getRandomColor();
            return (
                <Tag color={color} key={permit}>
                    {permit}
                </Tag>
            );
        },
    },
    {
        title: 'Assign To',
        key: 'assignTo',
        dataIndex: 'assignTo',
        render: (assignTo) => (
            <div className="flex gap-2">
                {assignTo.slice(0, 3).map((item, index) => (
                    <div key={index} className={`w-8 h-8 ${index !== 0 ? "ml-[-8px]" : ""} ring-2 rounded-full overflow-hidden`}>
                        <img className="w-full h-full object-cover" src={item.image} alt="assignTo" />
                    </div>
                ))}
                {assignTo.length > 3 && (
                    <div className="w-8 h-8 ml-[-8px] ring-2 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden">
                        <FaPlus className="text-gray-600" />
                    </div>
                )}
            </div>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => {
            return (

                <Space size="middle">

                    <div onClick={handleOpenModal} className="bg-green-100 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
                        <a><MdOutlineEditNote size={20} className='text-green-500' /></a>
                    </div>

                </Space>
            )

        },
    },
];

const RoleCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true)
    };
    return (
        <div className="">
            <Table scroll={{ x: 600 }} dataSource={permisionData} columns={columns(handleOpenModal)} />

            <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <PermissionData />
            </Modals>
        </div>
    );
};

export default RoleCard;
