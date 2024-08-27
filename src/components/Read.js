import { getDatabase, ref, get } from "firebase/database";
import React, { useState } from "react";
import app from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db,"nature/fruits");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
        setFruitArray(Object.values(snapshot.val()))
    } else {
        console.log("No data available")
    }
  }
  return (
    <div>
      <h1>READ PAGE</h1>
      <button onClick={fetchData}> DISPLAY DATA </button>
      <ul>
        {fruitArray.map((item,index)=> (
            <li key={index}>
                {item.fruitName} : {item.fruitDefinition}
            </li>
        ))}
      </ul>
      <br /><br /><br />
      <button className="button1" onClick={()=> navigate('/')}>GO HOMEPAGE</button> <br />
      <button className="button1" onClick={()=> navigate('/update')}>GO UPDATE PAGE</button>
    </div>
  );
}
