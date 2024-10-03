
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


const App = () => {
    return (
        <Router>
            <nav className="flex space-x-4 p-4 bg-blue-500 text-white">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
               
            </Routes>
        </Router>
    );
};

export default App;
