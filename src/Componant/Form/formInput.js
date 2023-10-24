import './formInput.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formInput.css'
import { Col, Row } from 'react-bootstrap';
import React , {useState} from 'react';

function FormInput({AddItem}) {
    const [qoustion , setQoustion] = useState("")
    const [anser , setAnser] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
            AddItem(qoustion,anser)
            setQoustion('');
            setAnser('')
    }



    return (
      <Row>
         <Form onSubmit={handelSubmit}>
            <Row>

                <Col sm={12} md={5}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                         value={qoustion}
                          type="Qoustion" onChange={ (e) => {setQoustion(e.target.value)}}
                           placeholder="السؤال" /> 
                    </Form.Group>
                </Col>
                
                <Col sm={12} md={5}>
                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Control value={anser}
                          onChange={ (e) => {setAnser(e.target.value)}}
                           placeholder="الاجابة" />
                    </Form.Group>
                </Col>
                    
                    
                <Col sm={12} md={2} >
                    <Button className="btnAdd w-100 " type="submit">
                        اضافة
                    </Button>
                </Col>

            </Row>
           
         </Form>
      
      </Row>
    );
  }
  
  export default FormInput;
  