import {
    SET_LOADING,
    SET_CARRITO,
    CLOSE_MESSAGE_CARRITO,
    ADD_CANTIDAD,
    REMOVE_CANTIDAD,
    SET_CARRITO_TOTAL,
    SET_CARRITO_DELETE
} from '../types/types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_CARRITO:
            return {
                ...state,
                carrito: state.carrito.concat(action.payload),
                messageAddCarrito: true,
            }
        case CLOSE_MESSAGE_CARRITO:
            return {
                ...state,
                messageAddCarrito: false,
            }
        case ADD_CANTIDAD:
            return {
                ...state,
                cantidad: +1,
            }
        case REMOVE_CANTIDAD:
            return {
                ...state,
                cantidad: (state.cantidad == 0) ? 0 : -1,
            }
        case SET_CARRITO_TOTAL:
            return {
                ...state,
                total: action.payload,
            }
        case SET_CARRITO_DELETE:
            return {
                ...state,
                carrito: action.payload,
            }
    }
}
