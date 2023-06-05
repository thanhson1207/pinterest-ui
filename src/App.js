import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import SearchResultPage from './pages/Search Result';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import Reset from './Auth/Reset/Reset';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/info/:id" element={<Info />} />
                    <Route path="/search/:value" element={<SearchResultPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
