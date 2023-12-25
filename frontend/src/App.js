import { Routes , Route} from "react-router-dom"
import './App.css';
import Home from './Components/LandingPage/Home';

import aos from "aos"
import 'aos/dist/aos.css';
import Room from './Components/Room/Room';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Grand from "./Components/Room/SingleRoom/Grand";
import Cottage from "./Components/Room/SingleRoom/Cottage";
import Delight from "./Components/Room/SingleRoom/Delight";
import Packages from "./Components/About/Packages/Packages";
import Booking from "./Components/Bookings/Booking";
import Elight from "./Components/Room/SingleRoom/Elight";
import BookingRoom from "./Components/BookingFinal/BookingRoom";
import { useState } from "react";
import {WavyContainer , WavyLink} from "react-wavy-transitions"

aos.init()
function App() {

  const [pizza, setPizza] = useState({ base: "" , adult : "", child : "" , date : "" , datetwo : ""});

  console.log(pizza , "Collected base");

  const addBase = (base ) => {
    setPizza({ ...pizza, base })
  }

  const addadult = (adult) => {
    setPizza({ ...pizza, adult })
  }

  const addchild = (child) => {
    setPizza({ ...pizza, child })
  }
  const adddate = (date) => {
    setPizza({ ...pizza, date })
  }
  const seconddatedate = (datetwo) => {
    setPizza({ ...pizza, datetwo })
  }

  return (
  <>
  <WavyContainer />
<Routes >

  <Route path='/' element={<Home addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild} adddate={adddate} datetwo={seconddatedate}/>}></Route>
  <Route path='/rooms' element={<Room />}></Route>
  <Route path='/aboutus' element={<About />}></Route>
  <Route path='/contactus' element={<Contact />}></Route>
  <Route path='/grand' element={<Grand />}></Route>
  <Route path='/cottage' element={<Cottage />}></Route>
  <Route path='/delight' element={<Delight />}></Route>
  <Route path='/packages' element={<Packages />}></Route>
  <Route path='/booking' element={<Booking addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild} adddate={adddate} datetwo={seconddatedate} />}></Route>
  <Route path='/elight' element={<Elight />}></Route>
  <Route path='/Booking_Rooms' element={<BookingRoom pizza={pizza} />}></Route>
 
</Routes>

  </>
  );
}

export default App;
