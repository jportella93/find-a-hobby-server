import { URL } from '../index';
import { numberOfCards } from '../components/Discover'
import getRandomInt from './getRandomInt'

const fetchRandomHobbies = async () => {
  let randomHobbies = [];
  let hobbies = await fetch(`${URL}/hobbies/all`);

  hobbies = hobbies.json()
  hobbies = await hobbies

  for (let i = 0; i < numberOfCards; i++) {
    randomHobbies.push(hobbies[getRandomInt(0,numberOfCards)])
  }

  return randomHobbies;
}

export default fetchRandomHobbies;
