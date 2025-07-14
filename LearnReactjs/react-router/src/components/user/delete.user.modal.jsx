import React from 'react';
import { Button, message, Popconfirm } from 'antd';

const DeleteUserModal = (props) => {
    const { isModalDeleteOpen, setIsModalDeleteOpen, setDataUser, dataUser } = props;

    const confirm = e => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = e => {
        console.log(e);
        message.error('Click on No');
    };
    return (
        <>
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                open={isModalDeleteOpen}
                okText="Yes"
                cancelText="No"
            >
                <Button danger>Delete</Button>
            </Popconfirm>
        </>
    );
}
export default DeleteUserModal;