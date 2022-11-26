import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Container from '../src/components/Container';
import Address from '.././src/pages/Address'
import Docs from '.././src/pages/Docs'
import Info from '.././src/pages/Info'
import TermConditions from '.././src/pages/TermsConditions'
import Vehicle from '.././src/pages/Vehicle'
import Error404 from '.././src/pages/Error404'
 import OTP  from '.././src/pages/Otp';

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

