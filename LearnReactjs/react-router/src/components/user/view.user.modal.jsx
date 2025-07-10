import { useEffect, useState } from "react";
import { Input, Modal } from "antd";

const ViewUserModal = (props) => {
    const { isModalViewOpen, setIsModalViewOpen, dataUser, setDataUser } = props;
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        if (dataUser) {
            setId(dataUser._id);
            setFullName(dataUser.fullName);
            setPhone(dataUser.phone);
            setEmail(dataUser.email);
        }
    }, [dataUser])
    const resetAndCloseModal = () => {
        setIsModalViewOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setEmail("");
        setDataUser(null);
    }
    return (
        <>
            <Modal
                title="View User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalViewOpen}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okButtonProps={{ style: { display: "none" } }}
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
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default ViewUserModal;