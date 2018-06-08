import { URL } from '../index';

const fetchSessionId = async () => {
  let sId = await fetch(`${URL}/sid`, {
    credentials: 'include'
  });
  // , {
  //   headers: {
  //          'Content-Type': 'application/json'
  //        }
  // });
  // sId = sId.json();
  sId = await sId;
  // console.log(sId);
}

export default fetchSessionId;
