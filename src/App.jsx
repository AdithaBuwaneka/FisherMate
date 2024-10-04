
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources'; 
import Alerts from './pages/Alerts';  
import Market from './pages/Market'; 
import Profile from './pages/Profile'; 
import Settings from './pages/Settings';


const App = () => {
    return (
        <Router>
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/market" element={<Market />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
               
            </Routes>
        </Router>
    );
};

export default App;
