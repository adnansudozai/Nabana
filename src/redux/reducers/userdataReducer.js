import {
  TOTALSCORE,
  REGISTER_USER,
  REMBEMBERME,
  COMPLETECOURSES
} from '../types';
const initState = {
  totalScore: 0,
  user:[],
  isLogin:false,
  isRemember:false,
  completed:[]
  
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
    case COMPLETECOURSES:
      return {
        ...state,
        completed:action.completed
      };
    default:
      return state;
  }
};

export default userdataReducer;
