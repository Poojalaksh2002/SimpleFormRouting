import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import  Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
      <Route exact path ="/" element={<Greet/>}/>
      <Route path ="/home/:name" element={<Home />}/>
      </Routes>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
