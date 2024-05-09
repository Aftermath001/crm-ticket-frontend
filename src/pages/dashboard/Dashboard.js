import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from '../../assets/data/dummy.json'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumbs page='Dashboard'/>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
            <Link to='/addticket'><Button variant='outline-info'>Add New Ticket</Button></Link>
            </Col>
        </Row>

        <Row>
            <Col className="text-center mt-5 mb-2">
                <div>Total Tickets: 50</div>
                <div>Pending Tickets: 5</div>
            </Col>
        </Row>

        <Row>
            <Col>Recently Added Tickets</Col>
        </Row>
        <hr />

        <Row>
            <Col className="recent-ticket"> 
            <TicketTable tickets={tickets} />
            </Col>
        </Row>


    </Container>
  )
}

export default Dashboard