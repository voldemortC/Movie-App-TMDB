// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'; 
import counterReducer from './CounterSlice';
import authReducer from './AuthSlice';

// const counterReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter,
//               };
//         case 'INCREASEBY5':
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter,
//               };
//         case 'DECREMENT':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter,
//               };
//         case 'TOGGLECOUNTER':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter,
//               };      
//         default:
//             return state;
//     }
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;