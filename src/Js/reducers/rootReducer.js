import { SETTHEME } from "../Constants/actionsTypes";
const initState = {
  theme: "light",
};

const rootReducer = (state = initState, { type, theme }) => {
  switch (type) {
    case SETTHEME:
      return {
        ...state,
        theme: theme,
      };
    default:
      return state;
  }
};

export default rootReducer;
