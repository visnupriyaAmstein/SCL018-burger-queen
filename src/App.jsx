import Home from "./components/Home.jsx";
import { Route, Routes } from 'react-router-dom';
import  WaiterView  from "./views/Waiters";
import  Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<WaiterView />} />
        <Route path="/prueba" element={<Menu />}/>
      </Routes>
    </>
  );
}
export default App;