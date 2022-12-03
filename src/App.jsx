import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Address from "./pages/Address";
import Attachment from "./pages/Attachment";
import Info from "./pages/Info";
import TermConditions from "./pages/TermsConditions";
import Vehicle from "./pages/Vehicle";
import Error404 from "./pages/Error404";
import Work from "./pages/Work";
function App() {
  return (
    <div className="mx-auto">
      <Container>
        <Routes>
          <Route path="/" exact element={<Info />} />
          <Route path="/address/:id" element={<Address />} />
          <Route path="/work/:id" element={<Work />} />
          <Route path="/vehicle/:id" element={<Vehicle />} />
          <Route path="/attachment/:id" element={<Attachment />} />
          <Route path="/terms/:id" element={<TermConditions />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
