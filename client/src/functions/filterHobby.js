const filterHobby = (hobby, seenHobbies) => {

  if (seenHobbies.length < 1) return hobby;

    return seenHobbies.some(seenHobby => hobby._id === seenHobby._id)
      ? null
      : hobby
}

export default filterHobby;
