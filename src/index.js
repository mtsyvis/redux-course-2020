import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncInc, changeTheme } from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    
);

// почти работает. есть готовый redux-logger
// function logger(state){
//     return function(next){
//         return function(action){
//             console.log('Prev State', state.getState())
//             console.log('Action', action)
//             const newState = next(action)
//             console.log('New State', newState.getState())
//             return newState
//         }
//     }
// }

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncInc());
})

store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
        btn.disabled = state.theme.disabled;
    })
    // document.getElementById("addBtn").disabled = state.buttons.addBtnDisabled;
    // document.getElementById("subBtn").disabled = state.buttons.subBtnDisabled;
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(newTheme));
})

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state.counter;
    document.body.className = state.theme.value;
})

store.dispatch({ type: 'INITIALIZE_APP' })
