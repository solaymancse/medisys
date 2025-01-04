import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { message, Modal, Table } from "antd";
import TableHeader from "../../table/tableHeader/TableHeader";
import AddProduct from "./AddProduct";
import moment from 'moment';

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [editData, setEditData] = useState(null); // For edit modal data
    const [search, setSearch] = useState("");
    const [originalData, setOriginalData] = useState([]);
    const [lowStockFilter, setLowStockFilter] = useState(false);
    // Fetch brands
    const fetchProducts = () => {
        axiosInstance
            .get("/product")
            .then((res) => {
                const data = res.data || [];
                setOriginalData(data);
                setFilterData(data);
            })
            .catch(() => message.error("Failed to fetch products"));
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    // Edit brand
    const handleEdit = (record) => {
        setEditData(record);
        setIsEditModalOpen(true);
    };

    const applyFilters = () => {
        let filteredData = originalData;

        // Apply search filter
        if (search) {
            filteredData = filteredData.filter((item) =>
                ["product_name", "brand.name", "category.name"].some((key) =>
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
        if (lowStockFilter) {
            filteredData = filteredData.filter((item) => item.stock < 100); // Adjust threshold as needed
        }

        setFilterData(filteredData);
    };

    useEffect(() => {
        applyFilters();
    }, [search, originalData, lowStockFilter]);


    const refetch = () => fetchProducts();
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Unit Purchase Price',
            dataIndex: 'purchase_price',
            key: 'purchase_price',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Unit Selling Price',
            dataIndex: 'selling_price',
            key: 'selling_price',
            render: (text) => `৳ ${text}`,
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
            render: (text) => <h1>{text.name}</h1>,
        },
        {
            title: 'Current Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (text) => <h1>{text.name}</h1>,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (text) => <h1>{text.name}</h1>,
        },
        {
            title: 'Added By',
            dataIndex: 'user',
            key: 'user',
            render: (text) => <h1 className="text-green-500 bg-green-100 text-center rounded-lg">{text.name}</h1>,
        },
        {
            title: 'Stock Date',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text) => moment(text).format('DD MMM YYYY, h:mm a'),
        },

    ];


    return (
        <div>
            {/* Add Modal */}
            <TableHeader setLowStockFilter={setLowStockFilter} width={800} title={"Product List"} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setSearch={setSearch}>
                <AddProduct refetch={refetch} setIsModalOpen={setIsModalOpen} />
            </TableHeader>

            {/* Edit Modal */}
            <Modal
                title="Edit Product"
                visible={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}

            >
                <AddProduct
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

export default Product;
