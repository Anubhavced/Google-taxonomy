import { Button } from "@shopify/polaris";
import { useEffect, useState } from "react";
import data from "./data.txt";
function SetHierarchy() {
  const [once, setOnce] = useState(true);
  const [max, setMax] = useState(0);
  const [dynamic, setDynamic] = useState([]);
  const [displayHide, setDisplayHide] = useState("");
  const [fmax, setFmax] = useState([]);
  const [arrdata, setArrdata] = useState([]);
  const [arrdata1, setArrdata1] = useState([]);
  const [arrdata2, setArrdata2] = useState([]);
  const [display, setdisplay] = useState("");
  const [display1, setdisplay1] = useState("");
  const [display2, setdisplay2] = useState("");
  const [display3, setdisplay3] = useState("");
  const [display4, setdisplay4] = useState("");
  const [display5, setdisplay5] = useState("");
  const [show, setShow] = useState(false);
  let arr = [];
  useEffect(() => {
    fetch(data)
      .then((response) => response.text())
      .then((data) => {
        arr = data.split("\n");
        setArrdata(arr);
      });
  }, []);
  // useEffect(()=>{

  // },[display1])
  useEffect(() => {
    for (var i = 0; i < max - 2; i++) {
      dynamic.push("");
    }
  }, [max]);
  function handleclick() {
    arrdata.map((i) => {
      arrdata1.push(i.split(">"));
      let ap = i.split(">");
      let aps = ap.length;
      fmax.push(aps);
    });
    for (var i = 0; i < arrdata1.length; i++) {
      if (arrdata1[i].length == 1) {
        arrdata2.push(arrdata1[i][0].split("-")[1]);
      }
    }
    setShow(true);
  }
  fmax.map((i) => {
    i > max && setMax(i);
  });
  return (
    <>
   <div>      
     <h1>Google Taxonomy</h1>
<Button primary onClick={() => {
          handleclick();
        }}>Show</Button>
      <br/>
      {show ? (
        <select
          onChange={(e) => {
            setdisplay(e.target.value);
            setdisplay1("");
            setdisplay2("");
            setdisplay3("");
            setdisplay4("");
            setdisplay5("");
          }}
        >
          <option>Select option</option>
          {arrdata2.map((i, key) => {
            return (
              <option key={key} value={i}>
                {i}
              </option>
            );
          })}
        </select>
      ) : null}
      {display ? (
        display == "Select option" ? (
          (setdisplay(""),
          setdisplay1(""),
          setdisplay2(""),
          setdisplay3(""),
          setdisplay4(""))
        ) : (
          <select
            onChange={(e) => {
              setdisplay1(e.target.value);
              setdisplay2("");
              setdisplay3("");
              setdisplay4("");
              setdisplay5("");
            }}
          >
            <option>Select option</option>
            {arrdata1
              .filter((index) => index.length == max - 5)
              .map((i, key) => {

                return i[0].split("-")[1].trim() == display.trim() ? (
                  
                  <option key={key} value={i[1]}>
                    {i[1]}
                  </option>
                ) : null;
              })}
          </select>
        )
      ) : null}
      {display1 ? (
        display1 == "Select option" ? (
          (setdisplay1(""), setdisplay2(""), setdisplay3(""), setdisplay4(""))
        ) : (
          <select
            onChange={(e) => {
              setdisplay2(e.target.value);
              setdisplay3("");
              setdisplay4("");
              setdisplay5("");
            }}
          >
            <option>Select option</option>
            {arrdata1
              .filter((index) => index.length == max - 4)
              .map((i, key) => {
                return i[1].trim() == display1.trim() ? (
                  console.log(i[2].length),
                  !i[2] && setdisplay1(""),
                  <option key={key} value={i[2]}>
                    {i[2]}
                  </option>
                ) : null;
              })}
          </select>
        )
      ) : null}
      {display2 ? (
        display2 == "Select option" ? (
          (setdisplay2(""), setdisplay3(""), setdisplay4(""))
        ) : (
          <select
            onChange={(e) => {
              setdisplay3(e.target.value);
              setdisplay4("");
              setdisplay5("");
            }}
          >
            <option>Select option</option>
            {arrdata1
              .filter((index) => index.length == max - 3)
              .map((i, key) => {
                return i[2].trim() == display2.trim() ? (
                  <option key={key} value={i[3]}>
                    {i[3]}
                  </option>
                ) : null;
              })}
          </select>
        )
      ) : null}
      {display3 ? (
        display3 == "Select option" ? (
          (setdisplay3(""), setdisplay4(""))
        ) : (
          <select
            onChange={(e) => {
              setdisplay4(e.target.value);
              setdisplay5("");
            }}
          >
            <option>Select option</option>
            {arrdata1
              .filter((index) => index.length == max - 2)
              .map((i, key) => {
                return i[3].trim() == display3.trim() ? (
                  <option key={key} value={i[4]}>
                    {i[4]}
                  </option>
                ) : null;
              })}
          </select>
        )
      ) : null}
      {display4 ? (
        display4 == "Select option" ? (
          setdisplay4("")
        ) : (
          <select onChange={(e) => setdisplay5(e.target.value)}>
            <option>Select option</option>
            {arrdata1
              .filter((index) => index.length == max - 1)
              .map((i, key) => {
                return i[4].trim() == display4.trim() ? (
                  <option key={key} value={i[5]}>
                    {i[5]}
                  </option>
                ) : null;
              })}
          </select>
        )
      ) : null}
      </div>

    </>
  );
}
export default SetHierarchy;
