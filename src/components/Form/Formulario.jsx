import React, { useState } from "react";
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
  import ListarMoedas from "../ListarMoedas/ListarMoedas"

export const Formulario = () => {

  const [ valor, setValor ] = useState("1")
  const [ moedaDe, setMoedaDe ] = useState("BRL")
  const [ moedaPara, setMoedaPara ] = useState("USD")
  const [ exibirSpinner, setExibirSpinner ] = useState(false)
  const [ formValidar, setFormValidar ] = useState(false)

  function handleValor(event){
    setValor(event.target.value.replace(/\D/g, ""))
  }

  function handleMoedaDe(event){
    setMoedaDe(event.target.value)
  }

  function handleMoedaPara(event){
    setMoedaPara(event.target.value)
  }

  function converter(event){
    event.preventDefault()
    setFormValidar(true)
    if(event.currentTarget.checkValidity() === true){
      // implementar a chamada do fixer
    }
  }

    return(
      <>
      <Alert variant="danger" show={true} style={{width: "210px", textAlign: "center"}} >
        Tente novamente
      </Alert>
        <Card 
        style={{
          marginTop:"20px", 
          width: "60%", 
          height: "300px",
          background: "#E9ECEF"
          }}>
        
        <Form onSubmit={converter} noValidate validated={formValidar}>
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
              value={valor}
              onChange={handleValor}
              required
              style={{width:"210px"}}
              >
              </Form.Control>
            </Col>
            <Col sm="3">
              <Form.Control
              as="select"
              value={moedaDe}
              onChange={handleMoedaDe}
              style={{width:"210px", marginTop:"20px"}}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop: "5px"}}>
              <FontAwesomeIcon  icon={faAngleDoubleDown}
              style={{width:"210px", marginTop:"20px"}}
              />
            </Col>
            <Col sm="3">
              <Form.Control 
              as="select"
              style={{width:"210px", marginTop:"20px"}}
              value={moedaPara}
              onChange={handleMoedaPara}
              >
                <ListarMoedas />
                </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit"
              style={{width:"210px", marginTop:"20px"}}
              >
              <span className={exibirSpinner ? "hidden" : null}>  
                Converter
              </span>
              <span className={exibirSpinner ? null : "hidden"}>
              <Spinner animation="border" size="sm" />
              </span>
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