import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { firebaseId } = useParams();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  useEffect(()=> {
    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db,"nature/fruits/"+firebaseId);
        const snapshot = await get(dbRef);
    
        if (snapshot.exists()) {
            const targetObject = snapshot.val();
            setInputValue1(targetObject.fruitName)
            setInputValue2(targetObject.fruitDefinition)
        } else {
            console.log("No data available")
        }
      }
      fetchData();
  },[firebaseId])

  const overWriteData = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db,"nature/fruits/"+firebaseId)
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
      <h1>UPDATE WRITE PAGE</h1>
      <input type="text" value={inputValue1} onChange={(e)=> { setInputValue1(e.target.value)}} /> &nbsp;
      <input type="text" value={inputValue2} onChange={(e)=> { setInputValue2(e.target.value)}} />

      <br /><br />


      <button onClick={overWriteData}>UPDATE DATA</button>
      <br /><br /><br />
      <button className="button1" onClick={()=> navigate('/update')}>GO UPDATE PAGE</button> <br />
      <button className="button1" onClick={()=> navigate('/read')}>GO READ PAGE</button>
    </div>
  );
}
