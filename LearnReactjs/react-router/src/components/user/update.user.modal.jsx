import { useEffect, useState } from "react";
import { Input, Button, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [api, contextHolder] = notification.useNotification();
    //const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;
    useEffect(() => {
        console.log("update data:", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        //console.log("aaa")
        const response = await updateUserAPI(id, fullName, phone);
        //debugger
        if (response.data) {
            api["success"]({
                message: 'Update user',
                description: 'Cập nhật user thành công',
            });
            resetAndCloseModal();
            //boi vi ham loaduser co async
            //await loadUser();
        } else {
            api["error"]({
                message: 'Error update user',
                description: JSON.stringify(response.message),
            });
        }

        console.log(">>> Result: ", response.data.data);

    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }

    return (
        <>
            <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText="Save"
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>Id</span>
                        <Input
                            value={id}
                            disabled

                        />
                    </div>
                    <div>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Fullname..."
                        />
                    </div>

                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone number..."
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default UpdateUserModal;