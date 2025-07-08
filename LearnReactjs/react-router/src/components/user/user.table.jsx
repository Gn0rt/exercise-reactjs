import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
const UserTable = (props) => {
    const { dataUsers } = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                );
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange", fontSize: "20px" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red", fontSize: "20px" }} />
                </div>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    );
}
export default UserTable;