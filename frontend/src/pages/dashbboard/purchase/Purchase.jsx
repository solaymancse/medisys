import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { message, Modal, Table } from "antd";
import TableHeader from "../../table/tableHeader/TableHeader";
import { AiFillEdit } from "react-icons/ai";
import AddPurchase from "./AddPurchase";
import { FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [editData, setEditData] = useState(null); // For edit modal data
    const [search, setSearch] = useState("");
    const [originalData, setOriginalData] = useState([]);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedPaymentData, setSelectedPaymentData] = useState(null);
    const [loading, setLoading] = useState(false);

    const { handleSubmit, register, reset } = useForm();


    const fetchPurchase = () => {
        axiosInstance
            .get("/purchase")
            .then((res) => {
                const data = res.data || [];
                setOriginalData(data);
                setFilterData(data);
            })
            .catch(() => message.error("Failed to fetch purchase"));
    };

    useEffect(() => {
        fetchPurchase();
    }, []);


    // Edit brand
    const handleEdit = (record) => {
        setEditData(record);
        setIsEditModalOpen(true);
    };

    const handlePayment = (record) => {
        setSelectedPaymentData(record);
        setIsPaymentModalOpen(true);
    };

    const applyFilters = () => {
        let filteredData = originalData;

        // Apply search filter
        if (search) {
            filteredData = filteredData.filter((item) =>
                ["product_name", "supplier.name"].some((key) =>
                    key
                        .split(".")
                        .reduce((obj, k) => (obj ? obj[k] : null), item)
                        ?.toString()
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
            );
        }

        // Apply low stock filter
        // if (lowStockFilter) {
        //     filteredData = filteredData.filter((item) => item.stock < 100); // Adjust threshold as needed
        // }

        setFilterData(filteredData);
    };

    useEffect(() => {
        applyFilters();
    }, [search, originalData,]);

    const refetch = () => fetchPurchase();


    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'product',
            key: 'product',
            render: (item) => item.product_name
        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            key: 'supplier',
            render: (text) => text.name,
        },
        {
            title: 'Purchase Price',
            dataIndex: 'sub_total',
            key: 'sub_total',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
            render: (text) => text.name,
        },
        {
            title: 'Discount',
            dataIndex: 'discount_type',
            key: 'discount_type',
        },
        {
            title: 'Discount Amount',
            dataIndex: 'discount_price',
            key: 'discount_price',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Paid',
            dataIndex: 'paid',
            key: 'paid',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Due',
            dataIndex: 'due',
            key: 'due',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <>
                    <p className={`${text === 'unpaid' ? "bg-red-100 text-red-500" : text === 'partial paid' ? " bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"} text-center rounded-lg font-semibold`}>{text}</p>

                </>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'status',
            key: 'action',
            render: (text, record) => (
                <div className="flex gap-2">
                    {(text === 'unpaid' || text === 'partial paid') && (
                        <button onClick={() => handlePayment(record)} className="bg-blue-400 text-white px-4 py-1 rounded mr-2">Pay</button>
                    )}
                    <div onClick={() => handleEdit(record)} className="bg-green-100 text-white p-2 rounded mr-2"><AiFillEdit size={20} color="green" /></div>
                    <div className="bg-red-100 flex items-center text-white p-2 rounded"><FaTrash size={14} color="red" /></div>
                </div>
            ),
        },

    ];

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            axiosInstance.post(`/supplier-pay/${selectedPaymentData?.id}`, data)
                .then(() => {
                    setIsPaymentModalOpen(false);
                    refetch();
                    reset()
                })
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false)
        }
    }


    return (
        <div>
            {/* Add Modal */}
            <TableHeader setSearch={setSearch} width={800} title={"Purchase List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddPurchase refetch={refetch} setIsModalOpen={setIsModalOpen} />
            </TableHeader>

            {/* Edit Modal */}
            <Modal
                title="Edit Product"
                visible={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}

            >
                <AddPurchase
                    setIsModalOpen={setIsEditModalOpen}
                    editData={editData}
                    refetch={refetch}
                />
            </Modal>

            <Modal
                title="Payment Details"
                visible={isPaymentModalOpen}
                onCancel={() => setIsPaymentModalOpen(false)}
                footer={null}
            >
                {selectedPaymentData && (
                    <form onSubmit={handleSubmit(onSubmit)} className="font-semibold">
                        <p>Total: ৳ {selectedPaymentData.total}</p>
                        <p>Due: ৳ {selectedPaymentData.due}</p>
                        <p>Last Paid: ৳ {selectedPaymentData.paid}</p>
                        <input
                            {...register("amount", { required: "Amount is required" })}
                            type="number"
                            placeholder="Enter amount"
                            className="border rounded p-2 w-full my-4"
                        />
                        <button
                            disabled={loading}
                            type="submit"
                            className={`bg-[#6B66F6] ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} text-white px-10 py-2 rounded-md`}
                        >
                            {loading ? "loading...." : 'Pay'}
                        </button>
                    </form>
                )}
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

export default Purchase;
