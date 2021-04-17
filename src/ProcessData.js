import React from 'react';

const retrieveCorrectData = (input) => {

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
      sys
    } = input;


    return {
      weather,
      main,
      sys
    };
  }

}

export {
  retrieveCorrectData
};