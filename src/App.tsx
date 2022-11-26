import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Container from './components/Container';
import Address from './pages/Address'
import Docs from './pages/Docs'
import Info from './pages/Info'
import TermConditions from './pages/TermsConditions'
import Vehicle from './pages/Vehicle'
import Error404 from './pages/Error404'
 import OTP  from './pages/Otp';

function App() {
  return (
    <div className="container mx-auto">
     <Container>
       <Routes>
         <Route path="/" exact element={<Info />} />
         <Route path="/address" element={<Address />} />
         <Route path="/docs" element={<Docs />} />
         <Route path="/term-conditions" element={<TermConditions />} />
         <Route path="/vehicle" element={<Vehicle />} />
         <Route path="/otp" element={<OTP />} />
         <Route path="*" element={<Error404 />} />
       </Routes>
     </Container>
   </div>
  );
}

export default App;

