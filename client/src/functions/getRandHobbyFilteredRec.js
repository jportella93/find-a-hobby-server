import ApiClient from '../lib/apiClient'
import filterHobby from './filterHobby'

const getRandHobbyFilteredRec = async () => {
  let randomHobbie = await ApiClient.getRandomHobbie();
  const seenHobbies = [...this.props.seenHobbies, ...this.state.hobbies];
  randomHobbie = filterHobby(randomHobbie, seenHobbies);
  return randomHobbie ? randomHobbie : getRandHobbyFilteredRec()
}

export default getRandHobbyFilteredRec;
