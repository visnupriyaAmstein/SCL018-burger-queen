import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import  Menu from "./components/Menu";
import  Waiter  from "./components/Waiter";

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