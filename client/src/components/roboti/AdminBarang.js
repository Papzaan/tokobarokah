//halaman untuk melihat list barang
//cardI, cardImg, cardItem, cardTitle, cardHarga
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import ajwa from '../../assets/kurmaajwa.png'
class AdminBarang extends React.Component {

	render() {
		return ( 
			<>
			<Container className="ListBarang" id="barang">
                

                <Row className="row">
			        <Col className="col" sm={2}></Col>
			            <Col className="col" sm={8}>
						<br/><br/><br/><br/><br/>	
						<h2 className="judulPage" >
				    	    List Barang
				        </h2>
							<a class="btn btn-success" data-toggle="modal" data-target="#myModalAdd" href="AdminAddBarang" >Add New</a>
    						<table class="table table-striped" id="mytable">
                                <thead className="kepala">
                                    <tr>
                                        <th scope="col">No</th> {/*cardI, cardImg, cardItem, cardTitle, cardHarga*/}
                                        <th scope="col">Nama Barang</th>
                                        <th scope="col">Harga Barang</th>
                                        <th scope="col">Img Barang</th>
										<th scope="col">Stok Barang</th>
										<th scope="col">Aksi</th>
                                    </tr>
                                </thead>
								<tbody id="tampil_data">
									{/* tempat isi data nanti */}
									{/* {{#each results}} */}
										<tr>
											<td>1</td>
											<td>Kurma</td>
											<td>7000</td>
											<td><img src={ajwa} height="10%"/></td>
											<td>30</td>
											<td>
											<a class="btn btn-sm btn-info edit" href="AdminEditBrg">Edit</a>
											<a href="#" class="btn btn-sm btn-danger delete" onclick="return confirm('Are you sure you want to delete?')">Delete</a>
											</td>
										</tr>
										
									{/* {{/each}} */}
								</tbody>
                            </table>
			            </Col>
			        <Col className="col" sm={2}></Col>
			    </Row>


				{/* modal form */}
				
            </Container>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			</>
		)
	}
}

export default AdminBarang;