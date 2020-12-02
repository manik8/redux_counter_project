
// count actions
export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const RESET = "RESET";

// modal actions
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

// products actions
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";

// action creators
export const decrease = () => {
    return {type: DECREASE}
}

export const increase = () => {
    return {type: INCREASE}
}

export const reset = () => {
    return {type: RESET};
}

export const modalOpen = (name, text) => {
    return {type: MODAL_OPEN, payload: {name, text}};
}
