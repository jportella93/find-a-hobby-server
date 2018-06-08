import { URL } from '../index';

const fetchDislikeHobby = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  fetch(`${URL}/hobbies/dislike`, {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default fetchDislikeHobby;
