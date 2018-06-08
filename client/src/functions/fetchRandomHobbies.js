import { URL } from '../index';
import getUniqRandomIntArr from './getUniqRandomIntArr'

const fetchRandomHobbies = async () => {
  let hobbies = await fetch(`${URL}/hobbies/all`, {
    credentials: 'include'
  });
  hobbies = hobbies.json();
  hobbies = await hobbies;
  // console.log(hobbies);

  const hobbiesLGTH = hobbies.length;
  const randArr = getUniqRandomIntArr(hobbiesLGTH);

  let randomHobbies = [];
  for (let i = 0; i < hobbiesLGTH; i++) {
    // console.log(randomHobbies);
    randomHobbies.push(hobbies[randArr[randArr.length - 1]])
    randArr.pop();
  }

  // console.log(randomHobbies);
  return randomHobbies;
}

export default fetchRandomHobbies;
