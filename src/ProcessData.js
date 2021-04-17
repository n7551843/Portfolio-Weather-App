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