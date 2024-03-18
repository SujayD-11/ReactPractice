import {useState} from 'react';
import './Q2.css';

function Q2(){
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
        let tempArr = [
            {"EmpID":1,"EmpName":"Sujay","Job":"Intern","Salary":"10000","DepartmentNo":"4"},
            {"EmpID":2,"EmpName":"Tanvi","Job":"FTE","Salary":"30000","DepartmentNo":"4"},
            {"EmpID":3,"EmpName":"Tejas","Job":"Intern","Salary":"15000","DepartmentNo":"6"},
            {"EmpID":4,"EmpName":"Shruti","Job":"FTE","Salary":"30000","DepartmentNo":"1"},
            {"EmpID":5,"EmpName":"Adarsh","Job":"FTE","Salary":"5000","DepartmentNo":"3"}
        ];
        if(!isTableShown){
            setBtnName("Hide Data");
        }
        else{
            setBtnName("Get Data");
        } 
        setEmpDataArr(tempArr); 
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
        tempArr.push(tempObj);
        setEmpDataArr(tempArr);
        clearFields();
    }

    function deleteData_btnClick(eid){
        let tempArr = [...empDataArr];

        let index = empDataArr.findIndex(item => item.EmpID == eid);
        tempArr.splice(index,1);

        setEmpDataArr(tempArr);
    }

    function selectData_btnClick(eid){
        let tempObj = empDataArr.find(item => item.EmpID == eid);
        setEmpid(tempObj.EmpID);
        setEname(tempObj.EmpName);
        setJob(tempObj.Job);
        setSal(tempObj.Salary);
        setDeptno(tempObj.DepartmentNo);
    }

    function updateData_btnClick(){
        let tempArr = [...empDataArr];

        let index = tempArr.findIndex(item=>item.EmpID == empid);
        tempArr[index].EmpName = ename;
        tempArr[index].Job = job;
        tempArr[index].Salary = sal;
        tempArr[index].DepartmentNo = deptno;

        setEmpDataArr(tempArr);
        clearFields();

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
export default Q2;