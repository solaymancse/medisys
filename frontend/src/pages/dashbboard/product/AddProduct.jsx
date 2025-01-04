import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";



const AddProduct = ({ editData, setIsModalOpen, refetch }) => {
    const [loading, setLoading] = useState(false);
    const [unitData, setUnitData] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [categories, setCategories] = useState([]);
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
        axiosInstance.get('/unit')
            .then((res) => setUnitData(res.data))
            .catch(() => toast.error("Failed to fetch Unit"));

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

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = editData
                ? await axiosInstance.put(`/product/${editData.id}`, data)
                : await axiosInstance.post('/product', data);

            if (res.status === 201 || res.status === 200) {
                toast.success(res.data.message);
                setIsModalOpen(false);
                refetch();
                reset();
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-xl font-semibold">{editData ? 'Update Product' : 'Create Product'}</h1>

            {/* Brand Name */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="product_name">
                    Product Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("product_name", { required: "Product Name is required" })}
                    placeholder="Product Name"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.product_name.message}</p>
                )}
            </div>
            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Unit <span className="text-red-500">*</span>
                    </label>
                    {<select
                        className="p-2 border border-slate-200 rounded-md "
                        {...register("unit_id", { required: "Category Code is required" })}
                    >
                        <option selected value="">Select Unit</option>
                        {unitData.map((unit) => (
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        ))}

                    </select>}
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Brand <span className="text-red-500">*</span>
                    </label>
                    {<select
                        className="p-2 border border-slate-200 rounded-md "
                        {...register("brand_id")}
                    >
                        <option selected value="" >Select Brand</option>
                        {brandData.map((brand) => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}

                    </select>}
                    {errors.brand_id && (
                        <p className="text-red-500 text-sm">{errors.brand_id.message}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Category <span className="text-red-500">*</span>
                    </label>
                    {<select
                        className="p-2 border border-slate-200 rounded-md "
                        {...register("category_id", { required: "Category Code is required" })}
                    >
                        <option selected value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}

                    </select>}
                    {errors.category_id && (
                        <p className="text-red-500 text-sm">{errors.category_id.message}</p>
                    )}
                </div>
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Sub Category
                    </label>
                    {<select
                        className="p-2 border border-slate-200 rounded-md "
                        {...register("sub_category_id")}
                    >
                        <option selected value="">Select Sub Category</option>
                        {brandData.map((brand) => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}

                    </select>}
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Stock <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...register("stock", { required: "Stock is required" })} className="p-2 border border-slate-200 rounded-md " />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="category-code">
                        Alert Stock
                    </label>
                    <input type="text" {...register("alert_qty")} className="p-2 border border-slate-200 rounded-md " />
                    {errors.alert_qty && (
                        <p className="text-red-500 text-sm">{errors.alert_qty.message}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="purchase_price">
                        Purchase Price <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...register("purchase_price", { required: "Purchase Price is required" })} className="p-2 border border-slate-200 rounded-md " />
                    {errors.purchase_price && (
                        <p className="text-red-500 text-sm">{errors.purchase_price.message}</p>
                    )}
                </div>
                <div className="flex w-full flex-col justify-between gap-1 relative my-3">
                    <label htmlFor="selling_price">
                        Selling Price
                    </label>
                    <input type="text" {...register("selling_price", { required: "Selling Price is required" })} className="p-2 border border-slate-200 rounded-md " />
                    {errors.selling_price && (
                        <p className="text-red-500 text-sm">{errors.selling_price.message}</p>
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

export default AddProduct;
