import { Input } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone

        }
        axios.post(URL_BACKEND, data);
        console.log("clicked")
    }
    return (
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
    );
}
export default UserForm;