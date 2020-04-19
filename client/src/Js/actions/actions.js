import {
  SETTHEME
  } from '../Constants/actionsTypes';


  export const setTheme = (theme) => {
    return {
      type: SETTHEME,
      theme
    }
  }