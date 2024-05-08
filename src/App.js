import './App.css';
import Layout from './layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

// eslint-disable-next-line
// import Button from 'react-bootstrap/Button';
// import Entrypage from './pages/entry/Entrypage';

function App() {
  return (
    <div className="app">
      {/* <Entrypage /> */}
      <Layout>
        <Dashboard/>
      </Layout>
    </div>
  );
}

export default App;
