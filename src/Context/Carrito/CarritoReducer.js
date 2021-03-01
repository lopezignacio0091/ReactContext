import {
    SET_LOADING,
    SET_CARRITO,
    CLOSE_MESSAGE_CARRITO,
    ADD_CANTIDAD,
    REMOVE_PRODUCTO_CARRITO,
    SET_CARRITO_TOTAL,
    SET_CARRITO_DELETE,
    SET_ITEM_CARRITO,
    MSG_COMPRA,
    CLEAR_STAGE
} from '../types/types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loadingCarrito:true
            }
        case SET_CARRITO:
            return {
                ...state,
                carrito: state.carrito.concat(action.payload),
                messageAddCarrito: true,
            }
            case SET_ITEM_CARRITO:
                return {
                    ...state,
                    messageAddCarrito: true,
                    loadingCarrito: false

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
            case MSG_COMPRA:
            return {
                ...state,
                compraOk:true,
                loadingCarrito: false
            }
            case CLEAR_STAGE:
            return {
                ...state,
                compraOk:false,
            }
        case REMOVE_PRODUCTO_CARRITO:
            return {
                ...state,
                loadingCarrito: false
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
