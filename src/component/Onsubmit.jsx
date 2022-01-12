import { useEffect, useState } from "react";

function Onsubmit() {
  const [indexing, setIndexing] = useState(1);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [statesetvalue,setStatesetvalue] = useState([])
  const [statevalue,setStatevalue] = useState([])
  const [totalinput, setTotalinput] = useState(["color","size"]);
  const [isActive, setIsactive] = useState(true);
  const [isActive1, setIsactive1] = useState(true);
const arr = ["color","size","material"];


  useEffect(() => {
    // if (totalinput.length == 0) {
    //   totalinput.push("color");
    //   console.log(totalinput);
    // // }
    // if (isActive == false && isActive1 == true) {
    //   totalinput.push("size");
    //   console.log(totalinput);
    // }
    // if (isActive1 == false) {
    //   totalinput.push("material");
    //   console.log(totalinput);
    // }
    let unique1 = totalinput.filter((o) => arr.indexOf(o) === -1);
    let unique2 = arr.filter((o) => totalinput.indexOf(o) === -1);
    const statesetvalue = unique1.concat(unique2);
    setStatesetvalue(statesetvalue)
  },[totalinput]);
  function Submitcolor() {
    // console.log(value)
    const item = value.split(",").filter((x) => x !== "");

    setItem(item);
  }
  function SubmitcolorSize() {
    const item1 = value1.split(",").filter((x) => x !== "");
    const item = value.split(",").filter((x) => x !== "");
    setTotalinput("size");
    setItem(item);
    setItem1(item1);
  }
  function SubmitcolorSizeMaterial() {
    const item2 = value2.split(",").filter((x) => x !== "");
    const item1 = value1.split(",").filter((x) => x !== "");
    const item = value.split(",").filter((x) => x !== "");
    setTotalinput("material");
    setItem(item);
    setItem1(item1);
    setItem2(item2);
    console.log(totalinput);
  }
  return (
    <>
    
      <h1>On Submit</h1>
      <div>
      {totalinput.map((id, index) => {
        // console.log(id);
        // console.log(index);
        // console.log(statesetvalue[index]);
       return( <div>
          <label>{id}</label>
          <input value={statevalue[index]} onChange={(e)=>{
              const temp = [...statevalue];
              temp[index] = e.target.value;
              setStatevalue(temp);
              console.log(statevalue)
          }}/>

         
        </div>)
      })}
        <button onClick={() =>setTotalinput(statesetvalue[0])} >{
         statesetvalue[0]

          }</button>
       <button>submit</button>
      </div>

      {/* {isActive ? (
        <div className="container">
          <label>color</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setIsactive(!isActive)}>Add Size</button>
          <button onClick={Submitcolor}>Sumbit</button>
        </div>
      ) : isActive1 ? (
        <div className="container">
          <div>
            <label>color</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button>Delete</button>
          </div>
          <div>
            <label>Size</label>
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
            <button>Delete</button>
          </div>

          <button onClick={() => setIsactive1(!isActive1)}>Add Material</button>
          <button onClick={SubmitcolorSize}>Sumbit</button>
        </div>
      ) : (
        <div className="container">
          <div>
            <label>color</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button>Delete</button>
          </div>
          <div>
            <label>Size</label>
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
            <button>Delete</button>
          </div>
          <div>
            <label>Material</label>
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
            <button>Delete</button>
          </div>
          <button onClick={SubmitcolorSizeMaterial}>Sumbit</button>
        </div>
      )} */}

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
export default Onsubmit;
