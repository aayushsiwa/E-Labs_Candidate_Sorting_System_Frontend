import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Components/Home";
import DomainDetail from "./Components/DomainDetail";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/domain/:id" element={<DomainDetail />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
