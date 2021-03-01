import {
    SET_LOADING,
    GET_COMPRA

} from '../types/types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case GET_COMPRA:
            return {
                ...state,
                loading: false,
                compras:action.payload.objItemHome,
                columna:action.payload.columns,
                options:action.payload.options,
            }           
    }
}
