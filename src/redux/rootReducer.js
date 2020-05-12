import { DECREMENT, INCREMENT, ASYNC_INC, CHANGE_THEME, DISABLE_ADD_BNT, DISABLE_SUB_BNT, DISABLE_BUTTONS, ENABLE_BUTTONS } from './types'
import { combineReducers } from 'redux';

export function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } else if (action.type == ASYNC_INC) {
        return state + 2
    }

    return state;
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

export function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload }
        case DISABLE_BUTTONS:
            return { ...state, disabled: true }
        case ENABLE_BUTTONS:
            return { ...state, disabled: false }
        default: return state
    }
}

const initialButtonState = {
    addBtnDisabled: false,
    subBtnDisabled: false
}

// export function btnDisableReducer(state = initialButtonState, action) {
//     switch (action.type) {
//         case DISABLE_ADD_BNT: return { ...state, addBtnDisable: true }
//         case DISABLE_SUB_BNT: return { ...state, subBtnDisable: true }
//         default: return state
//     }
// }

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    // buttons: btnDisableReducer
})