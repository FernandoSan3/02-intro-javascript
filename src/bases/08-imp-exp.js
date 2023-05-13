// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';
import  heroes, {owners}  from "./../data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );
console.log(getHeroeById(2));

// find?, filter
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner );
console.log(getHeroesByOwner('Marvel'));

console.log(owners);

export {
    getHeroeById,
}