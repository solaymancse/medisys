import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SidebarData } from '../../sidebarData/SidebarData';

const VerticalSidebar = () => {
    const location = useLocation();

    // Extract first four items and remaining items for dropdown
    const visibleItems = SidebarData.slice(0, 4);
    const dropdownItems = SidebarData.slice(4);

    // Ant Design dropdown menu
    const menu = (
        <Menu>
            {dropdownItems.map((item, index) => (
                <Menu.Item key={index}>
                    <Link className="text-text py-2" to={item.path}>
                        {item.title}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="flex h-full items-center gap-4 px-10">
            {/* Visible sidebar items */}
            {visibleItems.map((item, index) => (
                <Link
                    className={`text-text ${location.pathname === item.path ? 'bg-[#687EFF] rounded-xl px-6 py-2 text-white' : ''}`}
                    key={index}
                    to={item.path}
                >
                    {item.title}
                </Link>
            ))}
            
            {/* Dropdown for additional items */}
            {dropdownItems.length > 0 && (
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <span className="ant-dropdown-link text-text flex gap-2 items-center cursor-pointer" onClick={(e) => e.preventDefault()}>
                        More <MdKeyboardArrowDown size={18} />
                    </span>
                </Dropdown>
            )}
        </div>
    );
};

export default VerticalSidebar;
