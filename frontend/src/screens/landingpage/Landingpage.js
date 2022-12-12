import React from 'react';
import "./landingpage.css";
import {Container,Row,Button} from 'react-bootstrap';
const Landingpage = () => {
  return (<div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className="title">Welcome to Pokedex</h1>
                        <p className='subtitle'>Gotta catch em all !</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button size='lg' className='landingbutton' >
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button size='lg' className='landingbutton' variant='outline-primary' >
                                Sign up
                            </Button>
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  );

}

export default Landingpage;