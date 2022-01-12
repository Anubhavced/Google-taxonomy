import { useEffect, useState } from "react";

function Dynamicinput() {
  const [value1, setValue1] = useState([]);
  const [value, setValue] = useState([[]]);
  const [arr, setArr] = useState([0]);
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [display, setDisplay] = useState(true);
  const [label, setLabel] = useState(["color", "size", "material"]);
  const [isActive, setIsactive] = useState(true);
  const [isActive1, setIsactive1] = useState(true);
  const [isActive2, setIsactive2] = useState(false);
useEffect(()=>{
console.log(arr)
},[arr])
  function InputChange(e, key) {
    const value = e.target.value;
    const clone = [...value];
    // console.log(clone);
    clone[key] = value.split(",");
    // console.log(clone[key]);
    setValue(clone[key]);
    // console.log(value);
  }
  function HandleClick() {
    console.log(isActive)
    if (isActive == true) {
      setIsactive(!isActive);
      arr.push(1);
    } else if (isActive1 == true) {
      setIsactive1(!isActive1);
      arr.push(2);
    }else if(isActive1 == false){
        setIsactive2(!isActive2);
        arr.push(0);
    }
  }
  function HandleSubmit() {
    // console.log(value1);
    setDisplay(value1);
    setItem(value1[0]);
    setItem1(value1[1]);
    setItem2(value1[2]);
    //    const arrsplit = value1.split(",").filter((x) => x !== "");
    //    console.log(display)
  }
  //   Deleteinputfield(key)
    function Deleteinputfield(key){
  console.log(key)
  console.log(arr)
  setDisplay(true);
if(key == 0){
    // setDisplay(!display)
    setIsactive2(!isActive2);
    // console.log(isActive2);
}
if(key == 1){
  // setDisplay(!display);
  setIsactive(!isActive)
}
if(key==2){
  // setDisplay(!display);
  setIsactive1(!isActive1)
}
//   setArr(prevState => prevState.filter((arr, i) => arr[i] !== index))
  const arr1=[];
  for(var i=0;i<arr.length;i++){
if( i !== key){
    arr1.push(arr[i])
}
  }
  console.log(arr1)
  setArr(arr1)
  console.log(arr)
    }
  return (
    <>
      <h1>Dynamic</h1>
      <div>
        {
        console.log(arr),
        arr.map((index, key) => {
          //    console.log(index)
        //   console.log(key);
          return (
            <div key={key}>
              <label>{label[arr[key]]}</label>
              <input
                type="text"
                onChange={(e, index) => {
                  InputChange(e, key);
                }}
                onBlur={(e) => {
                  value1.push(value);
                }}
              />
              <button
                onClick={() => 
                  Deleteinputfield(key)}
              >
                delete
              </button>
            </div>
          );
        })}
    { display ? (
       <button onClick={HandleClick}>
           {isActive2 ? label[0] : isActive ? label[1] : isActive1 ? label[2] : setDisplay(false)}
       </button>
        ) : null
    }

        {/* {display ? (
          <button onClick={HandleClick}>
            {isActive ? label[1] : isActive1 ? label[2] : setDisplay(false)}
          </button>
        ) : null} */}

        <button onClick={HandleSubmit}>Submit</button>
        {/* <h1>{display}</h1> */}
      </div>
      <div>
        {item.map((i, id) => {
          return isActive ? (
            <div className="data">
              <h3>{i.toUpperCase()}</h3>
            </div>
          ) : (
            item1.map((j, id1) => {
              return isActive1 ? (
                <div className="data">
                  <h3>
                    {i.toUpperCase()} {j.toUpperCase()}
                  </h3>
                </div>
              ) : (
                item2.map((k, id2) => {
                  return (
                    <div className="data">
                      <h3>
                        {" "}
                        {i.toUpperCase()} {j.toUpperCase()} {k.toUpperCase()}
                      </h3>
                    </div>
                  );
                })
              );
            })
          );
        })}
      </div>
    </>
  );
}
export default Dynamicinput;
