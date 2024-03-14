import './App.css';

function Q1() {
  let eid = "DAS-I-101";
  let ename = "Sujay";
  let job = " DAS Innovation Intern";
  let salary = 10000;
  let dept = "Enabling Areas";
  return(
    <>
    <div class="center">
      <h1>Employee Details</h1>
    </div>
    <table class="empTable center">
      <tr class="empTable-row">
        <th class="empTable-col">Employee ID</th>
        <td class="empTable-col">{eid}</td>
      </tr>
      <tr class="empTable-row">
        <th class="empTable-col">Employee Name</th>
        <td class="empTable-col">{ename}</td>
      </tr>
      <tr class="empTable-row">
        <th class="empTable-col">Job Details</th>
        <td class="empTable-col">{job}</td>
      </tr>
      <tr class="empTable-row">
      <th class="empTable-col">Salary</th>
      <td class="empTable-col">{salary}</td>
      </tr>
      <tr class="empTable-row">
        <th class="empTable-col">Department</th>
        <td class="empTable-col">{dept}</td>
      </tr>
    </table>
    </>
 );
}
export default Q1;