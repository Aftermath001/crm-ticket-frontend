import React,{useState, useEffect} from 'react'
import './ticket.css'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.js'
import {Container, Row, Col, Button} from 'react-bootstrap'
import tickets from '../../assets/data/dummy.json'
import MessageHistory from '../../components/messageHistory/MessageHistory'
import ReplyTicket from '../../components/replyTicket/ReplyTicket'

const ticket = tickets[0];
const Ticket = () => {
    const [message, setMessage] = useState("")
    useEffect(() => {},[message])

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }
    const handleOnSubmit = (e) => {
        alert("Form submitted")
    }
  return (
    <Container>
        <Row>
            <Col>
                <BreadCrumbs page='Ticket'/>
            </Col>
        </Row>

        <Row>
            <Col className='text-weight-bolder text-secondary'>
                <div className='subject'>Subject: {ticket.subject}</div>
                <div className='date'>Date: {ticket.addedAt}</div>
                <div className='status'>Status: {ticket.status}</div>
             </Col>

            <Col className='text-right'>
                <Button variant='outline-info'>Close Ticket</Button>
            </Col>  
        </Row>
        <Row className='mt-5'>
            <Col>
                <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
        <hr />

        <Row className='mt-4'>
            <Col>
                <ReplyTicket msg={message} 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>


    </Container>
  )
}

export default Ticket