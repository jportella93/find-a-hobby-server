import getUniqRandomIntArr from './getUniqRandomIntArr';
const URL = 'http://localhost:3000';

let token = localStorage.getItem('token');


const apiFetch = (path, originalOptions = {}, ...rest) => {
  const url = `${URL}${path}`
  const options = {
    ...originalOptions,
    headers: {
      Authorization: token && `Bearer ${token}`,
      ...originalOptions.headers
    }
  }
  return fetch(url, options, ...rest)
  .then(res => {
    token = res.headers.get('x-token');
    localStorage.setItem('token', token);
    return res
  })
  .then(res => res.json());
}

const getRandomHobbie = () => apiFetch('/hobbies/random');

const getRandomHobbies = async () => {
  console.log('token:', token);
  let hobbies = await apiFetch('/hobbies/all');
  // console.log('----',hobbies);

  const hobbiesLGTH = hobbies.length;
  const randArr = getUniqRandomIntArr(hobbiesLGTH);

  let randomHobbies = [];
  for (let i = 0; i < hobbiesLGTH; i++) {
    // console.log(randomHobbies);
    randomHobbies.push(hobbies[randArr[randArr.length - 1]])
    randArr.pop();
  }

  return randomHobbies;
}

const getRecommendedHobbies = async () => {
  let hobbies = await apiFetch(`/hobbies/rec:${token}`);
  console.log('----recommended hobbies:',hobbies);

  return hobbies;
}

const likeHobbie = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  return apiFetch('/hobbies/like', {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const dislikeHobbie = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  return fetch(`${URL}/hobbies/dislike`, {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default {
  getRandomHobbie,
  getRandomHobbies,
  getRecommendedHobbies,
  likeHobbie,
  dislikeHobbie,
};
