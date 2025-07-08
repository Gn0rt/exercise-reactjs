import { Link, Links, NavLink, useLocation } from 'react-router';
import { Menu } from 'antd';
import { UserOutlined, HomeOutlined, ProductOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const Header = () => {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        console.log("click", e);
        setCurrent(e.key);
    }
    const items = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: (
                <Link to="/">Home</Link>
            ),
        },
        {
            key: 'users',
            icon: <UserOutlined />,
            label: (
                <Link to="/users">Users</Link>
            ),
        },
        // {
        //     label: 'Navigation Three - Submenu',
        //     key: 'SubMenu',
        //     icon: <SettingOutlined />,
        //     children: [
        //         {
        //             type: 'group',
        //             label: 'Item 1',
        //             children: [
        //                 { label: 'Option 1', key: 'setting:1' },
        //                 { label: 'Option 2', key: 'setting:2' },
        //             ],
        //         },
        //         {
        //             type: 'group',
        //             label: 'Item 2',
        //             children: [
        //                 { label: 'Option 3', key: 'setting:3' },
        //                 { label: 'Option 4', key: 'setting:4' },
        //             ],
        //         },
        //     ],
        // },
        {
            key: 'products',
            icon: <ProductOutlined />,
            label: (
                <Link to="/products">Products</Link>
            ),
        },
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}
export default Header;