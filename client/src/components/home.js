import React from 'react';
import Button from 'react-bootstrap/Button'
import {Jumbotron} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import banner from '../assets/banner2.png'
import halal from '../assets/halal.png'
import kualitas from '../assets/kualitas.png'
import murah from '../assets/murah.png'


class Home extends React.Component {

	render(){
		return ( 
			<>

			<Jumbotron className="jumbohome">
			  
			</Jumbotron>

			<Container fluid>
			  <Row className="row">
			    <Col className="col">
				    <h2 className="judul_about center" >
				    	About Us
				    </h2>
				    <hr/>
			    </Col>
			  </Row>

			  <Row className="row">
			    <Col className="col" sm={2}>
			    {/* 
			    	
			     */}

			    </Col>
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
			</Container>

			<Container fluid>
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


			</>
		)
	}
}

export default Home;