import './App.css';
import Layout from './layout/Layout';
// import AddTicket from './pages/new-ticket/AddTicket';
import TicketListing from './pages/ticket-listing/TicketListing';
// import Dashboard from './pages/dashboard/Dashboard';

// eslint-disable-next-line
// import Button from 'react-bootstrap/Button';
// import Entrypage from './pages/entry/Entrypage';

function App() {
  return (
    <div className="app">
      {/* <Entrypage /> */}
      <Layout>
        {/* <Dashboard/> */}
        {/* <AddTicket /> */}
        <TicketListing />
      </Layout>
    </div>
  );
}

export default App;
