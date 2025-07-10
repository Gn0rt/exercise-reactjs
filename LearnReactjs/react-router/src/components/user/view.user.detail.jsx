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