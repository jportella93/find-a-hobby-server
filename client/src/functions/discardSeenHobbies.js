const discardSeenHobbies = (hobbies, seenHobbies) => {
  if (seenHobbies.length < 1) return hobbies;

  const filteredHobbies = [], discardedHobbies = [];

  hobbies.forEach(hobby => {
    seenHobbies.some(seenHobby => hobby._id === seenHobby._id)
      ? discardedHobbies.push(hobby)
      : filteredHobbies.push(hobby)
  })
  return filteredHobbies;
}

export default discardSeenHobbies;
