import { BUY_CAKE } from "./cakeTypes";
import { REFILL_CAKE } from "./cakeTypes";
// actions
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export const refillCake = () => {
  return { type: REFILL_CAKE };
};
