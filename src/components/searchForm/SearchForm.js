import React from 'react'
import './searchForm.css'
import {Form,Col, Row} from 'react-bootstrap'
import PropTypes from 'prop-types';

const SearchForm = ({handleOnChange,str}) => {
    console.log(str)
  return (
   <Form>
    <Form.Group as={Row}>
        <Form.Label column ms="2">Search:</Form.Label>
        <Col sm="10">
        <Form.Control
        name="searchStr"
        placeHolder="Search...."
        onChange={handleOnChange}
        value={str}>

        </Form.Control>
        </Col>
    </Form.Group>
   </Form>
  )
}
SearchForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    str:PropTypes.string.isRequired,
}

export default SearchForm