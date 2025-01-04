import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { Button, message, Modal, Popconfirm, Space, Table } from "antd";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import TableHeader from "../../table/tableHeader/TableHeader";
import AddCategory from "./AddCategory";

const Categories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [editData, setEditData] = useState(null); // For edit modal data

    // Fetch brands
    const fetchBrands = () => {
        axiosInstance.get('/category')
            .then((res) => setFilterData(res.data || []))
            .catch(() => message.error("Failed to fetch Category"));
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    // Delete brand
    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/category/${id}`);
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
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
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
            <TableHeader title={"Category List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddCategory refetch={refetch} setIsModalOpen={setIsModalOpen} />
            </TableHeader>

            {/* Edit Modal */}
            <Modal
                title="Edit category"
                visible={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}

            >
                <AddCategory
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

export default Categories;
