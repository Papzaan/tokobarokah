import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import aan from '../assets/aans.jpg'
import hanif from '../assets/imtentang3.jpg'
import mahesa from '../assets/mahesa.jpeg'

class Contact extends React.Component {

	render(){
		return ( 
			<>
			
			<Container className="teamContain">
				  <Row className="row">
				    <Col className="col">
					    <h2 className="teamJudul" >
					    	Developer Team
					    </h2>
					    <hr className="hrJudul"/>
				    </Col>
				  </Row>

				  <Row className="row">
				    <Col className="col" lg={4}>

					   <Card className="cardTeam">
					      <Card.Img src={aan} className="imgTeam" />
						  <Card.Body className="cardItem">
						      <Card.Title className="titleTeam">Aan Sanova</Card.Title>
						      <Card.Text className="infoTeam">
						        <h4> Back End Developer </h4>
						      </Card.Text>
						   </Card.Body>
						   <Card.Footer className="footTeam">
						     <a className="iconIg" href="https://www.w3schools.com">
						   	  	<FontAwesomeIcon icon={faInstagram} size="2x"/>
						   	  </a>
						   	  <a className="iconLinked" href="https://www.w3schools.com">
						      	<FontAwesomeIcon icon={faLinkedin} size="2x" />
						   	  </a>
						   	  <a className="iconGit" href="https://www.w3schools.com">   	  	
						      	<FontAwesomeIcon icon={faGithub} size="2x" />
						   	  </a>
						   </Card.Footer>
					   </Card>

				    </Col>

				    <Col className="col" lg={4}>
				    	
					   <Card className="cardTeam">
					      <Card.Img src={hanif} className="imgTeam" />
						  <Card.Body className="cardItem">
						      <Card.Title className="titleTeam">Hanif Abdillah</Card.Title>
						      <Card.Text className="infoTeam">
						        <h4> Front End Developer </h4>
						      </Card.Text>
						   </Card.Body>
						   <Card.Footer className="footTeam">
						      <a className="iconIg" href="https://www.w3schools.com">
						   	  	<FontAwesomeIcon icon={faInstagram} size="2x"/>
						   	  </a>
						   	  <a className="iconLinked" href="https://www.w3schools.com">
						      	<FontAwesomeIcon icon={faLinkedin} size="2x" />
						   	  </a>
						   	  <a className="iconGit" href="https://www.w3schools.com">   	  	
						      	<FontAwesomeIcon icon={faGithub} size="2x" />
						   	  </a>
						   </Card.Footer>
					   </Card>

				    </Col>

				    <Col className="col" lg={4}>
				    	
				       <Card className="cardTeam">
					      <Card.Img src={mahesa} className="imgTeam" />
						  <Card.Body className="cardItem">
						      <Card.Title className="titleTeam">Mahesa Darma</Card.Title>
						      <Card.Text className="infoTeam">
						        <h4> Database Administrator </h4>
						      </Card.Text>
						   </Card.Body>
						   <Card.Footer className="footTeam">
						   	  <a className="iconIg" href="https://www.w3schools.com">
						   	  	<FontAwesomeIcon icon={faInstagram} size="2x"/>
						   	  </a>
						   	  <a className="iconLinked" href="https://www.w3schools.com">
						      	<FontAwesomeIcon icon={faLinkedin} size="2x" />
						   	  </a>
						   	  <a className="iconGit" href="https://www.w3schools.com">   	  	
						      	<FontAwesomeIcon icon={faGithub} size="2x" />
						   	  </a>
						   </Card.Footer>
					   </Card>

				    </Col>
				  </Row>

				  <Row className="row">
				    <Col className="col">
					    <h2 className="contactJudul" >
					    	Contact Us
					    </h2>
					    <hr className="hrContact"/>
				    </Col>
				 </Row>

				 <Form className="contactForm">
				 	  <Form.Group as={Row} controlId="contactName">
					    <Form.Label column md={2} className="labelContact">
					      Nama
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Nama anda" className="isiLabel" />
					    </Col>
					  </Form.Group>

					  <Form.Group as={Row} controlId="contactEmail">
					    <Form.Label column md={2} className="labelContact">
					      Email
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="email" placeholder="Alamat email" className="isiLabel" />
					    </Col>
					  </Form.Group>

					  <Form.Group as={Row} controlId="contactPesan">
					    <Form.Label column md={2} className="labelContact">
					      Pesan
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control as="textarea" placeholder="Isi pesan" className="isiLabel" />
					    </Col>
					  </Form.Group>
					 

					  <Form.Group as={Row}>
					    <Col md={{ span: 10, offset: 2 }}>
					      <Button type="submit" className="btnContact">Kirim Pesan</Button>
					    </Col>
					  </Form.Group>
					</Form>


			</Container>

			</>
		)
	}
}

export default Contact;