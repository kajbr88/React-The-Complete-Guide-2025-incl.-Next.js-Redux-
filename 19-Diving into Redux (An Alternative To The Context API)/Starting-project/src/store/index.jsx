import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({//when working with multiple slices like this we can still only have one redux store i.e. we call configureStore only once
    reducer: { counter: counterReducer, auth: authReducer },/*this root reducer property can take
 one reducer function as a argument like so "counterSlice.reducer"
 or and object that acts as a map of reducers like used
 here which are merged into the main reducer property here.*/

});

export default store;






// import { createStore } from 'redux';

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;