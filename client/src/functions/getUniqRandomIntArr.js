const getUniqRandomIntArr = (numRandoms) => {
  // returns an array with unique random integers
  // where numRandoms is the max number and also numRandoms = result.length.
  const res = [];
  const uniqueRandoms = [];
  function makeUniqueRandom() {
      // refill the array if needed
      if (!uniqueRandoms.length) {
          for (let i = 0; i < numRandoms; i++) {
              uniqueRandoms.push(i);
          }
      }
      const index = Math.floor(Math.random() * uniqueRandoms.length);
      const val = uniqueRandoms[index];

      // now remove that value from the array
      uniqueRandoms.splice(index, 1);

      return val;
  }

  for (let i = 0; i < numRandoms; i++) {
      const rand = makeUniqueRandom();
      res.push(rand)
  }

  return res
}

export default getUniqRandomIntArr;
