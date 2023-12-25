import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Home.css';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Home({ addBase, adult , pizza , child , adddate , datetwo}) {

  const bases = ['Delight', 'Elight', 'Grand' , 'Cottage'];

  const [njoay, setcountnjoy] = useState(false);
  const [delivery, setdelivery] = useState("");
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  // console.log("Gethared Date" , dateStart);

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
      // alert("Only 3 Members allowed")
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
      // alert("Only 3 Members allowed")
    }
  child(countTwo - 1)

    }

    const dfxgcvbn =()=>{
      adddate(dateStart)
      
    }

  return (
    < >
       
    <Nav  />

    <div  className='hero'  data-aos="fade-up" data-aos-duration="2000">
    <img src='/images/lan001.png' className='lan' id="heromobtwo" alt='' />
    <img src='/images/mme.png' className='lan' id="heromob" alt='' />
    </div>  

    <div className='herocenter'>
  <div className='container-fluid' >
   
    <div>
 <h3 className='text-dark' id='headinghero'  data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit</h3>
  <div className='text-dark' id='headsub'  data-aos="fade-up" data-aos-duration="2000">Aenean lobortis turpis consectetur fermentum.</div><br />
  <div className='text-dark' id='headsubOne'  data-aos="fade-up" data-aos-duration="2000">Ooty, The Nilgiris</div>

  </div>
  
  </div>


</div>


<div  className='lastnhome text-light' data-aos="fade-up" data-aos-duration="2000" >
  <div className='kokoko'  >
      <div className='One'  >
      <div className='d-flex' > <div><img className='toparr' src='/images/t1.png' alt=''/></div><div className='datecheck'>Select Property</div></div>

      <div className='rihhtjkbn sragsxdh' >

        <select className='hjgvhjv text-light' value={delivery} onChange={(e)=>setdelivery(e.target.value)}>
       


        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <option className='text-light srag' key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </option>
          )
        })}


        </select>
      </div>
      <div className='rihhtjkbn' > <div className='nininin'> </div></div>
      </div>

      <div className='One hifdjhh' >
      <div className='d-flex' > <div className='datecheck'>Check-In - Check-Out</div></div>
     <div className='rihhtjkbn srag' > </div>

     <div className='tfgyhjvb srgtfres' >
     <DatePicker
        id="dateStartEnd"
        selectsRange={true}
        startDate={dateStart}
        endDate={dateEnd}
        onChange={onChangeHandler}
        placeholderText={new Date()}
        dateFormat="MMM dd yyyy "
        minDate={new Date()}
        className={'form-control'}
        showDisabledMonthNavigation
        
        
    />
</div>
     <div className='rihhtjkbn' ><div className='ninininTwo'> </div></div>
      </div>
 
      <div className='One erfsg'>
    <div className='d-flex' > <div className='datecheck'>Occupancy</div></div>
    <div className='rihhtjkbn srag' onClick={tyuikhj} > Adults {count } - Child {countTwo}</div>

       <div className='rihhtjkbn' ><div className='ninininThree'> </div></div>
    <div className={njoay? "jhbjbvjsdh" : "sgr" } >


<div className='juhykgh'>

<div className='hygfgv'>
  <div className='gyi'>Adults</div>
  <div className='gyi'>:</div>
  <div className='gyi'>
  <div className='jhmhbhj me-1' onClick={decrement} ><img src='/images/sub.png'  alt='ghv'/></div>
        <div className='me-1'>{count}</div>
        <div className='jhmhbhj'   onClick={increment} ><img src='/images/add.png'  alt='ghv's/></div>
  </div>
</div>
<br />
<div className='hygfgv'>
  <div className='gyi'> Child</div>
  <div className='gyi'>:</div>
  <div className='gyi'>
  <div className='jhmhbhj me-1' onClick={decrementTwo}><img src='/images/sub.png' alt='ghv' /></div>
        <div className='me-1'>{countTwo}</div>
        <div className='jhmhbhj'  onClick={incrementTwo}  ><img src='/images/add.png' alt='ghv' /></div>
  </div>
</div>

</div>
      
    </div>



      </div>
   <div onClick={dfxgcvbn} ><Link  to='/Booking_Rooms'><img  className='toparrright' src='/images/s32.png' alt='' /></Link></div>

  </div>
</div>

{/* <DateRangeComp /> */}
<div id='hometwo' >

<main >
<div className='container d-flex justify-content-center' id='hometwosub' >
  <div className='Textpopo'>
  
  <div className='exploiij' data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur. Aenean<br /> lobortis turpis consectetur fermentum.
  </div>
<br />
  <div className='exploiOne' data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur. Orci felis nam eget dictumst nec turpis quam. Faucibus enim nec lacus quis amet vestibulum cras. Accumsan etiam id pellentesque lectus faucibus ac posuere morbi amet. Quam cursus lobortis massa amet id gravida habitant egestas. Aliquet tempor amet tristique ipsum dictumst in volutpat vel. Eget consequat vestibulum neque hendrerit non sit.
  </div>
  <br />
  <div className='d-flex justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="2000">
    <div className='hjgfckjhhvhgjh'></div>
    <div className='mx-2 kjkh'>EXPLORE</div>
  </div>
  </div>
</div>




  
<div className='d-flex justify-content-center spacetect'  >

<div className='middleimage'>
  <img src='/images/a50.png' alt='' data-aos="fade-up" data-aos-duration="2000" />

  </div>

</div>


<div className='thirrdhomehero'>

  <div className='thirdhome'>
    <div className='guonbj'>
      <h3 className='discoverkop' data-aos="fade-up" data-aos-duration="2000">Rooms & Suites</h3>


    <div className='sleep' data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur. Suspendisse pellentesque tincidunt ac varius amet. Phasellus facilisi purus magna arcu ut a. Vel orci mattis odio odio libero vel.
    </div>
    <br />

    <div className='d-flex align-items-center' data-aos="fade-up" data-aos-duration="2000">
    <div className='hjgfckjhhvhgjh'></div>
    <div className='text-dark mx-2 kjkh'>EXPLORE</div>
  </div>
    <br />
    <br />
    
    </div>
    <div className='sidemobep' data-aos="fade-up" data-aos-duration="2000">
 <div className='jhkgb'>
      <img src='/images/a50.png'   className='lakpkp' alt='' />
      </div>
    </div>
    
  </div>


  
</div>



<div className='thirrdhomehero'>
  <div className='thirdhome'>
    <div className='NewOne' data-aos="fade-up" data-aos-duration="2000">
    <div  className='NewOneLast'><img src='images/H8.png' alt='ghv' /></div>
    <div >
      <br />
    <div className='d-flex align-items-center'>
    <div className='hjgfckjhhvhgjh'></div>
    <div className='text-dark mx-3 KOnhhhh'>Lorem ipsum</div>
  </div>
    </div>
    </div>
    <div className='NewOne' data-aos="fade-up" data-aos-duration="2000">
    <div  className='NewOneLast'><img src='images/H8.png' alt='ghv' /></div>
    <div >
    <br />

    <div className='d-flex align-items-center'>
    <div className='hjgfckjhhvhgjh'></div>
    <div className='text-dark mx-3 KOnhhhh'>Lorem ipsum</div>
  </div>
    </div>
    </div>
    <div className='NewOne' data-aos="fade-up" data-aos-duration="2000">
    <div  className='NewOneLast'><img src='images/H8.png' alt='ghv' /></div>
    <div >
    <br />

    <div className='d-flex align-items-center'>
    <div className='hjgfckjhhvhgjh'></div>
    <div className='text-dark mx-3 KOnhhhh'>Lorem ipsum</div>
  </div>
    </div>
    </div>
  </div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<section id="services" className="services">
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
<br />
<br />
<br />
<br />
<br />
        <div className="section-title">
          <h2 className='exploiij'>The Spirit of Ooty</h2>
          <br />
          <div className='hjfyhgf'>Lorem ipsum dolor sit amet consectetur. Orci felis nam eget dictumst nec turpis quam. Faucibus enim nec lacus quis<br /> amet vestibulum cras. Accumsan etiam id pellentesque lectus faucibus ac posuere morbi amet.</div>
        </div>
<br />
<br />
<br />
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="iconOne"><Link to="/android"><i className="bi bi-android"></i></Link></div>
            <h4 className="title"><Link to="/android">Outdoor adventures</Link></h4>
            <p className="description">Lorem ipsum dolor sit amet <br />consectetur. Orci felis nam eget<br /> dictumst nec turpis quam.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="iconOne"><Link to="/iosapp"><i className="bi bi-apple"></i></Link></div>
            <h4 className="title"><Link to="/iosapp">Great View</Link></h4>
            <p className="description">Lorem ipsum dolor sit amet<br /> consectetur. Orci felis nam eget <br />dictumst nec turpis quam.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="iconOne"><Link to="/bulksms"><i className="bi bi-book"></i></Link></div>
            <h4 className="title"><Link to="/bulksms">Lorem ipsum</Link></h4>
            <p className="description">Lorem ipsum dolor sit amet <br />consectetur. Orci felis nam eget <br />dictumst nec turpis quam.</p>
          </div>
          
     
        </div>

      </div>
    </section>

</main>



</div>
<Footer />

    </ >
  )
}

export default Home 