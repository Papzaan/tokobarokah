//halaman untuk melihat list barang
//cardI, cardImg, cardItem, cardTitle, cardHarga

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
                                    </tr>
                                </thead>
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