//halaman untuk melihat list barang
//cardI, cardImg, cardItem, cardTitle, cardHarga
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
class AdminBarang extends React.Component {

	render() {
		return ( 
			<>
			<Container className="ListBarang" id="barang">
                <Row className="row">
			        <Col className="col">
				        <h2 className="judulPage" >
				    	    List Barang
				        </h2>
				        <hr/>
			        </Col>
			    </Row>

                <Row className="row">
			        <Col className="col" sm={2}></Col>
			            <Col className="col" sm={8}>
                            <table className="table table-sm table-bordered" id="ListBarang">
                                <thead className="kepala">
                                    <tr>
                                        <th scope="col">No</th> {/*cardI, cardImg, cardItem, cardTitle, cardHarga*/}
                                        <th scope="col">Nama Barang</th>
                                        <th scope="col">Harga Barang</th>
                                        <th scope="col">Img Barang</th>
										<th scope="col">Aksi</th>
                                    </tr>
                                </thead>
								<tbody id="tampil_data">
									{/* tempat isi data nanti */}

								</tbody>
                            </table>
			            </Col>
			        <Col className="col" sm={2}></Col>
			    </Row>

            </Container>
			</>
		)
	}
}

export default AdminBarang;