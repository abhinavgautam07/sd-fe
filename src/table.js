
import {useState,useEffect} from "react";
import axios from "axios"
export default function Table(props) {
    let[data,setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           let res= await axios.get("https://startup-dhaba.herokuapp.com/users/get-referrals-per-user");
            let users = res.data.user;
            setData([...users]);

        }
        fetchData();
    },[])
    return (
        <table>
            <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Referred To</th>
            </thead>
            <tbody>
            {
                data.map(user => (
                 <tr>
                     <td>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.email}</td>
                     <td>{user.referredTo}</td>
                 </tr>
                ))
            }
            </tbody>
        </table>
    );
}
