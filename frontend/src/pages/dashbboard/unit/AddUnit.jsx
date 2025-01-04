import { get, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";



const AddUnit = ({ editData, setIsModalOpen, refetch }) => {
    const [loading, setLoading] = useState(false);
    const [isMultipleUnit, setIsMultipleUnit] = useState(false);
    const [categories, setCategories] = useState([]);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (editData) {
            setValue('name', editData.name);
            setValue('short_name', editData.short_name);
            setValue('decimal', editData.decimal);
            setValue('multiple_unit', editData.multiple_unit);
            setValue('base_unit', editData.base_unit);
        } else {
            reset();
        }
    }, [editData, reset, setValue])

    useEffect(() => {
        if (isMultipleUnit) {
            axiosInstance.get('/unit')
                .then((res) => setCategories(res.data))
                .catch(() => toast.error("Failed to fetch unit"));
        }
    }, [isMultipleUnit])

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = editData
                ? await axiosInstance.put(`/unit/${editData.id}`, data)
                : await axiosInstance.post('/unit', data);

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
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="category-code">
                    Short Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("short_name")}
                    placeholder="Short Name"

                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label htmlFor="description">Decimal</label>
                <select
                    className="p-2 border border-slate-200 rounded-md "
                    {...register("decimal")}
                >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
            <div className="flex flex-col justify-between gap-1 relative my-3">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isMultipleUnit}
                        onChange={(e) => setIsMultipleUnit(e.target.checked)}
                        className="accent-blue-500 "
                    />
                    Add As Multiple of Other Unit
                </label>
                {isMultipleUnit &&

                    <>
                        <div className="flex gap-4 items-center">
                            <h1>1 <span className="text-red-500 font-semibold">{getValues('name')}</span> = </h1>
                            <div>
                                <input type="text" {...register("multiple_unit")} className="border border-slate-200 rounded-md p-2" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Select Base Unit</label>
                            <select
                                className="p-2 border border-slate-200 rounded-md "
                                {...register("base_unit")}
                            >
                                <option value="Pcs">Pieces(Pcs)</option>

                            </select>
                        </div>


                    </>}
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

export default AddUnit;
