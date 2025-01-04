import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { Button, message, Modal, Popconfirm, Space, Table } from "antd";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import TableHeader from "../../table/tableHeader/TableHeader";
import AddSupplier from "./AddSupplier";


const Supplier = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [editData, setEditData] = useState(null); // For edit modal data

    // Fetch brands
    const fetchSupplier = () => {
        axiosInstance.get('/supplier')
            .then((res) =>setFilterData(res.data || []))
            .catch(() => message.error("Failed to fetch supplier"));
    };

    useEffect(() => {
        fetchSupplier();
    }, []);

    // Delete brand
    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/supplier/${id}`);
            message.success("Successfully deleted!");
            fetchSupplier(); // Refresh the list
        } catch (error) {
            message.error("Failed to delete!");
        }
    };

    // Edit brand
    const handleEdit = (record) => {
        setEditData(record);
        setIsEditModalOpen(true);
    };

    const refetch = () => fetchSupplier();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Alternate Phone',
            dataIndex: 'alternate_number',
            key: 'alternate_number',
        },
        {
            title: 'Addrees',
            dataIndex: 'address',
            key: 'address',
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
            <TableHeader title={"Supplier List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddSupplier refetch={refetch} setIsModalOpen={setIsModalOpen} />
            </TableHeader>

            {/* Edit Modal */}
            <Modal
                title="Edit Supplier"
                visible={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}

            >
                <AddSupplier
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

export default Supplier;
