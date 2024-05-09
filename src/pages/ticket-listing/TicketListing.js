import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import SearchForm from '../../components/searchForm/SearchForm';
import tickets from '../../assets/data/dummy.json';
import TicketTable from '../../components/ticket-table/TicketTable';
import {Link} from 'react-router-dom'
import './ticketListings.css'; // Import CSS file

const TicketListing = () => {
  const [str, setStr] = useState('');
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value)
    // setStr(e.target.value);
    searchTicket(value)
    // console.log(e.target);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()))
    setDispTicket(displayTickets)
  }

  return (
    <Container className="container">
      <Row>
        <Col>
          <BreadCrumbs page="Ticket Lists" />
        </Col>
      </Row>

      <Row>
        <Col >
         <Link to='/addticket'><Button variant='outline-info'>Add New Ticket</Button></Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} className="search-form" />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};


export default TicketListing;
