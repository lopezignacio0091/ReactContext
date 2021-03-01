import React from 'react';
import { useReducer } from 'react';


import CarritoContext from './CarritoContext';
import CarritoReducer from './CarritoReducer';

import {
    SET_LOADING,
    CLOSE_MESSAGE_CARRITO,
    REMOVE_PRODUCTO_CARRITO,
    SET_CARRITO_DELETE,
    SET_ITEM_CARRITO,
    MSG_COMPRA,
    CLEAR_STAGE

} from '../types/types'


const CarritoState = props => {

    const initialState = {
        loadingCarrito: false,
        carrito: [],
        messageAddCarrito: false,
        cantidad: 0,
        total: 0,
        compraOk:false,
        itemRemove:false,

    }

    const [state, dispatch] = useReducer(CarritoReducer, initialState);
    const setLoading = () =>
        dispatch(
            { type: SET_LOADING }
        );

    const postItemCarrito = (item,carritoNuevo) => {
        agregarProductoCarrito(item,carritoNuevo)
    }


    const handleCloseMessage = () => {
        dispatch({
            type: CLOSE_MESSAGE_CARRITO,
        })
    }

    
    

    const checkLogoutCarrito=(usuarioId)=>{
        if(state.carrito.length>0){
            createCarritoUser(usuarioId);
        }
    }

        const agregarProductoCarrito=(producto,carrito)=>{
            setLoading()
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Cantidad:producto.Cantidad,
                    ProductoId: producto.Id,
                    CarritoId: carrito.carrito.carritoId,
                })
            };
            fetch('https://localhost:44380/api/CarritoProducto/', requestOptions)
                .then(response => response.json())
                .catch(error => console.error('Error:', error))
                .then(response => dispatch({type: SET_ITEM_CARRITO,}));    
        }


        const comprar =(idUsuario)=>{
            setLoading()
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    UsuarioId:idUsuario
                })
            };
            fetch('https://localhost:44380/api/Compras/', requestOptions)
                .then(response => response.json())
                .catch(error => console.error('Error:', error))
                .then(response =>
                dispatch({
                    type: MSG_COMPRA,
                }));    
        }
   
        const limpiarState=()=>{
            dispatch({
                type: CLEAR_STAGE,
            })
        }

    return (
        <CarritoContext.Provider
            value={{
                loadingCarrito: state.loadingCarrito,
                carrito: state.carrito,
                messageAddCarrito: state.messageAddCarrito,
                cantidad: state.cantidad,
                total: state.total,
                compraOk:state.compraOk,
                postItemCarrito,
                setLoading,
                handleCloseMessage,
                checkLogoutCarrito,
                agregarProductoCarrito,
                itemRemove:state.itemRemove,
                comprar,
                limpiarState
            }}>
            {props.children}
        </CarritoContext.Provider>
    )
}
export default CarritoState;