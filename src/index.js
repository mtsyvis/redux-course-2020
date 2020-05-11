import './styles.css'
import { createStore } from 'redux'
// import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncInc } from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0);

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



