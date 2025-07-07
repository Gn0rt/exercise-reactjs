import { Table } from 'antd';
import { fetchAllUserApi } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        { _id: "gnot", fullName: 22, email: "Ha Noi" }

    ]);

    useEffect(() => {
        console.log("run effect 1")
        loadUser();

    }, []);

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
        setDataUsers(res.data)

    }
    console.log("run render 0");
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    );
}
export default UserTable;