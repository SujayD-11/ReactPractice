import {useState} from 'react';
import './Q1.css';
function Q1(){
    //state variables for fields
    const [pname,setPname] = useState("");
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);
    
    const[res,setRes] = useState(0.0);

    function btnClick(){
        let t = price*qty;
        if(qty >= 10 && qty <20){
            t = t*0.95;
        }
        else if(qty >= 20 && qty <30){
            t = t*0.90;
            alert(t);
        }
        else if(qty >= 30){
            t = t*0.85;
        }
        setRes(t);
    }
    function clearValues(){
        setPname("");
        setPrice(0.0);
        setQty(0);
        setRes(0);
    }
    return(
        <>
            <table>
                <tr><td>Product Name</td><td>: <input placeholder="Product Name" value={pname} type="text" onChange={(e)=>setPname(e.target.value)} /></td></tr>
                <tr><td>Product Price</td><td>: <input placeholder="Product Price" value={price} type="number" step="any" onChange={(e)=>setPrice(e.target.value)} /></td></tr>
                <tr><td>Product Quantity</td><td>: <input placeholder="Product Quantity" value={qty} type="number" onChange={(e)=>setQty(e.target.value)} /></td></tr>
                <tr><td colspan="2"><button class="calc" onClick={btnClick}>Calculate</button></td></tr>
                <tr><td colspan="2"><button class="calc" onClick={clearValues}>Clear</button></td></tr>
                <tr></tr>
                <tr></tr>
                <tr><td colspan="2">{res}</td></tr>
            </table>

        </>
    );
}
export default Q1;