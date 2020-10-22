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
    SET_SELECT_FILTER_PRODUCTO
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

    }

    const [state, dispatch] = useReducer(HomeReducer, initialState);
    const setLoading = () => dispatch({ type: SET_LOADING });

    const getProductos = () => {
        fetch("https://localhost:44380/api/Producto/")
      .then(res => res.json())
      .then(
        (result) => {
            const objItemHome = [];
            for (let x = 0; x < result.length; x++) {
              const element = result[x];
              const item = {};
              item.Nombre = element.Nombre;
              item.Id = element.productoId;
              item.Precio = element.precio;
              item.Stock = element.stock;
              objItemHome.push(item);
            }
            dispatch({
                type: GET_PRODUCTOS,
                payload: objItemHome
            });
        })
    }

    const getImagen = () => {
      setLoading()
        fetch("https://localhost:44380/api/Imagen/")
      .then(res => res.json())
      .then(
        (result) => {
            const objItemHome = [];
            for (let x = 0; x < result.length; x++) {
                const element = result[x];
                const item = {};
                item.Nombre = element.producto.nombre;
                item.Id = element.productoId;
                item.Precio = element.producto.precio;
                item.Stock = element.producto.stock;
                item.Descripcion = element.producto.descripcion;
                item.ImagenUrl  = element.imagenUrl;
                item.Cantidad =0;
                item.Fecha=moment().format('LL');  ;
                objItemHome.push(item);
            }
            armandoOptionProduct(objItemHome);
            dispatch({
                type: GET_IMAGEN,
                payload: objItemHome
            });
        })
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
          payload: state.copiaListaProductos
        })
      }

      const addCantidad =(idItem)=>{
        filtrandoItem(idItem,'suma')
    }

    const removeCantidad =(idItem)=>{
      filtrandoItem(idItem,'resta')
    }

    const filtrandoItem = (idItem,cantidad)=>{

    for(let x=0 ;x<state.listaImagenes.length;x++){
        const elem = state.listaImagenes[x]; 

        if(elem.Id == idItem){
          elem.Cantidad=(cantidad == "suma")? elem.Cantidad + 1: elem.Cantidad - 1;
          elem.Cantidad =(elem.Cantidad <0)?0:elem.Cantidad;
          elem.Fecha = moment().format('LL');  
        }  
    }
      dispatch({
        type: GET_IMAGEN,
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
                setProductFilter,
                addCantidad,
                removeCantidad,
                setAllFilter,
                setSelectFilter,
                getProductos,
                setLoading,
                getImagen
            }}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeState;