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
  import axios from "axios"

export const Formulario = () => {

  
  const FixerUrl = `http://data.fixer.io/api/latest?access_key=c4a8674392c7f1aa0cc5f2b1e72293ae
  `

  const [ valor, setValor ] = useState("1")
  const [ moedaDe, setMoedaDe ] = useState("BRL")
  const [ moedaPara, setMoedaPara ] = useState("USD")
  const [ exibirSpinner, setExibirSpinner ] = useState(false)
  const [ formValidar, setFormValidar ] = useState(false)
  const [ exibirModal, setExibirModal ] = useState(false)
  const [ resultadoConversao, setResultadoConversao ] = useState("")
  const [ exibirMsgErro, setExibirMsgErro ] = useState(false)

  function handleValor(event){
    setValor(event.target.value.replace(/\D/g, ""))
  }

  function handleMoedaDe(event){
    setMoedaDe(event.target.value)
  }

  function handleMoedaPara(event){
    setMoedaPara(event.target.value)
  }

  function handleFecharModal(event){
    setValor("1")
    setMoedaDe("BRL")
    setMoedaPara("USD")
    setFormValidar(false)
    setExibirModal(false)
  }

  function converter(event){

    event.preventDefault()
    setFormValidar(true)

    if(event.currentTarget.checkValidity() === true){
      // implementar a chamada do fixer
      setExibirSpinner(true)
      axios.get(FixerUrl)
      .then(res => {
        const cotacao = obterCotacao(res.data)
        if(cotacao) {
        setResultadoConversao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`)
        setExibirModal(true)
        setExibirSpinner(false)
        setExibirMsgErro(false)
      } else {
        exibirErro()
      }
      }).catch(err => exibirErro())
    }
  }

  function obterCotacao(dadosCotacao) {
    if(!dadosCotacao || dadosCotacao.success !== true){
      return false
    } 
    const cotacaoDe = dadosCotacao.rates[moedaDe]
    const cotacaoPara = dadosCotacao.rates[moedaPara]
    const cotacao = ( 1 / cotacaoDe * cotacaoPara) * valor
    return cotacao.toFixed(2)
  }

  function exibirErro(){
    setExibirMsgErro(true)
    setExibirSpinner(false)
  }

    return(
      <>
      <Alert variant="danger" show={exibirMsgErro} style={{width: "210px", textAlign: "center"}} >
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
              <Button variant="success" data-testid="btn-converter" type="submit"
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
        <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {resultadoConversao}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
        </Card>
        
        </>
    )
}