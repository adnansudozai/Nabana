import {
  TOTALSCORE,
  REGISTER_USER,
  REMBEMBERME
} from '../types';
const initState = {
  totalScore: 0,
  user:[],
  isLogin:false,
  isRemember:false
  
};
const userdataReducer = (state = initState, action) => {

  switch (action.type) {
    case TOTALSCORE:
      return {
        ...state,
        totalScore: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isLogin:action.isLogin
      };
    case REMBEMBERME:
      return {
        ...state,
        isRemember:action.isRemember
      };
    default:
      return state;
  }
};

export default userdataReducer;
