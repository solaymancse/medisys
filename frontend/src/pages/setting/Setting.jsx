import { Tabs } from "antd"
import General from "./General/General";
import CopyRight from "./copyRight/CopyRight";
import RoleAndPermission from "./role&Permission/RoleAndPermission";

const Setting = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: (
                <p className="text-text font-medium">General</p>
            ),
            children: (
                <General />
            )
        },
        {
            key: '2',
            label: (
                <p className="text-text font-medium">Role & Permission</p>
            ),
            children: (
                <RoleAndPermission />
            )
        },
        {
            key: '3',
            label: (
                <p className="text-text font-medium">Copy Right</p>
            ),
            children: (
                <CopyRight />
            ),
        },
    ];

    return (
        <div className="bg-white dark:bg-dark dark:text-white py-8 px-6">

            <h1 className="text-lg mb-4 font-semibold">Settings</h1>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default Setting
