import './styles.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncInc } from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

window.store = store;

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

    counter.textContent = state;
})

store.dispatch({type: 'INITIALIZE_APP'})


themeBtn.addEventListener('click', () => {

})



