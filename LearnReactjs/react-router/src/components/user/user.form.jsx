import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";


const UserForm = (props) => {
    const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [api, contextHolder] = notification.useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        //console.log("aaa")
        const response = await createUserApi(fullName, email, password, phone);
        //debugger
        if (response.data) {
            api["success"]({
                message: 'Create user',
                description: 'Tạo user thành công',
            });
            resetAndCloseModal();
            //boi vi ham loaduser co async
            await loadUser();
        } else {
            api["error"]({
                message: 'Error create user',
                description: JSON.stringify(response.message),
            });
        }

        console.log(">>> Result: ", response.data.data);

    }
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }
    return (
        <>
            {contextHolder}
            <div className="user-form" style={{ margin: "20px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table Users</h3>
                    <Button
                        type="primary"
                        onClick={() => setIsModalOpen(true)}
                    >Create User</Button>
                </div>
                <Modal
                    title="Create User"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => resetAndCloseModal()}
                    maskClosable={false}
                    okText="Create"
                >
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>FullName</span>
                            <Input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Fullname..."
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email..."

                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password..."

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
            </div>
        </>
    );
}
export default UserForm;