import React, { useState } from "react";
import StaffingResource from "./Componets/StaffingResource";
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./Componets/Dashboard";


function App() {

const [name , setName] = useState('');
const [file , setFile] = useState(null);
const [tech , setTech] = useState([]);



  function handleChange(e){
    setName(e.target.value);
  }

  function handleFileChange(e){
    setFile(e.target.files[0]);
  }

  function handleTechChange(e){
      const {value, checked} = e.target;
      if(checked){
        setTech(prev=>{
          return [...prev, value];
        })
      }
      else{
        setTech(prev=>{
          return prev.filter(elem=>{
            return value != elem;
          })
        })
      }
  }


  function handleSubmit(e){
    const formdata = new FormData();
    formdata.append('name',name);
    formdata.append('file',file);
    formdata.append('tech',tech);
    
    axios.post("http://localhost:5000/api/add", formdata)
        .then(res => { 
          console.log(res.statusText)
        })
    .catch(err=>console.log(err)); 

    setName("");
    setFile(null);
    setTech([]);
    e.preventDefault();

  }






  return (

    <div className="App">


    <BrowserRouter>
      <Routes>
        <Route path="/" element={
                          <StaffingResource
                          handleChange={handleChange}
                          handleTechChange={handleTechChange}
                          handleFileChange={handleFileChange}
                          handleSubmit={handleSubmit}
                          name={name}
                          />
                        }/>
        <Route path="/dashboard" element={<Dashboard
                                              
                                          />}/>
      </Routes>
    </BrowserRouter>




    </div>

  );
}

export default App;
