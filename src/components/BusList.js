import React, {useState} from 'react';
import buses from '../data/buses';
import { Link } from 'react-router-dom';
export default function BusList(){
  const [from,setFrom] = useState('');
  const [to,setTo] = useState('');
  const [filtered, setFiltered] = useState(buses);

  const search = ()=>{
    const f = buses.filter(b=>(from? b.from.toLowerCase().includes(from.toLowerCase()):true) && (to? b.to.toLowerCase().includes(to.toLowerCase()):true));
    setFiltered(f);
  }

  return (
    <div>
      <h2>Available Buses</h2>
      <div className='card' style={{marginBottom:12}}>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <input className='input' placeholder='From' value={from} onChange={e=>setFrom(e.target.value)} />
          <input className='input' placeholder='To' value={to} onChange={e=>setTo(e.target.value)} />
          <button className='btn' onClick={search}>Search</button>
        </div>
      </div>

      <div className='grid'>
        {filtered.map(b=>(
          <div className='card' key={b.id}>
            <div className='bus-item'>
              <img src={b.image} alt={b.name}/>
              <div style={{flex:1}}>
                <div style={{fontWeight:800}}>{b.name} · {b.operator}</div>
                <div className='small'>{b.from} → {b.to} · Dep: {b.departure} · Arr: {b.arrival}</div>
                <div className='card-footer' style={{marginTop:8}}>
                  <div style={{fontWeight:800}}>₹{b.price}</div>
                  <div style={{display:'flex',gap:8}}>
                    <Link to={'/bus/'+b.id}><button className='btn'>Details</button></Link>
                    <Link to={'/booking'} state={{bus:b}}><button className='btn'>Book</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
