import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { Home } from './components/Home';

export default function App() {

 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
     
    </div>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


