import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCards from './HeroCards';

const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher]);
    


      return (
        <div className="card-columns animate__animated animate__fadeIn">
          
          {
            heroes.map(hero => (
             <HeroCards 
             key={hero.id}
               {...hero}
               />
           

            ))
          }
        </div>
      )
    }

export default HeroList

