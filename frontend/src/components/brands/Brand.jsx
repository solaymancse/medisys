import { useEffect, useState } from "react";
import AddBrand from "./AddBrand";
import TableHeader from "../../pages/table/tableHeader/TableHeader";
import { message, Popconfirm, Space, Table, Button, Modal } from "antd";
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import axiosInstance from "../../utils/axiosConfig";

const Brand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState(null); // For edit modal data

  // Fetch brands
  const fetchBrands = () => {
    axiosInstance.get('/brand')
      .then((res) => setFilterData(res.data || []))
      .catch(() => message.error("Failed to fetch brands"));
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Delete brand
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/brand/${id}`);
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
      <TableHeader title={"Brands List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <AddBrand refetch={refetch} setIsModalOpen={setIsModalOpen} />
      </TableHeader>

      {/* Edit Modal */}
      <Modal
        title="Edit Brand"
        visible={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
       
      >
        <AddBrand
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

export default Brand;
