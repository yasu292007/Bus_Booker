import React from 'react';
import { Link } from 'react-router-dom';
import routeImg from '../assets/route.svg';
export default function Home(){
  return (
    <div>
      <div className='hero card'>
        <div style={{flex:1}}>
          <h1 className='h1'>Book your bus in seconds</h1>
          <p className='h2'>Explore routes, compare buses, and reserve seats — fast and secure.</p>
          <div style={{marginTop:12}}>
            <Link to='/buses'><button className='btn'>Search Buses</button></Link>
            <span style={{marginLeft:12}} className='small'>Offers: 20% off on selected routes</span>
          </div>
        </div>
        <div style={{width:160}}>
          <img src={routeImg} alt='route' style={{width:'100%'}}/>
        </div>
      </div>

      <h3 style={{marginTop:20}}>Popular Routes</h3>
      <div className='grid'>
        {[
          {from:'Chennai',to:'Bangalore'},
          {from:'Coimbatore',to:'Kochi'},
          {from:'Madurai',to:'Tiruchirappalli'},
          {from:'Hyderabad',to:'Vijayawada'}
        ].map((r,i)=>(
          <Link to='/buses' key={i} className='card route-card'>
            <div>
              <div style={{fontWeight:800}}>{r.from} → {r.to}</div>
              <div className='small'>Starting at ₹299 · Multiple operators</div>
            </div>
            <div className='badge small'>Popular</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
