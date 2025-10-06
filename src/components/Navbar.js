import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({user,onLogout}){
  return (
    <header className='container header'>
      <div className='brand'>
        <div className='logo'>BB</div>
        <div>
          <div style={{fontWeight:800}}>BusBooker</div>
          <div style={{fontSize:12,color:'#5b6b7a'}}>Fast, reliable booking</div>
        </div>
      </div>
      <nav className='nav'>
        <Link to='/' className='small'>Home</Link>
        <Link to='/buses' className='small'>Buses</Link>
        <Link to='/booking' className='small'>Booking</Link>
        {user ? (
          <>
            <div className='small'>Hi, {user.name}</div>
            <button className='btn' onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login'><button className='btn'>Login</button></Link>
        )}
      </nav>
    </header>
  )
}
