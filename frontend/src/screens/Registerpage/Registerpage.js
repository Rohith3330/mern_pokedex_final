import React from 'react'
import {Button,Col,Form,FormControl,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'
import MainScreen from '../../components/MainScreen'
import Loading from '../../components/Loading'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Registerpage = () => {
  const nav=useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const[homepage,setHome]=useState(false);
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(false);
  const submitHandler= async(e)=>{
    e.preventDefault();
    if(password!==confirmpassword){
      setMessage("Passwords do not match");
    }
    else{
      setMessage(null);
      try{
        const config={
          baseURL: "//localhost:5000",
          origin: true,
          withCredentials: false,
          headers:{
            "Content-type":"application/json"
          }
        };
        setLoading(true);
        const {data}= await axios.post(
          "/api/users",
          {name,email,password,pic,roll,branch},
          config
        );
        setLoading(false);
        localStorage.setItem('UserInfo',JSON.stringify(data));
        setHome(true);
      }
      catch(error){
          setError(error.message);
      }
    }
    console.log(roll);
  }
  return (
    <MainScreen title="REGISTER">
      <div className='loginContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {loading && <Loading/>}
        {homepage&&nav("/login")}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <FormControl
              type="name"
              value={name}
              placeholder='Enter NAME'
              onChange={(e)=>setName(e.target.value)}
              />
          </Form.Group> 

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              // onChange={(e) => postDetails(e.target.files[0])}   
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            /> */}
          {/* </Form.Group> */}
          <Form.Group controlId="Roll">
            <Form.Label>Roll NO</Form.Label>
            <FormControl
              type="roll"
              value={roll}
              placeholder='Enter Roll NO'
              onChange={(e)=>setRoll(e.target.value)}
              />
          </Form.Group> 
          <Form.Group controlId="branch">
            <Form.Label>Branch</Form.Label>
            <FormControl
              type="name"
              value={branch}
              placeholder='Enter Branch'
              onChange={(e)=>setBranch(e.target.value)}
              />
          </Form.Group> 
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>

      </div>

    </MainScreen>
  )
}

export default Registerpage