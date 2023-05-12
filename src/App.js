import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import SearchResultPage from './pages/Search Result';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info/:id" element={<Info />} />
                    <Route path="/search/:value" element={<SearchResultPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
