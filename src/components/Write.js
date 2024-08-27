import React, { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db,"nature/fruits"))
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2
    }).then(()=> {
      alert("data saved successfully!!")
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>HOME/WRITE PAGE</h1>
      <input type="text" value={inputValue1} onChange={(e)=> { setInputValue1(e.target.value)}} /> &nbsp;
      <input type="text" value={inputValue2} onChange={(e)=> { setInputValue2(e.target.value)}} />

      <br /><br />


      <button onClick={saveData}>SAVE DATA</button>
      <br /><br /><br />
      <button className="button1" onClick={()=> navigate('/update')}>GO UPDATE PAGE</button> <br />
      <button className="button1" onClick={()=> navigate('/read')}>GO READ PAGE</button>
    </div>
  );
}
