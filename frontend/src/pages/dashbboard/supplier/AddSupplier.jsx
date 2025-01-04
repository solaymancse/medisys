import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";



const AddSupplier = ({ editData, setIsModalOpen, refetch }) => {
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
            setValue('phone', editData.phone);
            setValue('alternate_number', editData.alternate_number);
            setValue('address', editData.address);
        } else {
            reset();
        }
    }, [editData, reset, setValue])

    useEffect(() => {
        if (isSubCategory) {
            axiosInstance.get('/supplier')
                .then((res) => setCategories(res.data))
                .catch(() => toast.error("Failed to fetch categories"));
        }
    }, [isSubCategory])

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = editData
                ? await axiosInstance.put(`/supplier/${editData.id}`, data)
                : await axiosInstance.post('/supplier', data);

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
                    Business Name <span className="text-red-500">*</span>
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
                    Phone <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("phone")}
                    placeholder="phone"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Alternative Number</label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("alternate_number")}
                    placeholder="Short Description"
                />
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Address</label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("address")}
                    placeholder="Address"
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

export default AddSupplier;
