import { getDatabase, ref, get, remove } from "firebase/database";
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
        const data = snapshot.val();
        const temporaryArray = Object.keys(data).map( fireId => {
            return {
                ...data[fireId],
                fruitId:fireId
            }
        });

        setFruitArray(temporaryArray)
    } else {
        console.log("No data available")
    }
  }

  const deleteFruit = async (fruitIdParam) => {
    const db = getDatabase(app);
    const dbRef = ref(db,"nature/fruits/"+fruitIdParam);
    await remove(dbRef);

    setFruitArray(prevArray => prevArray.filter(item => item.fruitId !== fruitIdParam));

  }

  return (
    <div>
      <h1>UPDATE PAGE</h1>
      <button onClick={fetchData}> DISPLAY DATA </button>
      <ul>
        {fruitArray.map((item,index)=> (
            <li key={index}>
                <div className="list-container">
                <div>
                    {item.fruitName} : {item.fruitDefinition} : {item.fruitId}
                </div>
                <div className="button-container">
                <button className="button1 updateButton" onClick={()=> navigate(`/updateWrite/${item.fruitId}`)}>UPDATE</button>
                <button className="button2 updateButton" onClick={()=> deleteFruit(item.fruitId)}>DELETE</button>
                </div>
                </div>
            </li>
        ))}
      </ul>
      <button className="button1" onClick={()=> navigate('/')}>GO HOMEPAGE</button> <br />
      <button className="button1" onClick={()=> navigate('/read')}>GO READ PAGE</button>
    </div>
  );
}
