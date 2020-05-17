import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import Input from 'antd';
import FileUpload from '../../utils/FileUpload'
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
		Axios.post('product/uploadProduct', variables)
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
							<hr/>
							<hr/><hr/>
							<hr/>				
				<Row className="row">
				    <Col className="col">
					    <h2 className="Inputbrg" >
					    	Input Barang
					    </h2>
					    <hr className="hrContact"/>
				    </Col>
				</Row>

				<Form onSubmit={onSubmit} >
					{/* DropZone */}
					<FileUpload refreshFunction={updateImages} />

				 	<Form.Group as={Row} controlId="namabrg">
					    <Form.Label column md={2} className="labelnama">
					      Nama Barang
					    </Form.Label>
					    <Col md={4}>
						<Input onChange={onTitleChange} value={TitleValue}/>
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="deskripsi">
					    <Form.Label column md={2} className="labelnama">
					      Deskripsi
					    </Form.Label>
					    <Col md={4}>
						<Input onChange={onDescriptionChange} value={DescriptionValue}/>
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="hrgbrg">
					    <Form.Label column md={2} className="labelhrg">
					      Harga Barang
					    </Form.Label>
					    <Col md={4}>
						<Input onChange={onPriceChange} value={PriceValue}/>
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="jmbrg">
					    <Form.Label column md={2} className="labeljm">
					      Jumlah Barang
					    </Form.Label>
					    <Col md={4}>
						<Input onChange={onSoldChange} value={SoldValue}/>
					    </Col>
					</Form.Group>
					
					<Form.Group as={Row} controlId="imgbrg">
					    <Form.Label column md={2} className="labelimg">
					      Masukan Gambar Barang
					    </Form.Label>
					    <Col md={4}>
					      <Form.Control type="file" className="isifile" id="img" name="img" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row}>
					    <Col md={{ span: 10, offset: 2 }}>
						<Button onClick={onSubmit}  >  Submit  </Button>
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
