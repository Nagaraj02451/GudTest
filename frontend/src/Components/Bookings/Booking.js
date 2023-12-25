// import 'antd/dist/antd.css'
import React, { useState } from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import "./Booking.css"
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Booking({ addBase, adult , pizza , child , adddate , datetwo}) {
 
  const bases = ['Delight', 'Elight', 'Grand' , 'Cottage'];

  const [njoay, setcountnjoy] = useState(false);
  const [delivery, setdelivery] = useState("");
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  console.log(dateStart , typeof(dateEnd));

  function onChangeHandler(value) {
      setDateStart(value[0]);
      setDateEnd(value[1]);
  }
  const [count, setcount] = useState(0);
  const [countTwo, setcountTwo] = useState(0);


  const tyuikhj =()=>{
    setcountnjoy(!njoay)
    datetwo(dateEnd)
  }

  console.log(count , "CountCheck");

  const increment =()=>{
    setcount((count)=>
     count + 1
    )
    adult(count + 1)
    }
    
    const decrement =()=>{
    setcount(count-1)
    if(count === 0){
      setcount(0)
    }
    adult(count - 1)
    }


  const incrementTwo =()=>{
    setcountTwo(countTwo+1)
  child(countTwo + 1)
  
    }
    
    const decrementTwo =()=>{
    setcountTwo(countTwo-1)
    if(countTwo === 0){
      setcountTwo(0)
    }
  child(countTwo - 1)

    }

    const dfxgcvbn =()=>{
      adddate(dateStart)
    }


  return (
   <>
   <Nav />

   <div className='thirrdhomeheroBvhcb'>

<div className='thirdhome'>

  <div className='guonbjnbgjhmgfvewg text-dark ' data-aos="fade-up" data-aos-duration="2000">
  <div>
    <div className='sleep'>Select Property</div>
    <br />
    <div> <select className='hjgvhjvwaresgf' value={delivery} onChange={(e)=>setdelivery(e.target.value)}>
    {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <option className='text-light srag' key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </option>
          )
        })}
        </select></div>

    <div className='jhvjv'></div>
  </div>
  <br />
  <div>
    <div className='sleep'>Check-In - Check-Out</div>
    <br />

<div className='tfgyhjvb'>
<DatePicker
        id="dateStartEnd"
        selectsRange={true}
        startDate={dateStart}
        endDate={dateEnd}
        onChange={onChangeHandler}
        placeholderText={new Date()}
        dateFormat="MMM dd yyyy "
        minDate={new Date()}
        className={'WAREFGTRWE'}
        showDisabledMonthNavigation
    />
</div>
    <div className='jhvjv'></div>
  </div>
  <br />

  <div>
    <div className='sleep'>Occupancy</div>
    <br />
    <div className='nhnhh' onClick={tyuikhj} >Adults 0{count} - Child 0{countTwo}</div>
 

    <div className='jhvjv'></div>

    <div className={njoay? "jhbjbvjsdhaefrwa" : "sgr" } >


<div className='juhykgh'>

<div className='hygfgv'>
  <div className='gyi'>Adults</div>
  <div className='gyi'>:</div>
  <div className='gyi'>
  <div className='jhmhbhj' onClick={decrement} ><img src='/images/sub.png' alt='ghv' /></div>
        <div>0{count}</div>
        <div className='jhmhbhj'   onClick={increment} ><img src='/images/add.png'  alt='ghv'/></div>
  </div>
</div>
<br />
<div className='hygfgv'>
  <div className='gyi'> Child</div>
  <div className='gyi'>:</div>
  <div className='gyi'>
  <div className='jhmhbhj' onClick={decrementTwo}><img src='/images/sub.png' alt='ghv' /></div>
        <div>0{countTwo}</div>
        <div className='jhmhbhj'  onClick={incrementTwo}  ><img src='/images/add.png' alt='ghv' /></div>
  </div>
</div>

</div>
</div>
  </div>
  <br />

  <div className='ghvjk' onClick={dfxgcvbn}>
  <Link  to='/Booking_Rooms'> <div className='gbnfmchykujh sleep'>
    Check Availability
    </div></Link>
  </div>
  </div>
  <div className='guonbjnbgewgadf' data-aos="fade-up" data-aos-duration="2000">
    <h3 className='discoverkop'>Book Your Stay</h3>

  <div className='text-dark'>
      <div className='sleep'>
<br />

      Lorem ipsum dolor sit amet consectetur. Orci felis nam eget dictumst nec turpis quam. Faucibus enim nec lacus quis amet vestibulum cras. Accumsan etiam id pellentesque lectus faucibus ac posuere morbi amet.
      </div>
      <div>
<br />

      <div className='sleep'>For Booking enquiries:</div>
<br />

          <div className='sleep'>reservations@sevenendue.co.in</div>
        
      </div>
  </div>
  </div>
  
</div>



</div>

   <Footer />
   </>
  )
}

export default Booking