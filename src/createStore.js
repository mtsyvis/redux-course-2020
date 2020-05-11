export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, { type: '__INIT__' });
    const subscribers = [];

    // we should use замыкания because js don't have privite methods. There are public methods after return
    // все что храниться в функции createStore будут приватные переменные
    return {
        // action === { type: 'INCREMENT' }
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub());
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        }
    }
}