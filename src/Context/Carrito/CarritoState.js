import React from 'react';
import { useReducer } from 'react';


import CarritoContext from './CarritoContext';
import CarritoReducer from './CarritoReducer';

import {
    SET_LOADING,
    SET_CARRITO,
    CLOSE_MESSAGE_CARRITO,
    ADD_CANTIDAD,
    REMOVE_CANTIDAD,
    SET_CARRITO_TOTAL,
    SET_CARRITO_DELETE

} from '../types/types'


const CarritoState = props => {

    const initialState = {
        loading: false,
        carrito: [],
        messageAddCarrito: false,
        cantidad: 0,
        total: 0,
    }

    const [state, dispatch] = useReducer(CarritoReducer, initialState);
    const setLoading = () =>
        dispatch(
            { type: SET_LOADING }
        );

    const postItemCarrito = (item) => {
        setTotal(item);
        const carrito = [];
        carrito.push(item);
        dispatch({
            type: SET_CARRITO,
            payload: carrito
        })
    }

    const setTotal = (item) => {
        let sumando = state.total + item.Precio;
        dispatch({
            type: SET_CARRITO_TOTAL,
            payload: sumando
        })
    }
    const handleCloseMessage = () => {
        dispatch({
            type: CLOSE_MESSAGE_CARRITO,
        })
    }

    const deleteProduct = (item) => {

        let j = 0;
        for (let x = 0; x < state.carrito.length; x++) {
            const elem = state.carrito[x];
            if (elem.Nombre == item.Nombre) {
                j = x;
            }
        }
        state.carrito.splice(j, 1);
        restarTotal(item);
        dispatch({
            type: SET_CARRITO_DELETE,
            payload: state.carrito
        })
    }

   const restarTotal = (item)=>{
    let restando = state.total - item.Precio;
        dispatch({
            type: SET_CARRITO_TOTAL,
            payload: restando
        })
   }


    return (
        <CarritoContext.Provider
            value={{
                loading: state.loading,
                carrito: state.carrito,
                messageAddCarrito: state.messageAddCarrito,
                cantidad: state.cantidad,
                total: state.total,
                postItemCarrito,
                deleteProduct,
                setLoading,
                handleCloseMessage
            }}>
            {props.children}
        </CarritoContext.Provider>
    )
}
export default CarritoState;