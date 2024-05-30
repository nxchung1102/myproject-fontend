import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import HeaderStore from './Component/Header';
import FooterStore from './Component/Footer';
import Home from './Component/Content/Home/Home';
import Product from './Component/Content/Product';
import Account from './Component/Content/Account';
import { Box } from '@mui/material';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderStore />
      <Box style={{ height: 'calc(100% - 60px)', overflowY: 'auto' }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/orderdetail" Component={Product} />
            <Route path="/Category" Component={Account} />
          </Routes>
        </Container>
      </Box>
      <FooterStore />
    </div>
  );
}

export default App;
