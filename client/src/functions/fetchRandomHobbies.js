import { URL } from '../index';
// import { numberOfCards } from '../components/Discover'
import getUniqRandomIntArr from './getUniqRandomIntArr'

const fetchRandomHobbies = async () => {
  let hobbies = await fetch(`${URL}/hobbies/all`, {
    credentials: 'include'
  });
  hobbies = hobbies.json();
  hobbies = await hobbies;
  // console.log(hobbies);

  const hobbiesLGTH = hobbies.length;
  const uniqRandomIntArr = getUniqRandomIntArr(hobbiesLGTH);

  let randomHobbies = [];
  for (let i = 0; i < hobbiesLGTH; i++) {
    // console.log(randomHobbies);
    randomHobbies.push(hobbies[uniqRandomIntArr[uniqRandomIntArr.length - 1]])
    uniqRandomIntArr.pop();
  }

  // console.log(randomHobbies);
  return randomHobbies;
}

export default fetchRandomHobbies;
