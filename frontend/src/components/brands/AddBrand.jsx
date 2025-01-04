import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";


const AddBrand = ({ editData, setIsModalOpen, refetch }) => {
    const [loading, setLoading] = useState(false);
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
            setValue('description', editData.description);
        } else {
            reset();
        }
    }, [editData, reset, setValue])

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = editData
                ? await axiosInstance.put(`/brand/${editData.id}`, data)
                : await axiosInstance.post('/brand', data);

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
            <h1 className="text-center text-xl font-semibold">{editData ? 'Update Brand' : 'Create Brand'}</h1>

            {/* Brand Name */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="brand-name">
                    Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("name", { required: "Brand Name is required" })}
                    placeholder="Name"

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

            {/* Buttons */}
            <div className="flex gap-4 items-center mt-8 justify-end">
                <button
                    type="button"
                    className="bg-[#ff2727] text-white px-10 py-2 rounded-md"
                >
                    Close
                </button>
                <button
                    type="submit"
                    className="bg-[#6B66F6] text-white px-10 py-2 rounded-md"
                >
                    {loading ? "loading...." : editData ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};

export default AddBrand;
