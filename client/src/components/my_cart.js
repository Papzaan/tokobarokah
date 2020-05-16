import React from 'react';
import {Container, Row, Col, Table, Pagination, Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import ajwa from '../assets/kurmaajwa.png'
import almond from '../assets/almond.jpg'


class Cart extends React.Component {

	render() {
		return ( 
			<>
			<Container className="cartContaint">
				<Row>
					<Col className="col">
					    <h2 className="teamJudul" >
					    	My Cart
					    </h2>
					    <hr className="hrJudul"/>
				    </Col>
				</Row>

				<Row>
					<Col>
						<Table striped bordered className="tableCart">
						  <thead className="theadCart">
						    <tr>
						      <th>Produk</th>
						      <th>Deskripsi</th>
						      <th>Harga</th>
						      <th>Jumlah Produk</th>
						      <th>Aksi</th>
						    </tr>
						  </thead>
						  <tbody className="tbodyCart">
						    <tr>
						      <td className="cartProduk">
						      	<img src={ajwa} className="cartImg" />
						      </td>
						      <td className="cartDesk">
						      	Kurma Ajwa 1 Kg
						      </td>
						      <td className="cartHarga">
						      	200.000
						      </td>
						      <td className="cartTotal">
						      	<Form className="totalForm">
							 	  <Form.Group as={Row} controlId="jumproduk">
								      <Form.Control type="text" placeholder="1" className="cartLabel" />
								  </Form.Group>
								</Form>
						      </td>
						      <td className="cartAksi">
						      	<Row>
						      		<Col md={3}>
								      	<a href="https://www.w3schools.com">
										   	<FontAwesomeIcon icon={faTrash} size="2x" className="cartDel"/>
										</a>
						      		</Col>

						      		<Col md={8}>
										<Button className="btnCheck">Checkout</Button>
						      		</Col>
						      	</Row>
						      </td>
						    </tr>
						    <tr>
						      <td className="cartProduk">
						      	<img src={almond} className="cartImg" />
						      </td>
						      <td className="cartDesk">
						      	Kacang Almond 1 kg
						      </td>
						      <td className="cartHarga">
						      	360.000
						      </td>
						      <td className="cartTotal">
						      	<Form className="totalForm">
							 	  <Form.Group as={Row} controlId="jumproduk">
								      <Form.Control type="text" placeholder="3" className="cartLabel" />
								  </Form.Group>
								</Form>
						      </td>
						      <td className="cartAksi">
						      	<Row>
						      		<Col md={3}>
								      	<a href="https://www.w3schools.com">
										   	<FontAwesomeIcon icon={faTrash} size="2x" className="cartDel"/>
										</a>
						      		</Col>

						      		<Col md={8}>
										<Button className="btnCheck">Checkout</Button>
						      		</Col>
						      	</Row>
						      </td>
						    </tr>
						    <tr>
						      <td className="cartProduk">
						      	<img src={ajwa} className="cartImg" />
						      </td>
						      <td className="cartDesk">
						      	Kurma Ajwa 1 Kg
						      </td>
						      <td className="cartHarga">
						      	200.000
						      </td>
						      <td className="cartTotal">
						      	<Form className="totalForm">
							 	  <Form.Group as={Row} controlId="jumproduk">
								      <Form.Control type="text" placeholder="1" className="cartLabel" />
								  </Form.Group>
								</Form>
						      </td>
						      <td className="cartAksi">
						      	<Row>
						      		<Col md={3}>
								      	<a href="https://www.w3schools.com">
										   	<FontAwesomeIcon icon={faTrash} size="2x" className="cartDel"/>
										</a>
						      		</Col>

						      		<Col md={8}>
										<Button className="btnCheck">Checkout</Button>
						      		</Col>
						      	</Row>
						      </td>
						    </tr>
						  </tbody>
						</Table>
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
			</>
		)
	}
}

export default Cart;