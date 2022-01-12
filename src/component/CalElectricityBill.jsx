import { useState } from "react"

function CalElectricityBill(){
    const[unit,setUnit] = useState(0);
    const[totalamount,setTotalamount] = useState("");
    function CalculateBill (){
        console.log(unit);
        if (unit < 100){
            setTotalamount(unit*10);
        }else if(unit < 200){
            setTotalamount((100*10)+((unit-100)*15))
        }else if(unit < 300){
            setTotalamount((100*10)+(100*15)+((unit-200)*20))
        }else{
            setTotalamount(unit*25)
        }
    }
    return(
        <>
        <h1>Calculate Bill</h1>
        <input type="text" value={unit} onChange={(e)=>setUnit(e.target.value)} />
        <button onClick={CalculateBill}>Calculate Bill</button>
        <h1>Your Total Amount is - {totalamount} </h1>
        </>
    )
}
export default CalElectricityBill