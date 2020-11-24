import {
    SET_LOADING,
    GET_PRODUCTOS,
    GET_IMAGEN,
    SET_FILTER_PRODUCT,
    GET_IMAGEN_FILTER,
    GET_COLUMN_PRODUCTO,
    SET_SELECT_FILTER_PRODUCTO,
    GET_DATE_GRAFICOS,
} from '../types/types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTOS:
            return {
                ...state,
                loading: false,
                listaProductos: action.payload,
                copiaListaProductos: action.payload
            }
        case GET_IMAGEN:
            return {
                ...state,
                loading: false,
                listaImagenes: action.payload,
                copiaListaImagenes: action.payload,
                selectFilter:'Seleccione Producto'
            }
        case SET_FILTER_PRODUCT:
            return {
                ...state,
                filtroProducto: action.payload
            }
        case GET_IMAGEN_FILTER:
            return {
                ...state,
                listaImagenes: action.payload
            }
        case GET_COLUMN_PRODUCTO:
            return {
                ...state,
                ColumProducto: action.payload
            }
            case SET_SELECT_FILTER_PRODUCTO:
            return {
                ...state,
                selectFilter: action.payload
            }
            case GET_DATE_GRAFICOS:
                return {
                    ...state,
                    listProductLabel:action.payload.objItemLabel,
                    listProductDate:action.payload.objItemDate
                }
            



    }
}
