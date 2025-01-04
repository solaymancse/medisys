import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { Button, message, Modal, Popconfirm, Space, Table } from "antd";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import TableHeader from "../../table/tableHeader/TableHeader";
import AddUnit from "./AddUnit";


const Unit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [editData, setEditData] = useState(null); // For edit modal data

    // Fetch brands
    const fetchBrands = () => {
        axiosInstance.get('/unit')
            .then((res) => setFilterData(res.data || []))
            .catch(() => message.error("Failed to fetch Unit"));
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    // Delete brand
    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/unit/${id}`);
            message.success("Successfully deleted!");
            fetchBrands(); // Refresh the list
        } catch (error) {
            message.error("Failed to delete!");
        }
    };

    // Edit brand
    const handleEdit = (record) => {
        setEditData(record);
        setIsEditModalOpen(true);
    };

    const refetch = () => fetchBrands();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                return `${record.name} (${record.multiple_unit  || ''} ${record.base_unit}) `;
            },
        },
        {
            title: 'Short Name',
            dataIndex: 'short_name',
            key: 'short_name',
        },
        {
            title: 'Allow Decimal',
            dataIndex: 'decimal',
            key: 'decimal',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        icon={<RiEdit2Line />}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete the Item"
                        description="Are you sure to delete this?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button icon={<RiDeleteBin6Line />} danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];


    return (
        <div>
            {/* Add Modal */}
            <TableHeader title={"Unit List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddUnit refetch={refetch} setIsModalOpen={setIsModalOpen} />
            </TableHeader>

            {/* Edit Modal */}
            <Modal
                title="Edit Unit"
                visible={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}

            >
                <AddUnit
                    setIsModalOpen={setIsEditModalOpen}
                    editData={editData}
                    refetch={refetch}
                />
            </Modal>

            <Table
                scroll={{ x: 600 }}
                columns={columns}
                dataSource={filterData}
                pagination={{ pageSize: 5 }}
                rowKey="id"
            />
        </div>
    );
};

export default Unit;
