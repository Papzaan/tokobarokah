import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'



class Footer extends React.Component {

	render(){
		return ( 
			<>
			
			<Container fluid className="footer">
			  <Row className="row">

			    <Col className="col">
				    <p className="pFooter"> 

				    &copy; Copyright 2020 | built by.
				    <a href="http://instagram.com/aansanova"> Aan Sanova</a>,
				    <a href="http://instagram.com/hanifabdi_30"> Hanif Abdillah</a>,
				    <a href="http://instagram.com/sipitchan_"> Mahesa Darma</a>.

				    </p>
				</Col>
			    
			  </Row>

			</Container>


			</>
		)
	}
}

export default Footer;