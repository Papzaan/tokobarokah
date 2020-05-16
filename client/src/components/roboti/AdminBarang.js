//halaman untuk melihat list barang
//cardI, cardImg, cardItem, cardTitle, cardHarga
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
class AdminBarang extends React.Component {

	render() {
		return ( 
			<>
			<Container className="ListBarang" id="barang">
                {/* <Row className="row">
			        <Col className="col">
						<hr/>
				        <hr/>
			        </Col>
			    </Row> */}

                <Row className="row">
			        <Col className="col" sm={2}></Col>
			            <Col className="col" sm={8}>
						<hr/>
				        <hr/><hr/>
				        <hr/>	
						<h2 className="judulPage" >
				    	    List Barang
				        </h2>
							<button class="btn btn-success" data-toggle="modal" data-target="#myModalAdd" href="bukalapak.com" >Add New</button>
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
											<td>foto kurma</td>
											<td>30</td>
											<td>
											<a href="#" class="btn btn-sm btn-info edit">Edit</a>
											<a href="#" class="btn btn-sm btn-danger delete">Delete</a>
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
			</>
		)
	}
}

export default AdminBarang;