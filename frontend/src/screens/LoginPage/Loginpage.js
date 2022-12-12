import React, { useEffect, useState} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import './Loginpage.css';
import axios from 'axios';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {useNavigate} from 'react-router-dom';
const Loginpage = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [id,setid]=useState("");
    const [message, setMessage] = useState(null);
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const[homepage,setHome]=useState(false);
    useEffect(()=>{

    },[])
    const submitHandler= async(e)=>{
        e.preventDefault();

        try{
            const config={
              baseURL: "//localhost:5000",
              origin: true,
              withCredentials: false,
              headers:{
                "Content-type":"application/json"
              }
            }
            setLoading(true);
            
            console.log(email);
            console.log(password);
            const { data } = await axios.post("/api/users/login",
            {
                email,
                password,  
            },
            config  
            );
            console.log("debug")
            console.log(data);
            localStorage.setItem('UserInfo',JSON.stringify(data));
            setLoading(false);
            setHome(true);
            setid(data._id);
        }
        catch(error){
            setError(error.response);
            setLoading(false);
            setMessage(error.response.data.message)
            console.log(error.response.data);
        }
      }
  return (

    <MainScreen title="LOGIN">
         <div className="loginContainer">
            {loading && <Loading/>}
            {/* {error && <ErrorMessage/>} */}
            {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
            {homepage && id && navigate(`/view/${id}`)}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='emaill'>Email address</Form.Label>
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
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default Loginpage