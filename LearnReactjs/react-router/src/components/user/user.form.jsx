import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [api, contextHolder] = notification.useNotification();

    const handleClick = async () => {
        const response = await createUserApi(fullName, email, password, phone);
        if (response.data) {
            api["success"]({
                message: 'Create user',
                description: 'Tạo user thành công',
            });
        };

        console.log(">>> Result: ", response.data.data);
    }
    return (
        <>
            {contextHolder}
            <div className="user-form" style={{ margin: "20px 0" }}>
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
                    <div>
                        <Button
                            type="primary"
                            onClick={handleClick}
                        >Create User</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserForm;