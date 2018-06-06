import { URL } from '../index';
// import { numberOfCards } from '../components/Discover'
import getUniqRandomIntArr from './getUniqRandomIntArr'

const fetchRandomHobbies = async () => {
  let hobbies = await fetch(`${URL}/hobbies/all`);
  hobbies = hobbies.json();
  hobbies = await hobbies;

  const hobbiesLGTH = hobbies.length;
  const uniqRandomIntArr = getUniqRandomIntArr(hobbiesLGTH);
  
  let randomHobbies = [];
  for (let i = 0; i < hobbiesLGTH; i++) {
    randomHobbies.push(hobbies[uniqRandomIntArr[uniqRandomIntArr.length - 1]])
    uniqRandomIntArr.pop();
  }

  return randomHobbies;
}

export default fetchRandomHobbies;
