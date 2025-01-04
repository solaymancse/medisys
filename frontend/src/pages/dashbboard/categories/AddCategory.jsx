import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";



const AddCategory = ({ editData, setIsModalOpen, refetch }) => {
    const [loading, setLoading] = useState(false);
    const [isSubCategory, setIsSubCategory] = useState(false);
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
        if (isSubCategory) {
            axiosInstance.get('/category')
                .then((res) => setCategories(res.data))
                .catch(() => toast.error("Failed to fetch categories"));
        }
    }, [isSubCategory])

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = editData
                ? await axiosInstance.put(`/category/${editData.id}`, data)
                : await axiosInstance.post('/category', data);

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
            <h1 className="text-center text-xl font-semibold">{editData ? 'Update category' : 'Create category'}</h1>

            {/* Brand Name */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="category-name">
                    Category Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("name", { required: "Category Name is required" })}
                    placeholder="Name"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="category-code">
                    Category Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("code")}
                    placeholder="Code"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("description")}
                    placeholder="Short Description"
                />
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isSubCategory}
                        onChange={(e) => setIsSubCategory(e.target.checked)}
                        className="accent-blue-500 "
                    />
                    Add As Sub Category
                </label>
                {isSubCategory && <select
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("parent")}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}

                </select>}
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

export default AddCategory;
