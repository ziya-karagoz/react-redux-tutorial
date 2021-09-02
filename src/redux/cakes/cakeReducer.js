import { BUY_CAKE, REFILL_CAKE } from "./cakeTypes";
const initialState = { numOfCakes: 10 };

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case REFILL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 10,
      };

    default:
      return state;
  }
};
export default cakeReducer;
