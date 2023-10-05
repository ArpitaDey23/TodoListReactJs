import React, { useEffect, useState } from 'react';
//import "./todo.css";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items , setItems] = useState([])
    const handleItems=()=>{
     if(!inputData){
       alert('fill it');
     }else{
        const myNewInputData={
            id: new Date().getTime().toString(),
            name : inputData,
        }
        setItems([...items,myNewInputData]);
         setInputData('');
     }
    }
    const handleDelete =(Index)=>{
        const updatedItem = items.filter((curEle)=>{
            return curEle.id !== Index;
        });
        setItems(updatedItem);
    }
    const handleReset =()=>{
        setItems([]);
    }
     useEffect(()=>{
        
    },[items])
  return (
    <div>
        <div className="mx-auto p-2" style={{width: "300px"}}>
            <div  style={{marginLeft:"100px"}}>
      <img src='https://i.ibb.co/w7sBhWD/list-paper-note-office-stationery-spiral-notebook-538002-1684.jpg' alt='todo' style={{height:"50px"}}/>
      </div>
      <div  style={{marginLeft:"50px"}}>
      <p>Add your List here ✌</p>
      </div>
      <div style={{display:"flex"}}>
      <input  type='text' placeholder='✍Add item...' 
      value={inputData} onChange={(e)=>setInputData(e.target.value)}
      style={{marginLeft:"35px"}}/>
       <i className="fa-solid fa-plus" onClick={handleItems}></i>
       </div>
       {items.map((curEle,Index)=>{
       return(  
       <>
       <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"pink", marginTop:"20px"}} key={Index}>
        <input type='checkbox'/>
        <p>{curEle.name}</p>
        <i className="fa-solid fa-trash" onClick={()=>handleDelete(curEle.id)}></i>
        </div>
        
        </>
       )
       })}
      <div>
        <button onClick={handleReset} style={{marginTop:"20px", marginLeft:"80px" }}>Check List</button>
        </div>
       </div>
    </div>
  )
}

export default Todo
