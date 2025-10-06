import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
export default function Booking({onBook}){
  const loc = useLocation();
  const bus = loc.state?.bus || null;
  const [name,setName] = useState('');
  const [seats,setSeats] = useState(1);
  const submit = (e)=>{
    e.preventDefault();
    if(!name.trim()) return alert('Enter passenger name');
    const data = {bus, name, seats, total: bus? bus.price*seats : 0};
    onBook(data);
  }
  return (
    <div style={{maxWidth:720, margin:'20px auto'}} className='card'>
      <h3 className='center'>Booking Details</h3>
      <form onSubmit={submit} style={{padding:16,display:'flex',flexDirection:'column',gap:10}}>
        <div className='form-row'>
          <label>Passenger Name</label>
          <input className='input' value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className='form-row'>
          <label>Seats</label>
          <input type='number' min='1' className='input' value={seats} onChange={e=>setSeats(Number(e.target.value))} />
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className='small'>Total: ₹{bus? bus.price*seats: 0}</div>
          <button className='btn' type='submit'>Confirm Booking</button>
        </div>
      </form>
    </div>
  )
}
