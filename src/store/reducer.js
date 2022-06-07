import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.types";

export const reducer = (state, {type, payload}) => {

    switch(type) {
        case COUNTER_INCREMENT : {
            state.count = state.count + payload;
            return {...state}
        }
        case COUNTER_DECREMENT : {
            state.count = state.count - payload;
            return {...state}
        }
        default : {
            return state
        }
    }

//   if (action.type === "add") {
//     state.count++;
//   }
//   if (action.type === 'sub') {
//       state.count--;
//   }
//   return { ...state };
};
