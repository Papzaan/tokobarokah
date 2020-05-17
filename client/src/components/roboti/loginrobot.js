//login admin
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

class loginrobot extends React.Component{
    render() {
		return (
            <>
                <Container className="ListBarang" id="barang">
                

                <Row className="row">
			        <Col className="col" sm={2}></Col>
			            <Col className="col" sm={8}>
						<br/><br/><br/><br/><br/>	
						<h2 className="judulPage" >
				    	    Login Admin
				        </h2>
                        <form action="/action_page.php" method="post">
                            <div class="imgcontainer">
                                <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
                            </div>
                            <div class="container">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required/>

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required/>
                                    
                                <button type="submit">Login</button>
                                <label>
                                <input type="checkbox" checked="checked" name="remember"/> Remember me
                                </label>
                            </div>

                            <div class="container" style="background-color:#f1f1f1">
                                <button type="button" class="cancelbtn">Cancel</button>
                                <span class="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </form>
			            </Col>
			        <Col className="col" sm={2}></Col>
			    </Row>
				
            </Container>
            </>
        )
    }
}
export default loginrobot;