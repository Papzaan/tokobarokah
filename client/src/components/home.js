import React from 'react';
import Button from 'react-bootstrap/Button'
import {Jumbotron} from 'react-bootstrap'
import {Pagination, Container, Row, Col, Card, Form, FormControl} from 'react-bootstrap'
import banner from '../assets/banner2.png'
import halal from '../assets/halal.png'
import kualitas from '../assets/kualitas.png'
import murah from '../assets/murah.png'
import sukari from '../assets/sukari.png'
import habbat from '../assets/habbat.png'
import almond from '../assets/almond.jpg'
import himalaya from '../assets/himalaya.png'
import oil from '../assets/olive oil.jpg'
import madu from '../assets/madusarang.jpg'
import ajwa from '../assets/kurmaajwa.png'
import kismis from '../assets/kismis.png'

class Home extends React.Component {

	render(){
		return ( 
			<>
			{/* Start jumbotron*/}

			<Jumbotron className="jumbohome"></Jumbotron>
			
			{/* End Jumbotron*/}

			{/* Start About*/}

			<Container className="aboutContain" id="about">
			  <Row className="row">
			    <Col className="col">
				    <h2 className="judulPage" >
				    	About Us
				    </h2>
				    <hr/>
			    </Col>
			  </Row>

			  <Row className="row">
			    <Col className="col" sm={2}></Col>
			    <Col className="col" sm={8}>
			    	<p className="txtabout">
			    		Toko barokah merupakan e-commerce yang dibangun pada tahun 2020, oleh 3 orang mahasiswa Institut Teknologi Sumatera 
			    		(ITERA) dari program studi Teknik Informatika. Kami menjual berbagai produk atau makanan sehat dengan harga yang 
			    		terjangkau, halal, dan berkualitas. Selain itu, kami juga melayani pemesanan produk dalam jumlah besar atau ingin 
			    		dipasarkan kembali, dengan harga yang relatif lebih murah dari harga biasanya. <br/><br/> Produk yang kami jual antara lain kurma, 
			    		chia seeds, habbatusauda, madu, kacang almond, kismis, virgin oil, dan produk lainnya. Jika terdapat produk yang ingin 
			    		isarankan pada kami agar kami dapat menjualnya, silakan kirimkan pesan kepada kami dengan menghubungi contact yang telah
			    		kami sediakan. Thank you and happy shopping!
			    	</p>
			    </Col>
			    <Col className="col" sm={2}></Col>
			  </Row>
			
			  <Row className="row" sm={6}>

			    <Col className="col" sm={4}>
				    <img className="halal" src={halal}/>
				</Col>

			    <Col className="col" sm={4}>
				    <img className="murah" src={murah}/>
			    </Col>

			    <Col className="col" sm={4}>
				    <img className="kualitas" src={kualitas}/>
			    </Col>
			    
			  </Row>

			  <Row className="row" sm={6}>

			    <Col className="col" sm={4}>
				    <p className="pLabel1">
				    	Produk Halal
				    </p>
				</Col>

			    <Col className="col" sm={4}>
				    <p className="pLabel2">
				    	Produk Terjangkau
				    </p>
			    </Col>

			    <Col className="col" sm={4}>
				    <p className="pLabel3">
				    	Produk Berkualitas
				    </p>
			    </Col>
			    
			  </Row>

			</Container>

			{/* End About*/}

			{/* Start Product*/}

			<Container className="productContain">

			  <Row className="row">
			  	<Col>
			  		<h2 className="judulPage" >
				    	Our Product
				    </h2>
				    <hr/>
			  	</Col>
			  </Row>

			  <Row className="row">
			  	<Col>
					<Form inline className="formSearch">
					   	<FormControl type="text" placeholder="Input Product" className="mr-sm-2" />
					    <Button className="btnSearch">Search</Button>
					</Form>
			  	</Col>
			  </Row>


			  <Row className="row">

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={almond} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Kacang Almond 1 kg</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp120.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={himalaya} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Garam Himalaya</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp40.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={habbat} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Habbatussauda 120 Kapsul</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp30.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={kismis} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Kismis Gold 1 Kg</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp70.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			  </Row>

			  <Row className="row">

			  	<Col>
			      <Card className="cardI">
				      <Card.Img src={oil} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Bertoli Extra Virgin Olive Oil 500 ml</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp80.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={madu} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Madu Sarang 500 gr</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp90.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={sukari} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Kurma Sukari 1 Kg</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp50.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col>
			      <Card className="cardI">
				      <Card.Img src={ajwa} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title className="cardTitle">Kurma Ajwa 1 Kg</Card.Title>
					      <Card.Text className="cardHarga">
					        Rp200.000
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <small className="text-muted">Last updated 3 mins ago</small>
					   </Card.Footer>
				   </Card>
			    </Col>

			  </Row>

				<Row className="row">
				  	<Col>
				  		
				  		<Pagination className="classPagin justify-content-center">
						  <Pagination.First />
						  <Pagination.Prev />
						  <Pagination.Item>{1}</Pagination.Item>
						  <Pagination.Ellipsis />

						  <Pagination.Item>{10}</Pagination.Item>
						  <Pagination.Item>{11}</Pagination.Item>
						  <Pagination.Item active>{12}</Pagination.Item>
						  <Pagination.Item>{13}</Pagination.Item>
						  <Pagination.Item disabled>{14}</Pagination.Item>

						  <Pagination.Ellipsis />
						  <Pagination.Item>{20}</Pagination.Item>
						  <Pagination.Next />
						  <Pagination.Last />
						</Pagination>

				  	</Col>
				</Row>

			</Container>

		{/* End Product */}



			</>
		)
	}
}

export default Home;