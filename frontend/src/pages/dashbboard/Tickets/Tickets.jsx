import { Space, Table, Tag, Input, Popconfirm, message } from "antd";
import HomeBox from "../../../components/homeBox/HomeBox";
import { ticketBoxdata, ticketData } from "../../../Data";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const { Search } = Input;
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tickets',
    dataIndex: 'ticket',
    key: 'ticket',
    render: (ticket) => (
      <>
        <p className="text-[#5D87FF]">{ticket?.subject}</p>
        <p className="text-[#777] text-xs">{ticket?.description}</p>
      </>
    )
  },
  {
    title: 'Assign To',
    dataIndex: 'assignTo',
    key: 'assignTo',
    render: (assignTo) => (
      <div className="flex items-center space-x-2">
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={assignTo.image} alt="" />
        </div>
        <p className="text-xs font-semibold">{assignTo.name}</p>
      </div>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <>
        <Tag color={status === "Close" ? "green" : status === "Open" ? "blue" : "red"}>{status}</Tag>
      </>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => {

      const confirm = (e) => {
        console.log(e);
        message.success('Successfully Deleted!');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Delete Canceled!');
      };
      return (

        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"

          >
            <a><RiDeleteBin6Line className='text-red-500' /></a>
          </Popconfirm>
        </Space>
      )

    },
  },
];


export default function Tickets() {

  const [, setSearch] = useState("");
  const [filterData, setFilterData] = useState(ticketData);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);
    const filtered = ticketData?.filter((item) =>
      item?.ticket?.subject?.toLowerCase().includes(value?.toLowerCase()) ||
      item?.status?.toLowerCase()?.includes(value?.toLowerCase()) ||
      item?.assignTo?.name?.toLocaleLowerCase()?.includes(value?.toLocaleLowerCase())
    );

    setFilterData(filtered);
  }

  return (
    <div className="max-w-5xl mx-auto">

      <HomeBox data={ticketBoxdata} grid="grid md:grid-cols-2 xl:grid-cols-4" />

      <div className="mt-6" >
        <div className="bg-white dark:bg-dark dark:text-white w-full flex justify-center py-6 px-2 h-[80px]">
          <div className="w-[400px] border h-[40px] rounded-lg px-2">
            <input
              className="w-full h-full text-xs outline-none dark:bg-dark dark:text-white"
              placeholder="Search ..."
              onChange={handleSearch}
            />
          </div>
        </div>
        <Table className="dark:bg-dark dark:text-white" scroll={{ x: 600 }} columns={columns} dataSource={filterData} pagination={{ pageSize: 2 }} />
      </div>

    </div>
  )
}
