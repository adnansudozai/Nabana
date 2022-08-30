import {
  TOTALSCORE,
  REGISTER_USER,
  REMBEMBERME,
  COMPLETECOURSES
} from '../types';

export const savePoints = data => {
  return {
    type: TOTALSCORE,
    payload: data,
  };
};
export const regisretuser = data => {
  return {
    type: REGISTER_USER,
    payload: data,
    isLogin:true
  };
};
export const rememberData = data => {
  return {
    type: REMBEMBERME,
    isRemember:data
  };
};
export const savecompletecourse = data => {
  return {
    type: COMPLETECOURSES,
    completed:data
  };
};