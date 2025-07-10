import { Table, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserModal from './view.user.modal';
import ViewUserDetails from './view.user.detail';
const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalViewOpen, setIsModalViewOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        href='#'
                        onClick={() => {
                            setDataUser(record)
                            setIsModalViewOpen(true)
                        }}
                    >
                        {record._id}
                    </a>
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
                    <EditOutlined
                        style={{ cursor: "pointer", color: "orange", fontSize: "20px" }}
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red", fontSize: "20px" }} />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            {/* <ViewUserModal
                isModalViewOpen={isModalViewOpen}
                setIsModalViewOpen={setIsModalViewOpen}
                setDataUser={setDataUser}
                dataUser={dataUser}
            /> */}

            <ViewUserDetails
                isModalViewOpen={isModalViewOpen}
                setIsModalViewOpen={setIsModalViewOpen}
                setDataUser={setDataUser}
                dataUser={dataUser}
            />
        </>
    );
}
export default UserTable;