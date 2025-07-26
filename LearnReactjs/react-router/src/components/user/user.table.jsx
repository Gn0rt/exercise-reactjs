import { useState } from 'react';
import { Table, Popconfirm, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserModal from './view.user.modal';
import ViewUserDetails from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';
const UserTable = (props) => {
    const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalViewOpen, setIsModalViewOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataUser, setDataUser] = useState(null);

    const [api, contextHolder] = notification.useNotification();

    const handleDelteUser = async (id) => {
        const response = await deleteUserAPI(id);
        if (response.data) {
            api["success"]({
                message: 'Delete user',
                description: 'Xóa user thành công',
            });
            //boi vi ham loaduser co async
            await loadUser();
        } else {
            api["error"]({
                message: 'Error delete user',
                description: JSON.stringify(response.message),
            });
        }
    }
    const columns = [
        {
            title: 'STT',
            render: (_, __, index) => {

                return (
                    <>
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                );
            }
        },
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
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />

                    <Popconfirm
                        title="Delete the User"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDelteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red", fontSize: "20px" }} />
                    </Popconfirm>

                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        //nếu thay đổi trang: current
        //trick lỏd: + -> convert sang number
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current);
            }
        }
        //nếu thay đổi tổng số phần tử
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize);
            }
        }
        console.log(">>>check: ", pagination, filters, sorter, extra);
    };


    return (
        <>
            {contextHolder}

            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }
                }
                onChange={onChange}


            />
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
                loadUser={loadUser}
            />

        </>
    );
}
export default UserTable;