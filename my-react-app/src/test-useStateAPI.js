import React, {useState} from "react";
import axios from 'axios';

const ShowUser =(props) => {
    const {listUser} = props;

    return(
        <div>
            {listUser.map((user,index) => {
                return (
                    <React.Fragment key={user.id}>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </ul>
                        <hr/>
                    </React.Fragment>
                )
            })}
        </div>
    )
};

export default function TestuseStateAPI(){
    const [listUser, setListUser] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getUserAPI = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

    const getUser = () => {
        setLoading(true);

        axios.get(getUserAPI)
        .then((res) =>  {
            setListUser(res.data);
        })
        .catch((err) => {
            alert("ERR")
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return(
        <>
        <code>DS</code><br/>
        {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>}
        <ShowUser listUser={listUser} />
        </>
    )
}