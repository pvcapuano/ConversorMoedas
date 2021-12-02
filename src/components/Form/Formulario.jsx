import React from "react";
import { 
    Button,
    Form,
    Col,
    Spinner,
    Card,
    Alert,
    Modal
  } from "react-bootstrap"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"

export const Formulario = () => {
    return(
      <>
      <Alert variant="danger" show={true} >
        Tente novamente
      </Alert>
        <Card 
        style={{
          marginTop:"20px", 
          width: "60%", 
          height: "300px",
          background: "#E9ECEF"
          }}>
        
        <Form>
          <Form.Label 
          style={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"flex-start",
            justifyContent:"space-between"
            }}>
            <Col sm="3">
              <Form.Control 
              placeholder="0"
              value={1}
              required
              style={{width:"200px"}}
              />
            </Col>
            <Col sm="3">
              <Form.Control
              as="select"
              style={{width:"200px", marginTop:"20px"}}
              />
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop: "5px"}}>
              <FontAwesomeIcon  icon={faAngleDoubleDown}
              style={{width:"200px", marginTop:"20px"}}
              />
            </Col>
            <Col sm="3">
              <Form.Control 
              as="select"
              style={{width:"200px", marginTop:"20px"}}
              />
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit"
              style={{width:"200px", marginTop:"20px"}}
              >Converter
              <Spinner animation="border" size="sm" />
              </Button>
            </Col>
          </Form.Label>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversão
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
        </Card>
        
        </>
    )
}