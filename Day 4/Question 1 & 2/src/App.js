import logo from './logo.svg';
import './App.css';
import DeptsJsonServer from './components/department/DeptsJsonServer';
import EmpJsonServer from './components/employees/EmpJsonServer';

function App() {
  return (
    <>
    <h1>Employee Details - CRUD Operations</h1>
    <EmpJsonServer></EmpJsonServer>
    </>
  );
}

export default App;
