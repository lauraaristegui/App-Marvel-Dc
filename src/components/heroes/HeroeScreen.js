import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../../selectors/getHeroeById';

const HeroeScreen = ({history}) => {

  const {heroeId}= useParams(); 
  console.log(heroeId)

  const hero = useMemo(() => getHeroeById(heroeId),[heroeId]);

  if(!hero){
    return <Redirect to="/"/>
  }

  const handleReturn = () => {
    if(history.length <=2){
      history.push('/')
    }else{
      history.goBack();
    }
     
  
  }

const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`../assets/heroes/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
    </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>Firts appearance: </b>{first_appearance}</li>
        </ul>

          <h5><b>Characters:</b></h5>
          <p>{characters}</p>

          <button 
          className="btn btn-info"
          onClick={handleReturn}
          >
            Return
          </button>
      </div>

    </div>
  )
}


export default HeroeScreen
