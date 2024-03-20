import { useEffect,useState } from "react";
import { dataServiceObj } from "../services/data.service";

function DemoComponent(){
    let url = "http://localhost:3500/users/";
    const [userDataArr2,setUserDataArr2] = useState([]);
    function getData_btnClick(){
        dataServiceObj.getAll(url).then((resData) => {
            setUserDataArr2(resData.data);
        });
    }
    useEffect(() => {
        getData_btnClick();
    },[])
    return(
        <>
        <h1>Working with JSON Server and Routing and Authorization</h1>
        <p>DemoComponent Works...</p>
        </>
    );
}
export default DemoComponent;