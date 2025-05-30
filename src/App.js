import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import bgimg from './images/bg.jpg';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import Contact from './Pages/Contact';

function App() {
  return (
   <div
      className="App bg-no-repeat bg-[50%_50%] bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/resume' element={ <Resume/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
