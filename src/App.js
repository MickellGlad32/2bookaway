import './App.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import CalendarView from './components/CalendarView';
import Footer from './components/Footer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/signin' element={<SignIn />}/>
        <Route exact path='/calendar' element={<CalendarView />}/>


      </Routes>

      <Footer/>
    </BrowserRouter>

    );
}

export default App;
