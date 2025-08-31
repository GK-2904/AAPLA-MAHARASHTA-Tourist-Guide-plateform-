import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HillStation from './HillStation'
import Beaches from './Beaches'
import Temples from './Temples'
import Gallery from './Gallery'
import About from '../Pages/About'
import Eroor from '../Pages/Error'
import TouristPlaceDetails from '../Componests/TouristPlaceDetails'
import TemplesDetails from '../Componests/TemplesDetails'
import HillStationDetails from '../Componests/HillStationDetails'
import GalleryDetails from '../Componests/GalleryDetails'
import BeachesDetails from '../Componests/BeachesDetails'
import Nav from './Nav'


const Routers = () => {


  return (

    <BrowserRouter>
    

    <Nav/>

    <Routes>

        <Route path='/hillstation' element={<HillStation/>}></Route>
        <Route path='/beaches' element={<Beaches/>}> </Route>
        <Route path='/' element={<Temples/>}> </Route>
        <Route  path='/gallery' element={<Gallery/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       <Route path='/TouristPlaceDetails/:id'element={<TouristPlaceDetails/>}></Route>
       <Route path='/TemplesDetails/:id' element={<TemplesDetails/>}></Route>
       <Route path='/HillStationDetails/:id' element={<HillStationDetails/>}></Route>
       <Route path='/GalleryDetails/:id' element={<GalleryDetails/>}></Route>
       <Route path='/BeachesDetails/:id' element={<BeachesDetails/>}></Route>
       <Route path='/error' element={<Eroor/>}></Route>

    </Routes>
    
    </BrowserRouter>
   
  )
}

export default Routers