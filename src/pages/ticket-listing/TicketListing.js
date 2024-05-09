import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import SearchForm from '../../components/searchForm/SearchForm';
import tickets from '../../assets/data/dummy.json';
import TicketTable from '../../components/ticket-table/TicketTable';
import './ticketListings.css'; // Import your CSS file

const TicketListing = () => {
  const [str, setStr] = useState('');

  useEffect(() => {}, [str]);

  const handleOnChange = (e) => {
    setStr(e.target.value);
    console.log(e.target);
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <BreadCrumbs page="Ticket Lists" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="info" className="button-add-ticket">
            Add New Ticket
          </Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} className="search-form" />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListing;
