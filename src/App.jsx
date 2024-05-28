import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import HeaderStore from './Component/Header';
import Home from './Component/Content/Home/Home';
import Product from './Component/Content/Product';
import Account from './Component/Content/Account';
import DisplayBanner from './Component/SlideShow/DisplayBanner';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderStore />
      <div className="Content">
        <Container maxWidth="lg">
          <DisplayBanner />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Order detail" Component={Product} />
            <Route path="/Category" Component={Account} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
