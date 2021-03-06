import './styles.css'
import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, { counter: 0 });

window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
})

subBtn.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
})

asyncBtn.addEventListener('click', () => {

})

store.subscribe(() => console.log(store.getState()))

themeBtn.addEventListener('click', () => {

})

