import { Route, Routes } from 'react-router-dom';
import {AuthProvider1} from './components/login/contextos/AuthContex';
import PrivateRoute from "./components/PrivateRoute";
import  Menu from "./components/Menu";
import  Waiter  from "./components/Waiter";
import Home from "./components/Home";
import Kitchen from './components/Kitchen';
import OrdersReady from './components/OrdersReady';

const App = () => {
  return (
    <>
      <AuthProvider1>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/waiter" element={
          <PrivateRoute>
          <Waiter />
          </PrivateRoute>
          } />
          <Route path="/menu" element={
            <PrivateRoute>
            <Menu />
            </PrivateRoute>
          }/>
          <Route path="/kitchen" element={
          <PrivateRoute>
          <Kitchen />
          </PrivateRoute>
          }/>
          <Route path="/orderReady" element={
          <PrivateRoute>
          <OrdersReady />
          </PrivateRoute>
          }/>
        </Routes>
      </AuthProvider1>
    </>
  );
}
export default App;
