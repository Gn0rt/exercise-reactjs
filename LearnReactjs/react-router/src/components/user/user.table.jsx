import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.service';
import { useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        { _id: "gnot", fullName: 22, email: "Ha Noi" }

    ]);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }
    ];

    const loadUser = async () => {

        const res = await fetchAllUserApi();
        // setDataUsers(res.data)

    }
    loadUser();
    console.log("run render");
    return (
        <Table columns={columns} dataSource={dataUsers} />
    );
}
export default UserTable;