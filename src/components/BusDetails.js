import React from 'react';
import { useParams } from 'react-router-dom';
import buses from '../data/buses';
export default function BusDetails({onBook}){
  const {id} = useParams();
  const bus = buses.find(b=>String(b.id)===id) || buses[0];
  return (
    <div>
      <h2>{bus.name} · {bus.operator}</h2>
      <div className='card' style={{padding:18}}>
        <div style={{display:'flex',gap:18,alignItems:'center'}}>
          <div style={{width:240}}><img src={bus.image} style={{width:'100%',borderRadius:10}}/></div>
          <div style={{flex:1}}>
            <div style={{fontWeight:800,fontSize:18}}>{bus.from} → {bus.to}</div>
            <div className='small'>Departure: {bus.departure} · Arrival: {bus.arrival}</div>
            <p className='small'>Comfortable seats · On-board amenities · Safe drivers</p>
            <div style={{marginTop:12,display:'flex',gap:10}}>
              <button className='btn' onClick={()=>onBook({bus, seats:1})}>Book Now</button>
              <button className='btn' onClick={()=>alert('Share link copied (demo)')}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
