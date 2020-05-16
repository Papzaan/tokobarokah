import React from 'react';
import Button from 'react-bootstrap/Button'
import {Jumbotron} from 'react-bootstrap'
import {Pagination, Container, Row, Col, Card, Form, FormControl} from 'react-bootstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import banner from '../assets/bannerfix.png'
import halal from '../assets/halal.png'
import kualitas from '../assets/kualitas.png'
import murah from '../assets/murah.png'
import sukari from '../assets/sukari.png'
import habbat from '../assets/habbat.png'
import almond from '../assets/almond.jpg'
import himalaya from '../assets/himalaya.png'
import madu from '../assets/madusarang.jpg'
import ajwa from '../assets/kurmaajwa.png'
import StarRating from './StarRating'

class Home extends React.Component {

	render(){
		return ( 
			<>
			{/* Start jumbotron*/}

			<Container fluid className="bannerContaint">
				<Row>
					<Col>
						<img src={banner} className="banner" />
					</Col>
				</Row>
			</Container>

			
			
			{/* End Jumbotron*/}

			{/* Start About*/}

			<Container className="aboutContain" id="about">
			  <Row className="row">
			    <Col className="col">
				    <h2 className="judulPage" >
				    	About Us
				    </h2>
				    <hr className="hrJudul"/>
			    </Col>
			  </Row>

			  <Row className="row">
			    <Col className="col">
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
			  </Row>
			
			</Container>

			{/* End About*/}

			{/* Start Product*/}

			<Container className="productContain" id="product">

			  <Row className="row" >
			  	<Col>
			  		<h2 className="judulPage" >
				    	Our Product
				    </h2>
				    <hr className="hrJudul"/>
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

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={almond} className="cardImg" />
					  <Card.Body className="cardItem">
					      <Card.Title>
					      <h3 className="cardTitle"> 
					      	Kacang Almond 1 kg
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp120.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					   		<Row>
					        	<Col sm={3}>
					        		<a className="cartplus" href="https://www.w3schools.com">
								   	  <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								   	</a>
					        	</Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					        </Row>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={himalaya} className="cardImg" />
					  <Card.Body className="cardItem">
					  	<Card.Title>
					      <h3 className="cardTitle"> 
					      	Garam Himalaya 1 Kg
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp40.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					    <Row>
					        <Col sm={3}>
					        	<a className="cartplus" href="https://www.w3schools.com">
								   <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								</a>
					        </Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					    </Row>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={habbat} className="cardImg" />
					  <Card.Body className="cardItem">
					  	<Card.Title>
					      <h3 className="cardTitle"> 
					      	Habbatussauda 120 Kapsul
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp30.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					   		<Row>
					        	<Col sm={3}>
					        		<a className="cartplus" href="https://www.w3schools.com">
								   	  <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								   	</a>
					        	</Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					        </Row>
					   </Card.Footer>
				   </Card>
			    </Col>

			  </Row>

			  <Row className="row">

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={madu} className="cardImg" />
					  <Card.Body className="cardItem">
					  	<Card.Title>
					      <h3 className="cardTitle"> 
					      	Madu Sarang 500 gr
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp90.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					     <Row>
					        	<Col sm={3}>
					        		<a className="cartplus" href="https://www.w3schools.com">
								   	  <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								   	</a>
					        	</Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					     </Row>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={sukari} className="cardImg" />
					  <Card.Body className="cardItem">
					  	<Card.Title>
					      <h3 className="cardTitle"> 
					      	Kurma Sukari 1 Kg
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp50.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					    <Row>
					        	<Col sm={3}>
					        		<a className="cartplus" href="https://www.w3schools.com">
								   	  <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								   	</a>
					        	</Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					    </Row>
					   </Card.Footer>
				   </Card>
			    </Col>

			    <Col lg={4}>
			      <Card className="cardI">
				      <Card.Img src={ajwa} className="cardImg" />
					  <Card.Body className="cardItem">
					  	<Card.Title>
					      <h3 className="cardTitle"> 
					      	Kurma Ajwa 1 Kg
					      </h3>
					      </Card.Title>
					      <Card.Text className="cardHarga">
					        <p>
					        	Rp200.000
					        </p>
					        <Row>
					        	<Col className="stock">
					        		Stok
					        	</Col>

					        	<Col>
					        		<p className="Tstok">
					        			50
					        		</p>
					        	</Col>
					        </Row>
					        <Row>
					        	<Col>
					        	<StarRating/>
					        	</Col>
					        </Row>
					      </Card.Text>
					   </Card.Body>
					   <Card.Footer className="cardFoot">
					    	<Row>
					        	<Col sm={3}>
					        		<a className="cartplus" href="https://www.w3schools.com">
								   	  <FontAwesomeIcon icon={faCartPlus} size="2x"/>
								   	</a>
					        	</Col>

					        	<Col sm={9}>
					     			<Button className="btnPesan">Beli Sekarang</Button>
					        	</Col>
					        </Row>
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