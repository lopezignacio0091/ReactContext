import  React from 'react';
import { useReducer } from 'react';


import HomeContext from './HomeContext';
import HomeReducer from './HomeReducer';
import moment from 'moment';
import {
    SET_LOADING,
    GET_PRODUCTOS,
    GET_IMAGEN,
    SET_FILTER_PRODUCT,
    GET_IMAGEN_FILTER,
    GET_COLUMN_PRODUCTO,
    SET_SELECT_FILTER_PRODUCTO,
    GET_DATE_GRAFICOS,
    SET_CANTIDAD_PRODUCTO
} from '../types/types'


const HomeState = props => {
  
    const initialState = {
        loading: false,
        listaProductos: [],
        listaImagenes:[],
        copiaListaImagenes:[],
        copiaListaProductos:[],
        filtroProducto:'',
        ColumProducto:[],
        selectFilter:'Seleccione Producto',
        listProductLabel : [],
        listProductDate : [],
        cantidad : 0,

    }

    const [state, dispatch] = useReducer(HomeReducer, initialState);
    const setLoading = () => dispatch({ type: SET_LOADING });

    const getProductos = () => {
      setLoading()
        fetch("https://localhost:44380/api/Producto/")
      .then(res => res.json())
      .then(
        (result) => {
          DataGraficos(result);
            const objItemHome = [];
            for (let x = 0; x < result.length; x++) {
              const element = result[x];
              const item = {};
              item.Nombre = element.nombre;
              item.Id = element.productoId;
              item.Precio = element.precio;
              item.Stock = element.stock;
              item.Descripcion = element.descripcion;
              item.ImagenUrl  = element.imagen.imagenUrl;
              item.Cantidad =0;
              objItemHome.push(item);
              armandoOptionProduct(objItemHome);
            }
            dispatch({
                type: GET_PRODUCTOS,
                payload: objItemHome
            });
        })
    }

  
 
    const DataGraficos =(item)=>{
      const objItemLabel = [];
      const objItemDate = [];

      for (let x = 0; x < item.length; x++) {
        const element = item[x];
         objItemLabel.push(element.nombre);
         objItemDate.push(element.stock);
    }
      dispatch({
        type: GET_DATE_GRAFICOS,
        payload: {objItemLabel,objItemDate}
    });

    }
    const armandoOptionProduct = (columna) => {
        const item = { key:"Seleccione Producto", text:"Seleccione Producto" }
        const Columa = [item];
        columna.map((elemt) => {
          const item = { key: "", text: "" }
          item.key = elemt.Nombre;
          item.text = elemt.Nombre;
          Columa.push(item);
        })
        dispatch({
          type: GET_COLUMN_PRODUCTO,
          payload: Columa,
        })
      }


    const setProductFilter = (fileItem) => {
        state.listaImagenes = state.copiaListaImagenes;
        dispatch({
          type: SET_FILTER_PRODUCT,
          payload: fileItem.target.value,
        });
        if (fileItem.target.value != '') {
            const filter  = state.listaImagenes.filter(itemCO => {
              return itemCO.Nombre.toLowerCase().match(fileItem.target.value);
            })
            getfilterProductos(filter);
          }else{
            getAllProductos();
          }
      };


      const setSelectFilter = (fileItem) => {
        state.listaImagenes = state.copiaListaImagenes;
        dispatch({
          type: SET_SELECT_FILTER_PRODUCTO,
          payload: fileItem.target.value,
        });
        if (fileItem.target.value != 'Seleccione Producto') {
            const filter  = state.listaImagenes.filter(itemCO => {
              return itemCO.Nombre ==fileItem.target.value;
            })
            getfilterProductos(filter);
          }else{
            getAllProductos();
          }
      };

      const setAllFilter = () => {
        dispatch({
            type: GET_IMAGEN,
            payload: state.copiaListaImagenes
        });
    }
      const getfilterProductos = (filter) => {
        dispatch({
          type: GET_IMAGEN_FILTER,
          payload: filter
        })
      }
  

      const getAllProductos = () => {
        dispatch({
          type: GET_PRODUCTOS,
          payload: state.copiaListaImagenes
        })
      }

      const addCantidad =(idItem)=>{
      filtrandoItem(idItem,'suma')
    }

    const removeCantidad =(idItem)=>{
      filtrandoItem(idItem,'resta')
    }

    const filtrandoItem = (idItem,tipo)=>{

    for(let x=0 ;x<state.listaImagenes.length;x++){
        const elem = state.listaImagenes[x]; 

        if(elem.Id == idItem){
          elem.Cantidad=(tipo == "suma")? elem.Cantidad + 1: elem.Cantidad - 1;
          elem.Cantidad =(elem.Cantidad <0)?0:elem.Cantidad;
        }  
    }
      dispatch({
        type: GET_PRODUCTOS,
        payload: state.listaImagenes
    });


    }
  
    return (
        <HomeContext.Provider
            value={{
                loading: state.loading,
                listaProductos: state.listaProductos,
                listaImagenes:state.listaImagenes,
                filtroProducto:state.filtroProducto,
                ColumProducto:state.ColumProducto,
                selectFilter:state.selectFilter,
                listProductLabel:state.listProductLabel,
                listProductDate:state.listProductDate,
                cantidad:state.cantidad,
                setProductFilter,
                addCantidad,
                removeCantidad,
                setAllFilter,
                setSelectFilter,
                getProductos,
                setLoading,
               
            }}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeState;