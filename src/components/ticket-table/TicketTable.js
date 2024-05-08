import React from 'react'
import {Table} from 'react-bootstrap'
const TicketTable = ({tickets}) => {
  return (
    <Table stripped bordered hover>
        <thead>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
        </thead>

        <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.openAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket Available
            </td>
          </tr>
        )}
            
        </tbody>
    </Table>
  )
}

export default TicketTable