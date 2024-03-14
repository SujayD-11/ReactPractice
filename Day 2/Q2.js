import './App.css';
import img from './logo.svg'

function Q2(){
    return (
        <>
        <div class="center">
        <h3>Image Display</h3>
        </div>
        <div align="center">
          <img class="img" src={img} alt="Image" height={300} width={300}/>
        </div>
        </>
      );
}
export default Q2;