const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {//state is the current state that counterReducer receives.
    if (action.type === 'increment')
        return {
            counter: state.counter + 1,
        };

    if (action.type === 'decrement')
        return {
            counter: state.counter - 1,
        };
    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });//dispatch is method which dispatches an action(action is an javascript object).
store.dispatch({ type: 'decrement' });  