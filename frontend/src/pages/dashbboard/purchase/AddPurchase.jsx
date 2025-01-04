import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { Input, Select } from "antd";



const AddPurchase = ({ editData, setIsModalOpen, refetch }) => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [supplier, setSupplier] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [unitData, setUnitData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedUnit, setSelectedUnit] = useState();
    const [selectedSupplier, setSelectedSupplier] = useState();
    const [qty, setQty] = useState();
    const [purchasePrice, setPurchasePrice] = useState();
    const [discount, setDiscount] = useState({ type: "fixed", value: 0 });
    const [total, setTotal] = useState(0);
    const [due, setDue] = useState(0);
    const [paid, setPaid] = useState(0);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (editData) {
            setValue('name', editData.name);
            setValue('code', editData.code);
            setValue('description', editData.description);
        } else {
            reset();
        }
    }, [editData, reset, setValue])



    useEffect(() => {
        axiosInstance.get('/supplier')
            .then((res) => setSupplier(res.data))
            .catch(() => toast.error("Failed to fetch Product"));

    }, [])
    useEffect(() => {
        axiosInstance.get('/product')
            .then((res) => setProduct(res.data))
            .catch(() => toast.error("Failed to fetch Product"));

    }, [])


    useEffect(() => {
        axiosInstance.get('/brand')
            .then((res) => setBrandData(res.data))
            .catch(() => toast.error("Failed to fetch Brand"));

    }, [])

    useEffect(() => {
        axiosInstance.get('/category')
            .then((res) => setCategories(res.data))
            .catch(() => toast.error("Failed to fetch category"));

    }, [])

    useEffect(() => {
        axiosInstance.get('/unit')
            .then((res) => setUnitData(res.data))
            .catch(() => toast.error("Failed to fetch Unit"));

    }, [])

    const onSubmit = async (data) => {
        const purchaseData = {
            "supplier_id": selectedSupplier.id,
            "product_id": selectedProduct.id,
            "unit_id": selectedUnit.id,
            "quantity": qty,
            "discount_type": discount.type,
            "discount_price": discount.value,
            "sub_total": purchasePrice,
            "total": total,
            "expire_date": data?.expire_date,
            "paid": paid,
            "due": due,
            "unit_cost_price": 0,
            "purchased_by": 1,
        }
        setLoading(true)
        try {
            const res = await axiosInstance.post("/purchase", purchaseData);
            if (res.status === 201) {
                toast.success(res.data.message);
                setIsModalOpen(false);
                refetch();
                reset();
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false)
        }

    };


    useEffect(() => {

        if (selectedUnit && qty) {

            const productPrice = Number(selectedUnit.
                multiple_unit) * Number(qty);

            setPurchasePrice(productPrice)

        }
    }, [selectedUnit, qty, selectedProduct])


    useEffect(() => {
        const calculateTotal = () => {
            const discountValue =
                discount.type === "fixed"
                    ? discount.value
                    : (purchasePrice * discount.value) / 100;

            const totalValue = purchasePrice - discountValue;

            setTotal(totalValue);
            setDue(totalValue - paid);
        };

        calculateTotal();
    }, [purchasePrice, discount, paid]);

    const handleDiscountChange = (value, type) => {
        setDiscount({ type, value: parseFloat(value) || 0 });
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-xl font-semibold">{editData ? 'Update Product' : 'Create Product'}</h1>

            {/* Supplier Name */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="product_name">
                    Supplier <span className="text-red-500">*</span>
                </label>
                <Select

                    showSearch
                    className="w-full"
                    placeholder="Select Product"
                    optionFilterProp="label"
                    options={supplier?.map((item) => ({
                        label: `Name: ${item.name}`,
                        value: item.id,
                    }))}
                    onChange={(value) => {
                        const prd = supplier?.find((item) => item.id === value);
                        setSelectedSupplier(prd);
                    }}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.product_name.message}</p>
                )}
            </div>
            {/* Brand Name */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="product_name">
                    Product Name <span className="text-red-500">*</span>
                </label>
                <Select

                    showSearch
                    className="w-full"
                    placeholder="Select Product"
                    optionFilterProp="label"
                    options={product?.map((product) => ({
                        label: `Name: ${product.product_name}, Price: ${product.selling_price}`,
                        value: product.id,
                    }))}
                    onChange={(value) => {
                        const prd = product?.find((item) => item.id === value);
                        setSelectedProduct(prd);
                    }}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.product_name.message}</p>
                )}
            </div>
            <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                <label htmlFor="category-code">
                    Unit <span className="text-red-500">*</span>
                </label>
                <Select

                    showSearch
                    className="w-full"
                    placeholder="Select Unit"
                    optionFilterProp="label"
                    options={unitData?.map((unit) => ({
                        label: `Name: ${unit.name}`,
                        value: unit.id,
                    }))}
                    onChange={(value) => {
                        const unit = unitData?.find((item) => item.id === value);
                        setSelectedUnit(unit);
                    }}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Quantity <span className="text-red-500">*</span>
                    </label>
                    <Input
                        onChange={(e) => setQty(e.target.value)}
                        type="text"
                        className="p-2 border border-slate-200 rounded-md"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="purchase_price">
                        Purchase Price <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={purchasePrice} className="p-2 border border-slate-200 rounded-md " />
                    {errors.purchase_price && (
                        <p className="text-red-500 text-sm">{errors.purchase_price.message}</p>
                    )}
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Expire Date</label>
                <input
                    type="date"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("expire_date")}
                />
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("description")}
                    placeholder="Short Description"
                />
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold">Payment Details</h3>
                <div className="flex flex-col gap-4 mt-4">
                    {/* Sub-Total */}
                    <div className="flex items-center gap-4">
                        <div className="w-32">
                            <p className="font-semibold">Sub-Total (৳)</p>
                        </div>
                        <p className="border rounded-md text-center p-2 w-32">{purchasePrice?.toFixed(2)}</p>
                    </div>

                    {/* Discount */}
                    <div>
                        <label>Discount</label>
                        <div className="flex items-center gap-4">
                            <Select
                                className="w-32 h-10"
                                defaultValue="fixed"
                                options={[
                                    { label: "Fixed", value: "fixed" },
                                    { label: "Percentage", value: "percentage" },
                                ]}
                                onChange={(value) => handleDiscountChange(discount.value, value)}
                            />
                            <input
                                type="number"
                                placeholder="Value"
                                value={discount.value}
                                onChange={(e) => handleDiscountChange(e.target.value, discount.type)}
                                className="border text-center p-2 w-32 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Total After Discount */}
                    <div className="flex items-center gap-4">
                        <div className="w-32">
                            <p className="font-semibold">Total (৳)</p>
                        </div>
                        <p className="border rounded-md text-center p-2 w-32">{total?.toFixed(2)}</p>
                    </div>

                    {/* Paid Amount */}
                    <div className="flex items-center gap-4">
                        <div className="w-32">
                            <p className="font-semibold">Paid (৳)</p>
                        </div>
                        <input
                            type="number"
                            placeholder="Enter paid amount"
                            value={paid}
                            onChange={(e) => setPaid(parseFloat(e.target.value) || 0)}
                            className="border rounded-md text-center p-2 w-32"
                        />
                    </div>

                    {/* Remaining Due */}
                    <div className="flex items-center gap-4">
                        <div className="w-32">
                            <p className="font-semibold text-red-500">Due (৳)</p>
                        </div>
                        <p className={`border rounded-md text-center p-2 w-32 ${due > 0 ? "text-red-500" : ""}`}>
                            {due?.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>


            {/* Buttons */}
            <div className="flex gap-4 items-center mt-8 justify-end">
                <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="bg-[#ff2727] text-white px-10 py-2 rounded-md"
                >
                    Close
                </button>
                <button
                    disabled={loading}
                    type="submit"
                    className={`bg-[#6B66F6] ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} text-white px-10 py-2 rounded-md`}
                >
                    {loading ? "loading...." : editData ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};

export default AddPurchase;
