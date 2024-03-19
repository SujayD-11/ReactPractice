import { useState } from "react";
import { dataServiceObj } from "../../services/data.service";


function DeptsJsonServer() {
    const [deptsArray, setDeptsArray] = useState([]);

    // For reading data from user through textboxes
    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    function getDeptsButton_click() {

        dataServiceObj.getAll().then((resData) => {
            setDeptsArray(resData.data);
        });
    }

    function addDeptButton_click() {
        let deptObj = {};
        deptObj.Deptno = deptno;
        deptObj.Dname = dname;
        deptObj.Loc = loc;

        dataServiceObj.add(deptObj).then((resData) => {
            alert("New Dept added to Server");
            getDeptsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setDeptno("");
        setDname("");
        setLoc("");
    }


    function deleteDept_click(dno) {
        dataServiceObj.del(dno).then((resData) => {
            alert("Dept details are deleted from Server");
            getDeptsButton_click(); // get the latest data from server            
        });

    }

    function selectDept_click(dno) {

        dataServiceObj.getById(dno).then((resData) => {
            let deptObj = resData.data;
            setDeptno(deptObj.Deptno);
            setDname(deptObj.Dname);
            setLoc(deptObj.Loc);
        });
    }

    function updateDeptButton_click() {
        let deptObj = {};
        deptObj.Deptno = deptno;
        deptObj.Dname = dname;
        deptObj.Loc = loc;

        dataServiceObj.update(deptObj,deptObj.Deptno).then((resData) => {
            alert("Dept details are updated in Server");
            getDeptsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = deptsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.Deptno}  </td>
            <td>   {item.Dname}  </td>
            <td>   {item.Loc}  </td>
            <td>
                <a onClick={() => selectDept_click(item.Deptno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteDept_click(item.Deptno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>Perform CRUD Operations with Department Data using JSON-Server in React Application</h3>
        <hr />

        <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <input type="text" placeholder="Dept Name" value={dname} onChange={(e) => setDname(e.target.value)} />
        <input type="text" placeholder="Dept Location" value={loc} onChange={(e) => setLoc(e.target.value)} />
        <hr />

        <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
        <input type="button" onClick={addDeptButton_click} value="Add Dept" />
        <input type="button" onClick={updateDeptButton_click} value="Update Dept" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Dept Number</th>
                <th>Dept Name</th>
                <th>Location</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default DeptsJsonServer;