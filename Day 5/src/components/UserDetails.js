import { useEffect, useState } from "react";
import { dataServiceObj } from "../services/data.service";
import DemoComponent from "./DemoComponent";

function UserDetails(){
    //state variable but readonly for user details 
    const [userDataArr,setUserDataArr] = useState([]);

    //state variables but readonly for uid & password
    const [uid] = useState("");
    const [password] = useState("");

    //url var
    let url = "http://localhost:3500/users/";

    useEffect(() => {
        
    })

    function getData_btnClick(){
        dataServiceObj.getAll(url).then(() => {
            console.log(userDataArr.at(0).uid);
            console.log(userDataArr.at(0).password);
        });
    }

    return(
        <>
        <button onClick={getData_btnClick}>Get Data</button>
        <DemoComponent userDataArr={userDataArr}></DemoComponent>
        </>
    );
}
export default UserDetails;