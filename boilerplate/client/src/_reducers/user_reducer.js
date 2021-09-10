import { LGOIN_USER } from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LGOIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
