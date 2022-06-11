import React,{useState} from 'react';
export default function Demo(){
    const [data,setData]=useState("");
    const updateData=e=>{
         setData(e.target.value);
         console.log(e.target.value);
    }
    return (
        <div className='Demo'>
            <h3>Demo1 file</h3>
            <input   onChange={updateData}/>
        </div>
    );
}