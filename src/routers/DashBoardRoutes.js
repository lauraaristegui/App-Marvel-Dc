import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import {Switch, Route, Redirect} from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarveScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
          <Switch>
              <Route  excat path="/marvel" component ={MarvelScreen}/>
              <Route  excat path="/hero/:heroeId" component ={HeroeScreen}/>
              <Route  excat path="/dc" component ={DcScreen}/>
          
              <Route  excat path="/search" component ={SearchScreen}/>
              

            <Redirect to="marvel" />
          </Switch>
          
      </div>
    </>
  )
}

export default DashBoardRoutes
