import React from "react";
import { 
    Button,
    Form,
    Col,
    Spinner,
    Card
  } from "react-bootstrap"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

export const Formulario = () => {
    return(
        <Card style={{marginTop:"40px", width: "100%", height: "300px"}}>
        <Form>
          <Form.Label 
          style={{
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center"
            }}>
            <Col sm="3" style={{marginTop: "30px"}}>
              <Form.Control 
              placeholder="0"
              value={1}
              required
              />
            </Col>
            <Col sm="3" style={{marginTop: "5px"}}>
              <Form.Control
              as="select"
              />
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop: "5px"}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select" />
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit">Converter
              <Spinner animation="border" size="sm" />
              </Button>
            </Col>
          </Form.Label>
        </Form>
        </Card>
    )
}