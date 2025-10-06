import React from 'react';
export default function Confirm({booking}){
  if(!booking) return <div className='card center' style={{padding:30}}>No booking data. Go to <a href='/buses'>Buses</a>.</div>
  return (
    <div style={{maxWidth:720, margin:'20px auto'}} className='card'>
      <h3 className='center'>Booking Confirmed</h3>
      <div style={{padding:12}}>
        <div style={{fontWeight:800}}>{booking.bus.name} · {booking.bus.operator}</div>
        <div className='small'>{booking.bus.from} → {booking.bus.to}</div>
        <div style={{marginTop:8}}>Passenger: <strong>{booking.name}</strong></div>
        <div>Seats: {booking.seats}</div>
        <div style={{marginTop:12,fontWeight:800}}>Amount Paid: ₹{booking.total}</div>
        <div style={{marginTop:14}}>
          <button className='btn' onClick={()=>alert('Ticket downloaded (demo)')}>Download Ticket</button>
        </div>
      </div>
    </div>
  )
}
