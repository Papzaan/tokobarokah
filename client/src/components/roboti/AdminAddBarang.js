import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
//import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

function AdminAddBarang(props) {
	const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [SoldValue, setSoldValue] = useState(1)

	const [Images, setImages] = useState([])
	
	const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onSoldChange = (event) => {
        setSoldValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !SoldValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            sold: SoldValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

	return (
		<div>
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
					    	Input Barang
					    </h2>
					    <hr className="hrbarang"/>
				    </Col>
				</Row>

				<Form onSubmit={onSubmit} >
				 	<Form.Group as={Row} controlId="namabrg">
					    <Form.Label column md={2} className="labelnama">
					      Nama Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Nama barang" className="isiLabel" />
					    </Col>
					</Form.Group>

					    <Form.Label column md={2} className="labelnama">
					      Deskripsi
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="text" placeholder="Deskripsi" className="isiLabel" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="hrgbrg">
					    <Form.Label column md={2} className="labelhrg">
					      Harga Barang
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
		</div>
	)
}

export default AdminAddBarang