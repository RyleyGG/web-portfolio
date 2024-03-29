import { React } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import './stylesheets/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Astrophotography from './pages/Astrophotography';
import Professional from './pages/Professional';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/astrophotography' element={<Astrophotography />} />
            <Route path='/professional' element={<Professional />} />
        </Routes>
      </BrowserRouter>
    );
};
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);