import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Form,FormControl,Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import "./details.css"
const Details = (_) => {
  // console.log(window.location.pathname);
  const State=useLocation();
  // console.log("hereee")??
  // console.log(State)
  const id=State.pathname.split("/").pop();
  console.log(id);
  const [getuserdata,Setgetdata]=useState([]);
  // const [username,Setname]=useState("");
  const Getdata = async(e)=>{
    if(!getuserdata.data){
      try{
        const config={
          baseURL: "//localhost:5000",
          origin: true,
          withCredentials: false,
          headers:{
            "Content-type":"application/json"
          }
      }
      console.log("here1");
        const Data= await axios.get(`/api/users/getuser/${id}`,config);
        // data={Data}
        console.log("there1");
        // console.log(Data);
        Setgetdata(Data);
        // Setsafe(true);
      }
      catch(error){
        console.log(error.response.data);
      }
    }
    }
    
  useEffect(() => {
    const getUsers = async () => {
      console.log("loaded");
      await Getdata();
    };
    getUsers();
  })
  if(!getuserdata.data)return <div>Loading</div> 
  return (
    <div className="container mt-3">
      <br/>
      <div id="c">
        <h1>Welcome {getuserdata.data.name}</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className='loginContainer'>
        <Form>
          <FormControl type="text" placeholder="Collection Name" classname="mr-sm-2"/>
        </Form>
        <br/>
        <Button variant="primary" type="submit">
            Create
          </Button>
      </div>
    </div>
  )
}

export default Details