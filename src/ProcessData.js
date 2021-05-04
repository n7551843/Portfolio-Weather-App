
const retrieveCorrectData = (input) => {

  // I used this to unpack and look at the data I got back from the API

  if (input !== null) {
    const {
      coord,
      weather,
      base,
      main,
      visibility,
      wind,
      clouds,
      dt,
      sys,
      timezone,
      id,
      name
    } = input;

    var holder = {
      name,
      weather,
      main,
      sys
    };

    return holder;
  }

}

export {
  retrieveCorrectData
};