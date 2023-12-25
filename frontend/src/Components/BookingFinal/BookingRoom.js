import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import axios from 'axios';
import "./BookingFinal.css"
import { Base_url } from '../../Url';

function BookingRoom({pizza}) {
  const [firstdate, setfirstdate] = useState("")
  const [seconddate, seteconddate] = useState("")
  const [filterdataOne, setfilter] = useState([])
  const [filterdata, setData] = useState([])
  const [filterdataT, setDataT] = useState([])
  const [filterdataH, setDataH] = useState([])
  const [filterdataF, setDataF] = useState([])
  const [RoomlistApi, setRoomlistapi] = useState([])
  const [datasLast , setDatas] = useState([])
  const RoomlistLastRef = [];
  const datas = [];
  const datasApi = [];
  const dates = [];
  const datesOne = [];
  const initialdate = [];
  const initialdateOne = [];
  initialdate.push(firstdate)
  initialdateOne.push(seconddate)

  const bases = ['Select' ,'Delight', 'Elight', 'Grand' , 'Cottage'];

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  function onChangeHandler(value) {
    const datsSeparete = value[0].toString().slice(0,15)
      setDateStart(value[0]);
      console.log("Colletcted datas" , datsSeparete);
      setfirstdate(datsSeparete)
      setDateEnd(value[1]);
      
if(value[1] !== null){
  const datsSepareteend = value[1].toString().slice(0,15)
      seteconddate(datsSepareteend)
}
  
  }
  const [loading , setloading] = useState(true)
  const [charge, setcharge] = useState([])
  const [delivery, setdelivery] = useState("");
  const [count, setcount] = useState(0);
  const [countTwo, setcountTwo] = useState(0);
  const hidebtn = useRef()
  const hidebtnBlock = useRef()
  const hidebtnBlockOne = useRef()
  const hidebtnBlockThree = useRef()
  const hidebtnBlockFour = useRef()
  const jiojio = useRef()
  const jiojiofirst = useRef()
  const jiojioInner = useRef()
  const jiojioLast = useRef()
  const [night, setnight] = useState("")
  const [radio, setradio] = useState("")
  const [Total, setTotal] = useState("")
  const [Tax, setTax] = useState("")
  const [FirstTotal, setFirstTotal] = useState("")
  const [Carcharge, setcarcharge] = useState("")
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [PhoneNumber, setPhoneNo] = useState("")
  const [Roomid , setid] = useState("")


const ghjkbnvcgg = ()=>{
  if(radio === "on"){
    hidebtn.current.classList.add("westgdbhvn")
  }else{
    hidebtn.current.classList.remove("westgdbhvn")
  }
}

const gytrdyfughvOne =(datasb)=>{

      setid(datasb.Roomid)

    const Final_Night = Number(datasb.Charge) * night
    setFirstTotal(Final_Night)
    const tax = night * 1200
    setTax(tax)
     const datalits = tax + Final_Night
     setTotal(datalits)


  console.log(datasb , "RoomCollection");
  hidebtnBlockOne.current.classList.add("hgvbjknl")
  jiojiofirst.current.classList.add("jhnjm")
}

const gytrdyfughvThree =()=>{
 
  const carcharge = 2000
  setcarcharge(carcharge)
  
  const cardetail = Number(Total) + 2000

  setTotal(cardetail)

  hidebtnBlockThree.current.classList.add("hgvbjknl")
  jiojioInner.current.classList.add("jhnjm")
}

const gytrdyfughvThreeclone = ()=>{
   
  const carcharge = 3000
  setcarcharge(carcharge)
  
  const cardetail = Number(Total) + 3000

  setTotal(cardetail)

  hidebtnBlockThree.current.classList.add("hgvbjknl")
  jiojioInner.current.classList.add("jhnjm")
}

const gytrdyfughvFour = async()=>{
  
   await axios.post(`${Base_url}/api/room` , {
    firstdate: firstdate,
    seconddate :  seconddate,
    Adult : pizza.adult ? pizza.adult : count ,
    Child : pizza.child ? pizza.child : countTwo,
    PropertyL : pizza.base ? pizza.base : delivery ,
    Night : night,
    RoomCharge : FirstTotal,
    Tax : Tax,
    Vehicles : Carcharge,
    TotalAmount : Total,
    Name : Name,
    Email : Email,
    PhoneNumber : PhoneNumber,
    Roomid : Roomid
  })
  // setcharge(datedate.data)
  
  hidebtnBlockFour.current.classList.add("hgvbjknl")
  jiojioLast.current.classList.add("jhnjm")

}


const increment =()=>{
  setcount(count+1)
  if(count >= 3){
    setcount(3)
    alert("Only 3 Members allowed")
  }
  }
  
  const decrement =()=>{
  setcount(count-1)
  if(count === 0){
    setcount(0)
    // alert("Only 3 Members allowed")
  }
  }
  
  
  const incrementTwo =()=>{
    setcountTwo(countTwo+1)
    if(countTwo >= 3){
      alert("Only 3 Members allowed")
    setcountTwo(3)

    }
  
    }
    
    const decrementTwo =()=>{
    setcountTwo(countTwo-1)
    if(countTwo === 0){
      setcountTwo(0)
      // alert("Only 3 Members allowed")
    }
    }


    const getdata = async () => {
      const datedate = await axios.get(`${Base_url}/api/room`)
      setcharge(datedate.data)
      
      const datedateOne = await axios.get(`${Base_url}/api/sevenrooms`)
      setRoomlistapi(datedateOne.data)
      setfilter(datedateOne.data)
    }
  
    useEffect(() => {
      // console.log("NewDate" , pizza.date.toString().slice(0,15));

      if(pizza.date !== undefined){
        setDateStart(pizza.date)
        setDateEnd(pizza.datetwo)
        setfirstdate(pizza.date.toString().slice(0,15))
        seteconddate(pizza.datetwo.toString().slice(0,15))
      }
     

      const filterData = datasLast.filter((item) => item.RoomType === "DelightRoom");
      setData(filterData);
  
      const filterDataT = datasLast.filter((item) => item.RoomType === "ElightRoom");
      setDataT(filterDataT);
  
      const filterDataH = datasLast.filter((item) => item.RoomType === "GrandRoom");
      setDataH(filterDataH);
  
      const filterDataF = datasLast.filter((item) => item.RoomType === "CottageRoom");
      setDataF(filterDataF);
  
      getdata()
   
    }, [loading])
  
  
    const suryabutton = () => {

      const datsSeparete = pizza.date.toString().slice(0,15)
      setfirstdate(datsSeparete)
if(pizza.datetwo !== null){
  const datsSepareteend = pizza.datetwo.toString().slice(0,15)
      seteconddate(datsSepareteend)
}


      if(dateStart > 0 && dateEnd > 0){
        const nights =  dateEnd.getDay() - dateStart.getDay()
        setnight(nights)
      }

  // console.log("" , charge);
  setloading(false)
       charge.map((Item)=>{
              datas.push(Item)
               let temp = Item.firstdate;
               let temp1 = Item.seconddate;
            dates.push(temp)
            datesOne.push(temp1)
            const ffilterdateghh = dates.filter((iteamop)=>{
              return initialdate.includes(iteamop)
            })
            const ffilterdateghhOne = datesOne.filter((iteamop)=>{
              return initialdateOne.includes(iteamop)
            })
  
            if(ffilterdateghh.length > 0){
     const filterdateLast = datas.filter((datash)=>ffilterdateghh.includes(datash.firstdate));
   
     const leo = filterdateLast.map((Hukum)=>Hukum.Roomid)
   
         RoomlistApi.map((iteamop)=>{
           RoomlistLastRef.push(iteamop)
                 let temp = iteamop.Roomid;
                 datasApi.push(temp);
   
           let result = datasApi.filter((iteam) => leo.includes(iteam));    
      
        const filterhukum =  filterdataOne.filter((Deep)=>!result.includes(Deep.Roomid))
   setDatas(filterhukum)
   
         })
       
            }
            else{
  
     const filterdateLastOne = datas.filter((datash)=>ffilterdateghhOne.includes(datash.seconddate));
  
     const leoOne = filterdateLastOne.map((Hukum)=>Hukum.Roomid)
   
         RoomlistApi.map((iteamop)=>{
           RoomlistLastRef.push(iteamop)
                 let temp = iteamop.Roomid;
                 datasApi.push(temp);
     
           let resultOne = datasApi.filter((iteam) => leoOne.includes(iteam));    
               
        const filterhukum =  filterdataOne.filter((Deep)=>!resultOne.includes(Deep.Roomid))
   setDatas(filterhukum)
   
         })
            }
         
            
       })
       hidebtnBlock.current.classList.add("hgvbjknl")
       jiojio.current.classList.add("jhnjm")
  
    
    }

  return (
    <>
    <Nav />
    

    <div className='BookingFinal '>
        <div className='BookingInnner'>
        <div class="accordion " id="accordionExample">
        <div className='hjkhvj'>Reservation</div>
<br />
  <div class="accordion-item ">
    <h2 class="accordion-header " id="headingOne">
      <button class="accordion-button jhgbhkln " ref={hidebtnBlock} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
   <div className='hjgb  me-3 ' ref={jiojio}> <img src='/images/sui.png' alt='ghv' /> </div> Date  
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
      <div className='mjvgh'>
        <div className='Onjijigg fontioo'>properties </div>
        <div className='sdgsrgs'>:</div>
        <div className='Onjiji'>
        <select className='hbgvj select fontioo' value={pizza.base ? pizza.base : delivery} onChange={(e)=>setdelivery(e.target.value)}>
        {bases.map(base => {
         
          return (
            <option className='text-light srag' >
              <span >{ base }</span>
            </option>
          )
        })}
        
        </select>
        </div>
      </div>
      <div className='mjvgh'>
        <div className='Onjijigg fontioo'> Check In / Check Out</div>
        <div className='sdgsrgs'>:</div>
        <div className='Onjiji'>
    
       <div className='tfgyhjvb fontioo'>
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
        </div>
      </div>
      <div className='mjvgh'>
        <div className='jhb'>
        <div className='hyghvj rsg'>
          <div className='fontioo'>Adults</div>
            <div className='hcgjv'>:</div>
          <div className='hmnvhj '>
        <div className='jhmhbhj' onClick={decrement}><img src='/images/mi.png' alt='ghv'/></div>
        <div className='fontioo'>0{pizza.adult ? pizza.adult : count}</div>
        <div className='jhmhbhj'  onClick={increment} ><img src='/images/pl.png' alt='ghv' /></div>
      </div>
          </div>
          <div className="jhkgn"></div>
        <div className='hyghvj'>
          <div className='fontioo'>Child</div>
          <div className='hcgjv'>:</div>
          <div className='hmnvhj sfdr'>
        <div className='jhmhbhj' onClick={decrementTwo} ><img src='/images/mi.png' alt='ghv'/></div>
        <div className='fontioo'>0{pizza.child ? pizza.child : countTwo}</div>
        <div className='jhmhbhj'  onClick={incrementTwo}><img src='/images/pl.png' alt='ghv'/></div>
      </div>
    
          </div>
        </div>
       
      </div>
      <div className='mjvgh sgd'>
     
   <div className='gbnfmchykujh sleep fontioo'  data-bs-toggle="collapse" data-bs-target="#collapseTwooNE" aria-expanded="false" aria-controls="collapseTwo"   onClick={suryabutton}>
    Check Availability
    </div> </div>
      
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button jhgbhkln collapsed " ref={hidebtnBlockOne} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwooNE" aria-expanded="false" aria-controls="collapseTwo">
      <div className='hjgb  me-3 ' ref={jiojiofirst}> <img src='/images/sui.png' alt='ghv' /> </div>  Select Room
      </button>
    </h2>
    <div id="collapseTwooNE" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body iujkghj">
    <div className='jhghgjb'>

  {
          (pizza.base === "Delight" || delivery === "Delight") && filterdata.map((datasb) => {
              return (
                <>
                  <div className='hfgjkbhk'>
                  <div className='guyjhgytiug'> 
             <img src={datasb.RoomPhoto} alt='ghv'/>
           </div>
           
           <div className='guyjhgytiug'>
            
            <div className='mahjfgvgh' id='ghcvbnm'>{datasb.RoomType}</div><br />
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv '>Complimentary Wi-Fi</div>
              <div className='hjnmv'>Food</div>
            </div>
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv'>Parking Available</div>
              <div className='hjnmv'>Complimentary Activities</div>
            </div>
            <br />
            <div className='mahjfgvgh' id='ghcvbnm'>ROOM DETAILS</div>
            <div className='mahjfgvgh'>Cintacor Island invites you to a getaway on a fully private island. Start your mornings here with a hearty meal by availing our room with breakfast plan.</div>
           <br />
            <div className='mahjfgvgh' id='ghcvbnm'>PRICE</div>
            <div className='d-flex mahjfgvgh hvjv'>
              <div>₹ {datasb.Charge} INR /<br /> night Plus taxes</div>
              <div className='hgvghkj'  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>{gytrdyfughvOne(datasb)}}>Book</div>
            </div>

          
           </div>
           </div>
                </>
                )}
                )  
                }

{
          (pizza.base ==="Elight" || delivery === "Elight") && filterdataT.map((datasb) => {
              return (
                <>
                    <div className='hfgjkbhk'>
                  <div className='guyjhgytiug'> 
             <img src={datasb.RoomPhoto} alt='ghv'/>
           </div>
           
           <div className='guyjhgytiug'>
            
            <div className='mahjfgvgh' id='ghcvbnm'>{datasb.RoomType}</div><br />
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv '>Complimentary Wi-Fi</div>
              <div className='hjnmv'>Food</div>
            </div>
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv'>Parking Available</div>
              <div className='hjnmv'>Complimentary Activities</div>
            </div>
            <br />
            <div className='mahjfgvgh' id='ghcvbnm'>ROOM DETAILS</div>
            <div className='mahjfgvgh'>Cintacor Island invites you to a getaway on a fully private island. Start your mornings here with a hearty meal by availing our room with breakfast plan.</div>
           <br />
            <div className='mahjfgvgh' id='ghcvbnm'>PRICE</div>
            <div className='d-flex mahjfgvgh hvjv'>
              <div>₹ {datasb.Charge} INR /<br /> night Plus taxes</div>
              <div className='hgvghkj'  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>{gytrdyfughvOne(datasb)}}>Book</div>
            </div>

          
           </div>
           </div>
                </>
              )})

}


{
          (pizza.base === "Grand" || delivery === "Grand") && filterdataH.map((datasb) => {
              return (
                <>
                       <div className='hfgjkbhk'>
                  <div className='guyjhgytiug'> 
             <img src={datasb.RoomPhoto} alt='ghv'/>
           </div>
           
           <div className='guyjhgytiug'>
            
            <div className='mahjfgvgh' id='ghcvbnm'>{datasb.RoomType}</div><br />
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv '>Complimentary Wi-Fi</div>
              <div className='hjnmv'>Food</div>
            </div>
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv'>Parking Available</div>
              <div className='hjnmv'>Complimentary Activities</div>
            </div>
            <br />
            <div className='mahjfgvgh' id='ghcvbnm'>ROOM DETAILS</div>
            <div className='mahjfgvgh'>Cintacor Island invites you to a getaway on a fully private island. Start your mornings here with a hearty meal by availing our room with breakfast plan.</div>
           <br />
            <div className='mahjfgvgh' id='ghcvbnm'>PRICE</div>
            <div className='d-flex mahjfgvgh hvjv'>
              <div>₹ {datasb.Charge} INR /<br /> night Plus taxes</div>
              <div className='hgvghkj'  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>{gytrdyfughvOne(datasb)}}>Book</div>
            </div>

          
           </div>
           </div>
                </>
              )})

}


{
          (pizza.base === "Cottage" || delivery === "Cottage") && filterdataF.map((datasb) => {
              return (
                <>
                  <div className='hfgjkbhk'>
                  <div className='guyjhgytiug'> 
             <img src={datasb.RoomPhoto} alt='ghv'/>
           </div>
           
           <div className='guyjhgytiug'>
            
            <div className='mahjfgvgh' id='ghcvbnm'>{datasb.RoomType}</div><br />
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv '>Complimentary Wi-Fi</div>
              <div className='hjnmv'>Food</div>
            </div>
            <div className='d-flex mahjfgvgh'>
              <div className='hjnmv'>Parking Available</div>
              <div className='hjnmv'>Complimentary Activities</div>
            </div>
            <br />
            <div className='mahjfgvgh' id='ghcvbnm'>ROOM DETAILS</div>
            <div className='mahjfgvgh'>Cintacor Island invites you to a getaway on a fully private island. Start your mornings here with a hearty meal by availing our room with breakfast plan.</div>
           <br />
            <div className='mahjfgvgh' id='ghcvbnm'>PRICE</div>
            <div className='d-flex mahjfgvgh hvjv'>
              <div>₹ {datasb.Charge} INR /<br /> night Plus taxes</div>
              <div className='hgvghkj'  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>{gytrdyfughvOne(datasb)}}>Book</div>
            </div>

          
           </div>
           </div>
                </>
              )})

}


           <br />
           <br />
  

      
    </div>
    
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button jhgbhkln collapsed" type="button" ref={hidebtnBlockThree} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className='hjgb  me-3 fontioo' ref={jiojioInner}> <img src='/images/sui.png' alt='ghv'/> </div> OTHER CONVENIENCES
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body ">

<div className='fchggnvbhj'>
     <div className='hjgmfvghyuhjvyt mt-5'>
      <div className='hkjgvchjvb'>
      <div className='fontioo'>Cintacor Island invites you to a getaway on a fully private island. Start your mornings here with a hearty meal by availing our room with breakfast plan.</div>
      <br />
      <div className='jhtcyguhj'>
      <div className='jhjgnvb'></div>
      <div className='jhjgnvb mt-5'></div>
      </div>
     </div>
     </div>



     <div className='linkno'></div>
     <div className='hjgmfvghyuhjvyt mt-5'>
      <div className='jhgvjk'>
      <div className='fontioo'>Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus . Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus.</div>
      <br />
      <div className='fontioo' >If vehicles needed</div>
     
      <div className='jkhgkbhklkj'>
            {/* <div><input data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"  type='radio' /><span >Yes</span></div>        
            <div><input type='radio' /><span>No</span></div>     */}

            <div class="form-check">
  <input onClick={ghjkbnvcgg}  class="form-check-input" type="radio" onChange={(e)=>setradio(e.target.value)} name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label fontioo" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div class="form-check">
  <input onClick={gytrdyfughvThree} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label fontioo" for="flexRadioDefault2">
    No
  </label>
</div>    
      </div>
      </div>
     </div>




</div>




<div id="carouselExampleInterval" class="carousel slide westgd" data-bs-ride="carousel" ref={hidebtn} >
  <div class="carousel-inner">



    <div class="carousel-item active" data-bs-interval="10000">
    <div className='gghjv' >
<div className='hjgv jiop'>
<img src='/images/inno.jpg' alt='ghv'/>
</div>
<div className='hjgv'>
   <div className='fontioo'>Innova</div><br />
   <div className='fontioo'>Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus . Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus.</div>
   <br />
   <br />
   <br />
   <div className='yfhjbvbk'>
    <div >
      <div className='fontioo'>PRICE</div>
      <div className='fontioo'>₹ 2000</div>
    </div>
    <div className='cghfgv fontioo' onClick={gytrdyfughvThree} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Book
    </div>
    </div>
    </div>
   </div>
    </div>
 
    <div class="carousel-item">
    <div className='gghjv' >
<div className='hjgv jiop'>
<img src='/images/swift.jpg' alt='ghv' />
</div>
<div className='hjgv'>
   <div className='fontioo'>Swift</div><br />
   <div className='fontioo'>Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus . Lorem ipsum dolor sit amet consectetur. Hendrerit etiam pharetra diam purus.</div>
   <br />
   <br />
   <br />
   <div className='yfhjbvbk'>
    <div >
      <div className='fontioo'>PRICE</div>
      <div className='fontioo'>₹ 3000</div>
    </div>
    <div className='cghfgv fontioo' onClick={gytrdyfughvThreeclone} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Book
    </div>
    </div>
    </div>
   </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




  </div>




    </div>



  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button  jhgbhkln collapsed" type="button" ref={hidebtnBlockFour} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className='hjgb  me-3 ' ref={jiojioLast}> <img src='/images/sui.png' alt='ghv'/> </div> GUEST INFORMATION
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body jhknmgvhkgj">
<br />
<br />
<br />
        <div className='fchggnvbhj'>
             <div className='hjgmfvgh'>
              <div className='hkjgvchjvb'>
              <div id='ghcvbnm'>Your Stay</div>
              <br />
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='fontioo'>Check-In</p> 
                  <p className='fontioo'>After 12:00 pm</p>
                </div>
                <div>
<p className='fontioo'>Check-out</p>
<p className='fontioo'>Before 12:00 pm</p>
                </div>
              </div>
              <div>
                <div className='fontioo'>
              <DatePicker
        id="dateStartEnd"
        selectsRange={true}
        startDate={pizza.date ? pizza.date : dateStart  }
        endDate={pizza.seconddate ? pizza.seconddate : dateEnd  }
        onChange={onChangeHandler}
        placeholderText={new Date()}
        dateFormat="MMM dd yyyy "
        minDate={new Date()}
        className={'hgjkbn'}
        showDisabledMonthNavigation
    />
    </div>
                <div className='fontioo'>{pizza.adult ? pizza.adult : count} Adults / {pizza.child ? pizza.child : countTwo} Child</div>
              </div>
              <br />
              <div>
                <div className='fontioo'>{pizza.base ? pizza.base : delivery} (First Floor)</div>
                <div className='fontioo'>{night} Night</div>
              </div>
              <br />
              <div className='d-flex'>
                <div className='fontioo'>Add a Room</div>
              </div>
<br />
              <div className='hhvkh'></div>
              <div>
                <div className='mt-2 d-flex justify-content-between'>
                <div className='fontioo'>Room’s Charge</div>
                <div className='fontioo'>{FirstTotal}</div>
                </div>
                <div className='mt-2 d-flex justify-content-between'>
                <div className='fontioo'>Taxes & GST</div>
                <div className='fontioo'>{Tax}</div>
                </div>
                <div className=' mt-2 d-flex justify-content-between'>
                <div className='fontioo'>vehicle's Charge</div>
                <div className='fontioo'>{Carcharge}</div>
                </div>
              </div>
              <div className='mt-2 hhvkh'></div>
              
              <div className=' mt-2 d-flex justify-content-between'>
                <div className='fontioo'>Total</div>
                <div className='fontioo'>{Total}</div>
              </div>



             </div>
             </div>



             <div className='linkno'></div>
             <div className='hjgmfvgh'>
              <div className='jhgvjk'>
              <div id='ghcvbnm'>Enter the details</div>
              <br />
              <div className='hgjvh'><input  placeholder='Enter the Name' value={Name} onChange={(e)=>setName(e.target.value)} /></div>
              <div className='hgjvh'><input placeholder='Enter Your Email address' value={Email} onChange={(e)=>setEmail(e.target.value)} /></div>
              <div className='hgjvh'><input placeholder='Enter Your Phone Number' value={PhoneNumber} onChange={(e)=>setPhoneNo(e.target.value)} /></div><br />
              <div className='hgjvh fontioo'><button  type='submit'  onClick={gytrdyfughvFour}>Proceed To Pay</button></div>
              </div>
             </div>
        </div>
        <br />
        <br />
        <br />
         </div>
    </div>
  </div>
</div>

        </div>
    </div>
    <div className='nhgfchmgjv'>

</div><div className='nhgfchmgjv'>

</div>
    <Footer />

    </>
  )
}

export default BookingRoom