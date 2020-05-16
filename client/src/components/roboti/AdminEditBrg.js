//halaman Admin edit brg
//cardI, cardImg, cardItem, cardTitle, cardHarga
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
class AdminEditbrg extends React.Component {

	render() {
		return ( 
			<>
			<Container className="AddBrg" id="id_formbrg">
				
				<Row className="row">
					<Col className="col" sm={2}></Col>
						<Col className="col" sm={8}>
							<br/>
							<br/>
							<br/>
							<br/><br/>
				<Row className="row">
				    <Col className="col">
					    <h2 className="Inputbrg" >
					    	Edit Barang
					    </h2>
					    <hr className="hrbarang"/>
				    </Col>
				</Row>
				
				<Form className="namabrg">
				 	<Form.Group as={Row} controlId="cardTitle">
					    <Form.Label column md={5} className="labelnama">
					      Nama Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Nama barang" className="isiLabel" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="cardHarga">
					    <Form.Label column md={5} className="labelhrg">
					      Harga Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Harga Barang" className="isiLabel" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="cardItem">
					    <Form.Label column md={5} className="labeljm">
					      Jumlah Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Jumlah Barang" className="isiLabel" />
					    </Col>
					</Form.Group>
					
					<Form.Group as={Row} controlId="cardImg">
					    <Form.Label column md={5} className="labelimg">
					      Masukan Gambar Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="file" className="isifile" id="img" name="img" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row}>
					    <Col md={{ span: 10, offset: 2 }}>
					      <Button type="submit" className="btnInput">Masukan</Button>
					    </Col>
					</Form.Group>
				</Form>
							</Col>
					<Col className="col" sm={2}></Col>
				</Row>
				
            </Container>
			</>
		)
	}
}

export default AdminEditbrg;