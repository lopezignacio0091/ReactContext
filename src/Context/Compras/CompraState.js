import React from 'react';
import { useReducer } from 'react';

import moment from 'moment';
import CompraContext from './CompraContext';
import CompraReducer from './CompraReducer';

import {
    SET_LOADING,
    GET_COMPRA
} from '../types/types'


const CompraState = props => {

    const initialState = {
        loading: false,
        compras:[],
        columna:[],
        options:{}

    }

    const [state, dispatch] = useReducer(CompraReducer, initialState);
    const setLoading = () => {
        dispatch(
            { type: SET_LOADING }
        );
    }

    const getCompras =()=>{
        setLoading
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://localhost:44380/api/Compras/", requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
                const objItemHome = [];
                for (let x = 0; x < result.length; x++) {
                  const element = result[x];
                  const item = {};
                  item.Id=element.id;
                  item.Nombre=element.usuario.nombre;
                  item.Email=element.usuario.email;
                  item.Fecha = moment(element.fecha).format("YYYY-MM-DD");
                  item.Total = element.total
                  objItemHome.push(item);
                }
                const columns = ["Id", "Nombre", "Email", "Fecha","Total"];
                const options = {
                  filterType: 'checkbox',
                };
                dispatch({
                    type: GET_COMPRA,
                    payload: {objItemHome,columns,options}
                });
            }).catch(error => console.log('error', error));

    }

return (
    <CompraContext.Provider
        value={{
            loading: state.loading,
            compras:state.compras,
            columna:state.columna,
            options:state.options,
            getCompras
        }}>
        {props.children}
    </CompraContext.Provider>
)
        }
export default CompraState;