import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import  Waiter  from "./components/Waiter";
import  Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/prueba" element={<Menu />}/>
      </Routes>
    </>
  );
}
export default App;