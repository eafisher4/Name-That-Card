import * as types from '../constants/actionTypes';

const initialState = {
  gameList: ['mtg', 'cars', 'sports'],
  selectedGame: '',
  
};

export default function (previousState = initialState, action) {
  let stateCopy;

  switch (action.type) {
    case types._______: {
      stateCopy = Object.assign({}, previousState);

      return stateCopy;
    }
    
    default:
      return previousState;
  }
}