import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import HeroCards from '../heroes/HeroCards';
import { getHeoresByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({history}) => {

    const location  = useLocation();
    const {q = ''} = queryString.parse(location.search)

   
  const [values, handleInputChange] = useForm({
      searchText:q


  });

  const {searchText} = values;
   const heroFiltered = useMemo(() => getHeoresByName(q),[q]);

    
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`);
    }
  return (
    <div>
      <h1>Searh Screen</h1>
      <hr/>

      <div className="row">
          <div className="col-5">
            <h4>Search Form</h4>
            <hr/>

            <form onSubmit={handleSearch}>
                <input
                type="text"
                placeholder="Find your hero"
                className="form-control"
                name="searchText"
                value={searchText}
                autoComplete="off"
                onChange={handleInputChange}
                />

                <button
                type="submit"
                 className="btn m-1 btn-block btn-outline-primary"
                
                >
                    Search
                </button>
            </form>

          </div>


          <div className="col-7">
            <h4>Results</h4>
            <hr/>

                {
                    (q === '')
                    && <div className="alert alert-info">
                        Search a hero
                    </div>
                }
                 {
                    (q !== '' && heroFiltered.length === 0) 
                    && <div className="alert alert-danger">
                        There is no a hero with {q}
                    </div>
                }

                {
                    heroFiltered.map((hero)=>(
                      <HeroCards
                       key={hero.id}
                       {...hero}
                      />
                    ))
                }
          </div>
      </div>
      </div>
    
  )
}

export default SearchScreen
