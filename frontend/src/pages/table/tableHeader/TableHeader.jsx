import { Select } from "antd"
import Modals from "../../../components/resusable/modals.jsx/Modals";
import { useState } from "react";
import AddCustomer from "../../../components/addCustomer/AddCustomer";
import { IoIosSearch } from "react-icons/io";
import { array } from "prop-types";

const TableHeader = ({ setFilterData, tableData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // search button 

    const [, setSearch] = useState("");


    const handleSearch = e => {
        const value = e.target.value;
        setSearch(value);

        const filtered = tableData?.filter((item) =>
            item?.name?.toLowerCase().includes(value?.toLowerCase()) ||
            item?.age?.toString().toLowerCase().includes(value.toLowerCase()) ||
            item?.address?.toLowerCase().includes(value.toLowerCase())
        );
        setFilterData(filtered)
        console.log('filtered', filtered)
    }




    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white dark:bg-dark dark:text-white md:grid grid-cols-4  gap-8 w-full items-center rounded-md px-4 md:px-10 py-4 mb-4">
            <div className="flex justify-start">
                <p className="text-sm font-medium">Customer Details</p>
            </div>

            <div className="flex justify-between my-4 md:my-0 items-center border border-slate-200 py-1 rounded-md px-4">
                <input type="text" placeholder="Search" onChange={handleSearch} className="dark:bg-dark dark:text-white outline-none" />
                <IoIosSearch />
            </div>
            <div>
                <Select
                    defaultValue="July 2024"
                    style={{
                        width: 120,
                        border: '1px solid gray',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '4px',
                    }}
                    options={[
                        {
                            value: 'May 2024',
                            label: 'May 2024',
                        },
                        {
                            value: 'June 2024',
                            label: 'June 2024',
                        },
                        {
                            value: 'July 2024',
                            label: 'July 2024',
                        },


                    ]}
                />
            </div>

            <div className="flex justify-end items-center text-white rounded-md">
                <button onClick={showModal} className="bg-[#687EFF] dark:bg-dark dark:text-white dark:border py-2 px-2 w-[120px] rounded-md">Add</button>
            </div>
            <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddCustomer />
            </Modals>
        </div>
    )
}

TableHeader.propTypes = {

    setFilterData: array,
    tableData: array,
}
export default TableHeader
