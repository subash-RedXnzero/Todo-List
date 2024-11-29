'use client';
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]); // Initialize as an empty array

  const submit = (e) => {
    e.preventDefault();
    // Add new task to the mainTask array
    setMainTask([...mainTask, { title, description }]);
    console.log(mainTask); // This will log the previous state due to batching in React, consider using a useEffect if needed
    setTitle(""); // Clear the title input
    setDescription(""); // Clear the description input
  };


  let deleteHandler =(i)=>{
let CopyTAsk =[...mainTask]
CopyTAsk.splice(i,1)
setMainTask(CopyTAsk)
  }

 if (mainTask.length>0){ 
  var renderTask = mainTask.length > 0 ? mainTask.map((t, i) => (
    <div key={i} className="task-container flex justify-between text-lg mt-8">
      <h5>{t.title}</h5>
      <p>{t.description}</p>
      <button className='bg-red-500   ' onClick={()=>{deleteHandler(i)}
    }> Delete </button>
    </div>
  )) : <h1>No Task Available</h1>;

  
 }
 else{
  console.log("error")
 }
  return (
    <>
      <h1 className="text-5xl text-center mt-11 font-bold">MY NEW PROJECT</h1>
      
      <form onSubmit={submit} className="flex flex-col items-center">
        {/* Title */}
        <input 
          type="text" 
          className="h-10 rounded w-11/12 sm:w-96 text-2xl py-2 ps-4 text-black mt-12" 
          placeholder="Title Here" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        {/* Description */}
        <input 
          type="text" 
          className="h-10 rounded text-2xl w-11/12 sm:w-96 py-2 ps-4 mt-4 text-black" 
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="bg-red-500 h-10 w-28 rounded mt-4">
          Submit
        </button>
      </form>
      
      {/* Display Tasks */}
      <div className="flex items-center justify-center mt-12   h-dvh">
        <div className="bg-slate-500  w-5/6 p-8 rounded border-s-blue-800  h-dvh border-teal-900 border-t-8 border-s-8 border-e-blue-400 border-e-8 border-b-8 border-b-fuchsia-600">
          <div className="text-5xl text-center">
            {renderTask}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
