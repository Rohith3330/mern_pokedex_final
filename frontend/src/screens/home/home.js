import React, { useEffect, useState } from 'react';
import "./home.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Link } from 'react-router-dom'
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const nav=useNavigate();
  // const data;  
  const [getuserdata,Setgetdata]=useState([]);
  const getdata = async(e)=>{
    try{
      const config={
        baseURL: "//localhost:5000",
        origin: true,
        withCredentials: false,
        headers:{
          "Content-type":"application/json"
        }
    }
    console.log("here");
      const Data= await axios.get("/api/users/retrive",config);
      // data={Data}
      console.log("there");
      // console.log(Data);
      Setgetdata(Data);
      // Setsafe(true);
    }
    catch(error){
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    const getUsers = async () => {
      console.log("loaded");
      await getdata();
    };
    getUsers();
  },[])
  return (
    // {getdata},
  
  <div className='mt-5'>
    {/* <button className='btn btn-primary' onClick={getdata}>this</button> */}
    <div className='container'>
      <div className='add_btn mt-2'>
        <button className='btn btn-primary'><Link to="/register">Register Here</Link></button>
      </div>
      <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Branch</th>
      <th scope="col">Roll.No</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>     
      { getuserdata.data &&
      getuserdata.data.map((element,id) => {
        return(
        <tr>
        <th scope="row">{id+1}</th>
        <td>{element.name}</td> 
        <td>{element.email}</td>
        <td>{element.branch}</td>
        <td>{element.roll}</td>
        <td className='d-flex justify-content-between'>
          <Link to={`/view/${element._id}`}><button className='btn btn-success'>read</button></Link>
          <button className='btn btn-primary'>update</button>
          <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        )

      })        
      } 
      {/* console.log(element); */}
        
    
    </tbody>
</table>
    </div>
  </div>        
  );

}

export default Home;