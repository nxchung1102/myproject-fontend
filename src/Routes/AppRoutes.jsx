import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Component/Content/Home';
import Product from '../Component/Content/Product';
import Account from '../Component/Content/Account';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orderdetail" Component={Product} />
        <Route path="/Category" Component={Account} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
