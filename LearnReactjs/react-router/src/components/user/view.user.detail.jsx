import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserDetails = (props) => {
    const { isModalViewOpen, setIsModalViewOpen, dataUser, setDataUser } = props;


    const resetAndCloseModal = () => {
        setIsModalViewOpen(false);
        setDataUser(null);
    }
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
                        <div>
                            <p>Avatar</p>
                            <img
                                height={150}
                                width={150}
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
                            <input type="file" hidden id='btnUpload' />
                        </div>
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