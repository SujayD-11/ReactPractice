import {useState} from 'react';
import { dataServiceObj } from "../../services/data.service";
import './EmpJsonServer.css';
function EmpJsonServer(){
    //state variable for dataArr
    const [empDataArr,setEmpDataArr] = useState([]);
    
    //state variable for buttonName
    const [btnName,setBtnName] = useState("Get Data");
    
    //state variable for attributes of data array objects
    const [empid,setEmpid] = useState("");
    const [ename,setEname] = useState("");
    const [job,setJob] = useState("");
    const [sal,setSal] = useState("");
    const [deptno,setDeptno] = useState("");

    //state varaible for display
    const [isTableShown, setIsTableShown] = useState(false);

    let resArr = empDataArr.map((item,index) => {
        return <tr key={index}>
            <td class="tableData-col"> {item.EmpID} </td>
            <td class="tableData-col"> {item.EmpName} </td>
            <td class="tableData-col"> {item.Job} </td>
            <td class="tableData-col"> {item.Salary} </td>
            <td class="tableData-col"> {item.DepartmentNo} </td>
            <td class="tableData-col"><a onClick= {() => deleteData_btnClick(item.EmpID)} href="javascript:void(0);"><img src="delete.png" alt="delete" height="30" width="30"/></a></td>
            <td class="tableData-col"><a onClick= {() => selectData_btnClick(item.EmpID)} href="javascript:void(0);"><img src="edit.jpg" alt="select" height="20" width="30"/></a></td>
        </tr>
    });

    //button-click function
    function getData_btnClick(){

        setIsTableShown(current => !current);
        if(!isTableShown){
            setBtnName("Hide Data");
        }
        else{
            setBtnName("Get Data");
        } 
        dataServiceObj.getAll().then((resData) => {
            setEmpDataArr(resData.data);
        });
    }
    function clearFields(){
        setEmpid("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }
    function addData_btnClick(){
        let tempObj = {};
        tempObj.EmpID = empid;
        tempObj.EmpName = ename;
        tempObj.Job = job;
        tempObj.Salary = sal;
        tempObj.DepartmentNo = deptno;

        let tempArr = [...empDataArr]
        dataServiceObj.add(tempObj).then((resData) => {
            alert("New Employee Details added to Server");
            getData_btnClick();
            clearFields();
        });
    }

    function deleteData_btnClick(eid){
        dataServiceObj.del(eid).then((resData) => {
            alert("Employee details are deleted from Server");
            getData_btnClick();             
        });
    }

    function selectData_btnClick(eid){
        dataServiceObj.getById(eid).then((resData) => {
            let tempObj = resData.data;
            setEmpid(tempObj.EmpID);
            setEname(tempObj.EmpName);
            setJob(tempObj.Job);
            setSal(tempObj.Salary);
            setDeptno(tempObj.DepartmentNo);
        });
    }

    function updateData_btnClick(){
        let tempArr = {};
        tempArr.EmpName = ename;
        tempArr.Job = job;
        tempArr.Salary = sal;
        tempArr.DepartmentNo = deptno;

        dataServiceObj.update(tempArr,tempArr.EmpID).then((resData) => {
            alert("Employee details are updated in Server");
            getData_btnClick(); 
            clearFields();
        });
    }

    return(
        <>
        <div>
                <input type="text" placeholder="Employee Id" value={empid} onChange={(e)=>setEmpid(e.target.value)}/>&nbsp;
                <input type="text" placeholder="Employee Name" value={ename} onChange={(e)=>setEname(e.target.value)}/>&nbsp;
                <input type="text" placeholder="Job" value={job} onChange={(e)=>setJob(e.target.value)}/>&nbsp;
                <input type="text" placeholder="Sal" value={sal} onChange={(e)=>setSal(e.target.value)}/>&nbsp;
                <input type="text" placeholder="Department Number" value={deptno} onChange={(e)=>setDeptno(e.target.value)}/>
        </div> 
        <br/>
        <button onClick={getData_btnClick}>{btnName}</button>&nbsp;
        <button onClick={addData_btnClick}>Add Data</button>&nbsp;
        <button onClick={updateData_btnClick}>Update Data</button>&nbsp;
        <br/>
        <br/>
        {
            isTableShown ? 
            <table class="tableData">
                <tr>
                    <th class="tableData-col">Employee Id</th>
                    <th class="tableData-col">Employee Name</th>
                    <th class="tableData-col">Job</th>
                    <th class="tableData-col">Salary</th>
                    <th class="tableData-col">Department Number</th>
                    <th class="tableData-col" colspan="2">Operations</th>
                </tr>
                {resArr}
            </table> : null
        }
        </>
    );
}
export default EmpJsonServer;