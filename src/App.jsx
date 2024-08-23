import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Components/Home';
import DomainDetail from "./Components/DomainDetail";
import Interview from "./Components/Interview";
import Navbar from "./Components/Navbar";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
            <Box>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route
                        path="/domain/:id"
                        element={<DomainDetail />}
                    ></Route>
                    <Route
                        path="/domain/:id/interview"
                        element={<Interview />}
                    ></Route>
                </Routes>
            </Box>
        </BrowserRouter>
    </>
  )
}

export default App
