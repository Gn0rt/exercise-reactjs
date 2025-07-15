import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserDetails = (props) => {
    const { isModalViewOpen, setIsModalViewOpen, dataUser, setDataUser } = props;
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const resetAndCloseModal = () => {
        setIsModalViewOpen(false);
        setDataUser(null);
    }
    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    console.log("file: ", preview);
    return (
        <>
            <Drawer
                width={"40vw"}
                title="Chi tiết User"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => resetAndCloseModal()}
                open={isModalViewOpen}
            >
                {dataUser ?
                    <>
                        <p style={{ margin: "10px 0" }}> <span style={{ fontWeight: "bold" }}>ID:</span> {dataUser._id}</p>
                        <p style={{ margin: "10px 0" }}><span style={{ fontWeight: "bold" }}>Full Name:</span> {dataUser.fullName}</p>
                        <p style={{ margin: "10px 0" }}><span style={{ fontWeight: "bold" }}>Email:</span> {dataUser.email}</p>
                        <p style={{ margin: "10px 0" }}><span style={{ fontWeight: "bold" }}>Phone:</span> {dataUser.phone}</p>
                        <br />
                        <p>Avatar</p>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "150px",
                            border: "1px solid #ccc",
                        }}>
                            <img
                                style={{
                                    height: "100%", width: "100%", objectFit: "contain",
                                }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUser.avatar}`} alt="" />
                        </div>
                        <div>
                            <label htmlFor='btnUpload'
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Upload Avatar
                            </label>
                            <input type="file" hidden id='btnUpload'
                                onChange={handleOnChangeFile}
                            />
                        </div>

                        {preview &&

                            <div style={{
                                marginTop: "10px",
                                height: "100px", width: "150px",
                                border: "1px solid #ccc",
                            }}>
                                <img
                                    style={{
                                        height: "100%", width: "100%", objectFit: "contain",
                                    }}
                                    src={preview} alt="" />
                            </div>
                        }


                        {/* <Button type='primary'>Upaload Avatar</Button> */}
                    </>
                    :
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                }


            </Drawer>
        </>

    );
}

export default ViewUserDetails;