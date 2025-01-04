import { message, Popconfirm, Space, Table, Tag } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { tableData } from '../../Data';
import { useState } from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => {

            const confirm = (e) => {
                message.success('Successfully Deleted!');
            };
            const cancel = (e) => {
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

const Tables = ({ title, children, isModalOpen, setIsModalOpen }) => {
    const [filterData, setFilterData] = useState(tableData);

    return (
        <>
            <Table scroll={{ x: 600 }} columns={columns} dataSource={filterData} pagination={{ pageSize: 2 }} />
        </>
    )
};
export default Tables;