import React from 'react';
import { useReducer } from 'react';


import ContactoContext from './ContactoContext';
import ContactoReducer from './ContactoReducer';

import {
    SET_LOADING,
    POST_CONTACTO,
    SET_NOMBRE,
    SET_EMAIL,
    SET_MENSAJE,
    MSG_ERROR_VALIDATED,
    CLEAN_INPUTS,
    EMAIL_INVALIDO,
    SET_USUARIO_LOGUEADO
} from '../types/types'


const HomeState = props => {

    const initialState = {
        loading: false,
        Nombre: "",
        Mensaje: "",
        Email: "",
        MensajeContacto: '',
        msgError:false,
        ContactoCreado:false,
        EmailValido:false,
        ContactoId :0

    }

    const [state, dispatch] = useReducer(ContactoReducer, initialState);
    const setLoading = () => dispatch({ type: SET_LOADING });

    const postContacto = () => {

     if(validateEmail(state.Email)){
        if (!validateContacto(state.Nombre, state.Mensaje)) {

            dispatch({
                type: MSG_ERROR_VALIDATED,
                payload: true
            })
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    ContactoId:state.ContactoId,
                    Nombre: state.Nombre,
                    Email:state.Email,
                    Mensaje:state.Mensaje
                
                })
            };
             fetch('https://localhost:44380/api/Contacto/', requestOptions)
               .then(response => response.json())
               .catch(error => console.error('Error:', error))
               .then(response => console.log('Success:', response));
               dispatch({
                type: POST_CONTACTO,
                payload: true
            })
    
        }
     }else{
        dispatch({
            type: EMAIL_INVALIDO,
            payload: true
        })
     }
    }

    const cleanInputs = () =>{ 
        dispatch({
            type:CLEAN_INPUTS
        })
    }


    const validateContacto= (Nombre, Mensaje) => {
        if (Nombre.length > 0 && Mensaje.length > 0 ) {
            return true;
        } else {
            return false;
        }
    }

    const validateEmail= (Email) => {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test(Email) && Email.length>0){
            return true;
           } else {
           return false;
           }
    }

    const getUsuario=(usuario)=>{
        dispatch({
            type: SET_USUARIO_LOGUEADO,
            payload: usuario
        })
    }

    const setNombre = (nombre) => {

        dispatch({
            type: SET_NOMBRE,
            payload: nombre.target.value
        })

    }

    const setEmail = (email) => {

        dispatch({
            type: SET_EMAIL,
            payload: email.target.value
        })

    }

    const setMensaje = (mensaje) => {

        dispatch({
            type: SET_MENSAJE,
            payload: mensaje.target.value
        })

    }

    return (
        <ContactoContext.Provider
            value={{
                loading: state.loading,
                msgError:state.msgError,
                Mensaje:state.Mensaje,
                Email:state.Email,
                Nombre:state.Nombre,
                MensajeContacto: state.MensajeContacto,
                ContactoCreado:state.ContactoCreado,
                EmailValido:state.EmailValido,
                cleanInputs,
                setLoading,
                postContacto,
                getUsuario,
                setNombre,
                setEmail,
                setMensaje
            }}>
            {props.children}
        </ContactoContext.Provider>
    )
}
export default HomeState;