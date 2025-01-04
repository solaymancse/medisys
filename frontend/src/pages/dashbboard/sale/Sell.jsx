import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axiosInstance from "../../../utils/axiosConfig";
import { Select, Spin } from "antd";
import { IoMdTrash } from "react-icons/io";
import { toast } from "react-toastify";

const Sell = () => {
    const [customers, setCustomers] = useState();
    const [selectedCustomer, setSelectedCustomer] = useState();
    const [products, setProducts] = useState();
    const [units, setUnits] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [allItems, setAllItems] = useState([]);
    const [paid, setPaid] = useState(0);
    const [discount, setDiscount] = useState({ type: "fixed", value: 0 });
    const [total, setTotal] = useState(0);
    const [due, setDue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [stockError, setStockError] = useState(false);

    const { handleSubmit } = useForm()

    useEffect(() => {
        axiosInstance.get('/customer')
            .then((res) => setCustomers(res.data))
    }, [])

    useEffect(() => {
        axiosInstance.get('/product')
            .then((res) => {
                const data = res?.data;
                const filterData = data.filter((item) => item?.stock > 0);
                setProducts(filterData)
            })
    }, [])
    useEffect(() => {
        axiosInstance.get('/unit')
            .then((res) => setUnits(res.data))
    }, [])



    useEffect(() => {
        if (selectedProduct) {
            setAllItems((prev) => {
                if (prev?.some((item) => item?.id === selectedProduct?.id)) {
                    return prev
                }

                return [...prev, selectedProduct]
            });
        }
    }, [selectedProduct])

    useEffect(() => {
        allItems.forEach((item) => {
            if (item?.qty * item?.selectedUnit?.multiple_unit > item?.stock) {
                setStockError(true)
            } else {
                setStockError(false)
            }
        })
    }, [allItems])




    useEffect(() => {
        const calculateTotal = () => {
            const subtotal = allItems.reduce(
                (acc, item) =>
                    acc +
                    (item.qty || 1) *
                    item.selling_price *
                    (item.selectedUnit?.multiple_unit || 1),
                0
            );
            const discountValue =
                discount.type === "fixed"
                    ? discount.value
                    : (subtotal * discount.value) / 100;

            const due = selectedCustomer ? selectedCustomer?.due_amount : 0;

            const totalValue = subtotal - discountValue + Number(due);

            setTotal(totalValue);
            setDue(totalValue - paid);
        };

        calculateTotal();
    }, [allItems, discount, paid, selectedCustomer]);

    const handleDiscountChange = (value, type) => {
        setDiscount({ type, value: parseFloat(value) || 0 });
    };


    const onSubmit = () => {

        const itemsData = allItems.map((item) => ({
            product_id: item.id,
            qty: item.qty || 1,
            unit_id: item.selectedUnit?.id || null,
            subtotal: (item.qty || 1) * item.selling_price * (item.selectedUnit?.multiple_unit || 1),
        }));

        const formData = {
            customer_id: selectedCustomer?.id || null,
            items: itemsData,
            discount: discount,
            paid: paid,
            total: total,
            due: due,
        };


        setLoading(true); // Set loading to true when starting the request
        axiosInstance.post("/sale", formData)
            .then((res) => {
                if (res.status === 201 || res.status === 200) {
                    toast.success(res.data.message);
                    setAllItems([]); // Clear items after successful request
                    setPaid(0);
                    setDiscount({ type: "fixed", value: 0 });
                    setTotal(0);
                    setDue(0);
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || 'An error occurred');
            })
            .finally(() => {
                setLoading(false); // Ensure loading is reset after the request is finished
            });

    }

    return (
        <div className="bg-white p-4">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between gap-6 items-center">
                    <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                        <label htmlFor="category-code">
                            Select Customer <span className="text-red-500">*</span>
                        </label>
                        <Select
                            showSearch
                            className="w-full"
                            placeholder="Select Customer"
                            optionFilterProp="label"
                            options={customers?.map((customer) => ({
                                label: customer.name,
                                value: customer.id,
                            }))}
                            onChange={(value) => {
                                const customer = customers?.find((item) => item.id === value);
                                setSelectedCustomer(customer);
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                        <label htmlFor="category-code">
                            Select Product <span className="text-red-500">*</span>
                        </label>
                        <Select

                            showSearch
                            className="w-full"
                            placeholder="Select Product"
                            optionFilterProp="label"
                            options={products?.map((product) => ({
                                label: `Name: ${product.product_name}, Price: ${product.selling_price}`,
                                value: product.id,
                            }))}
                            onChange={(value) => {
                                const product = products?.find((item) => item.id === value);
                                setSelectedProduct(product);
                            }}
                        />
                    </div>
                </div>

                {selectedProduct && <div className="mt-4">
                    <p className={`text-lg font-semibold ${selectedProduct?.alert_qty > selectedProduct?.stock ? 'text-red-500' : 'text-green-400'}`}>In Stock : {selectedProduct?.stock}</p>
                </div>}
                {allItems &&
                    <table className="w-full mt-8 ">
                        <thead>
                            <tr>
                                <th className="bg-[#F3F6FD] text-start py-2 px-4 ">Product Name</th>
                                <th className="bg-[#F3F6FD]  py-2 px-4 ">Unit</th>
                                <th className="bg-[#F3F6FD]  py-2 px-4 ">Quantity</th>
                                <th className="bg-[#F3F6FD] text-end py-2 px-4 ">Sub-Total</th>
                                <th className="bg-[#F3F6FD] text-center py-2 px-4 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allItems?.map((item, idx) => (
                                <tr key={idx} className="text-center border-b">
                                    {/* Product Name */}
                                    <td className="py-2 px-4 text-start ">{item?.product_name}</td>
                                    <td className="py-2 px-4 ">
                                        <Select
                                            className="w-full"
                                            placeholder="Select Unit"
                                            options={units?.map((unit) => ({
                                                label: unit.name,
                                                value: unit.id,
                                                multiple_unit: unit.multiple_unit,
                                            }))}
                                            onChange={(value, option) => {
                                                setAllItems((prev) =>
                                                    prev.map((product, i) =>
                                                        i === idx
                                                            ? { ...product, selectedUnit: { id: value, name: option.label, multiple_unit: option.multiple_unit } }
                                                            : product
                                                    )
                                                );
                                            }}
                                            value={item.selectedUnit?.id} // Display the selected unit's ID
                                        />

                                    </td>

                                    {/* Quantity Adjuster */}
                                    <td className="py-2 px-4 ">
                                        <div className="flex items-center justify-center gap-2">
                                            <div
                                                onClick={() => {
                                                    setAllItems((prev) =>
                                                        prev.map((product, i) =>
                                                            i === idx ? { ...product, qty: Math.max(1, (product.qty || 1) - 1) } : product
                                                        )
                                                    );
                                                }}
                                                className="bg-red-300 px-2 py-1 cursor-pointer text-white"
                                            >
                                                -
                                            </div>
                                            <input
                                                type="text"
                                                className="border border-slate-300 text-center py-1 w-12"
                                                value={item.qty || 1}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (/^\d*$/.test(value)) {
                                                        setAllItems((prev) =>
                                                            prev.map((product, i) =>
                                                                i === idx ? { ...product, qty: value === "" ? "" : parseInt(value, 10) } : product
                                                            )
                                                        );
                                                    }
                                                }}
                                            />
                                            <div
                                                onClick={() => {
                                                    setAllItems((prev) =>
                                                        prev.map((product, i) =>
                                                            i === idx ? { ...product, qty: (product.qty || 1) + 1 } : product
                                                        )
                                                    );
                                                }}
                                                className="bg-indigo-400 px-2 py-1 cursor-pointer text-white"
                                            >
                                                +
                                            </div>
                                        </div>
                                    </td>

                                    {/* Sub-Total */}
                                    <td className="py-2 px-4 text-end">
                                        ৳ {(item.qty || 1) * item?.selling_price * (item?.selectedUnit?.multiple_unit || 1)}
                                    </td>

                                    {/* Stock Warning */}
                                    {item?.qty * item?.selectedUnit?.multiple_unit > item?.stock && (
                                        <td className="text-red-500 font-semibold text-center">
                                            <span>Warning: Stock insufficient!</span>
                                        </td>
                                    )}

                                    {/* Delete Action */}
                                    <td className="">
                                        <div className="flex justify-center">
                                            <IoMdTrash
                                                color="red"
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    setAllItems((prev) => prev.filter((_, i) => i !== idx));
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                <div className="mt-8">
                    <h3 className="text-xl font-bold">Payment</h3>
                    <div className="flex flex-col gap-4 mt-4">
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
                                    onChange={(value) =>
                                        handleDiscountChange(discount.value, value)
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="Value"
                                    value={discount.value}
                                    onChange={(e) =>
                                        handleDiscountChange(e.target.value, discount.type)
                                    }
                                    className="border text-center p-2 w-32 rounded-md"
                                />

                            </div>
                        </div>
                        <div className={`flex p-2 ${selectedCustomer?.due_amount > 0 ? "text-red-400" : "hidden"} gap-2 items-center`}>
                            <div className="w-32 ">
                                <p className="font-semibold ">Due Amount (৳)</p>
                            </div>
                            <p className="border border-red-400 rounded-md text-center p-2 w-32">{selectedCustomer?.due_amount}</p>
                        </div>
                        <div className="flex p-2 gap-2 items-center">
                            <div className="w-32 ">
                                <p className="font-semibold ">Paid (৳)</p>
                            </div>
                            <input
                                type="number"
                                placeholder="Enter paid amount"
                                value={paid}
                                onChange={(e) => setPaid(parseFloat(e.target.value) || 0)}
                                className="border rounded-md text-center p-2 w-32"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="bg-cyan-500 text-white p-2">
                                <p className="font-semibold">Total: ৳{total.toFixed(2)}</p>
                            </div>
                            <div className="font-semibold bg-teal-600 text-white p-2">
                                <p>Due: ৳{due.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <button disabled={stockError || loading || allItems.length === 0} type="submit" className={`${loading ? "cursor-not-allowed  bg-slate-100 border-blue-100 w-40" : "bg-blue-500 hover:bg-green-500"} btn  text-white py-2 px-10 mt-4`}>{loading ? <Spin color="#fff" /> : "Pay Cash"}</button>
                </div>
            </form>


        </div>
    )
}

export default Sell
