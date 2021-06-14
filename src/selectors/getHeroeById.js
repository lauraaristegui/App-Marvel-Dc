import {heroes} from '../data/heroes'

export const getHeroeById = (id) => {

        // find se usa para encontrar 
        return heroes.find(hero => hero.id === id)

}
