import './App.css';
import Accounts from './component/Accounts';
import Login from './component/Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Login />}/>
         
          <Route path="accounts" element={<Accounts />} />
       
      </Routes>
    </div>
  );
}

export default App;
