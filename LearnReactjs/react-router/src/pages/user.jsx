import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserApi } from "../services/api.service";


const UserPage = () => {
    //lift-up state
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();

    }, []);
    const loadUser = async () => {
        const res = await fetchAllUserApi();
        setDataUsers(res.data)
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} loadUser={loadUser} />
        </div>
    );
}
export default UserPage;