import { createSlice, createStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux'
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',//can be any name not should not have to match the couter property of the initialCounterState object.
    initialState: initialCounterState,
    reducers: {//reducers is a map of all the reducers this slice needs.
        increment(state) {//all methods receive the latest state.
            state.counter++;/*mutating state is allowed here as redux tookit internally
    uses a package called imgur which clones the existing 
    state keeping all the state which we are not editing and
 creates a new state object.*/
        },

        // if (action.type === 'increment') { //Redux increment reducer method. 
        //     return {
        //       counter: state.counter + 1;
        //     };
        // }

        decrement(state) {
            state.counter--;
        },

        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        
        // if (action.type === 'increase') { //Redux increase reducer method. 
        //     return {
        //     counter: state.counter + action.amount;
        //     };
        // }
        
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;