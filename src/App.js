import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import BusList from './components/BusList';
import BusDetails from './components/BusDetails';
import Booking from './components/Booking';
import Confirm from './components/Confirm';
import Navbar from './components/Navbar';

function App(){
  const [user, setUser] = useState(null);
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  const onLogin = (username)=>{ setUser({name: username}); navigate('/'); }
  const onLogout = ()=>{ setUser(null); navigate('/login'); }
  const makeBooking = (data)=>{ setBooking(data); navigate('/confirm'); }

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className='container'>
        <Routes>
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/' element={<Home />} />
          <Route path='/buses' element={<BusList />} />
          <Route path='/bus/:id' element={<BusDetails onBook={makeBooking} />} />
          <Route path='/booking' element={<Booking onBook={makeBooking} />} />
          <Route path='/confirm' element={<Confirm booking={booking} />} />
        </Routes>
      </div>
      <footer className='footer'>
        BusBooker — Demo frontend app
      </footer>
    </div>
  )
}

export default App;
