import { URL } from '../index';

const fetchLikeHobby = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  fetch(`${URL}/hobbies/like`, {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default fetchLikeHobby;
