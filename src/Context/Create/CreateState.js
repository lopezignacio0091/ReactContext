import React from 'react';
import { useReducer } from 'react';


import CreateContext from './CreateContext';
import CreateReducer from './CreateReducer';

import {
    SET_LOADING,
    SET_VIEW_PASSWORD,
    SET_PASSWORD_CREATE,
    SET_EMAIL_CREATE,
    SET_APELLIDO_CREATE,
    SET_NOMBRE_CREATE,
    EXISTE_USUARIO,
    POST_USUARIO
} from '../types/types'


const CreateState = props => {

    const initialState = {
        loading: false,
        password: '',
        email: '',
        apellido: '',
        nombre: '',
        showPassword: false,
        errorUsuario: false,
        usuarioCreate: false,


    }

    const [state, dispatch] = useReducer(CreateReducer, initialState);
    const setLoading = () => {
        dispatch(
            { type: SET_LOADING }
        );
    }

    const handleClickShowPassword = () => {
        dispatch(
            {
                type: SET_VIEW_PASSWORD,
                payload: !state.showPassword
            }
        );
    };

    const getUsuarioByEmail = () => {

        fetch("https://localhost:44380/api/Usuario/" + state.email).then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong');
            }
          })
          .then((responseJson) => {
            dispatch({
                type: EXISTE_USUARIO,
            });
          })
          .catch((error) => {
            postUsuario();
          });
      }

      
const postUsuario = () => {
    setLoading()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Apellido: state.apellido,
            Nombre: state.nombre,
            Email: state.email,
            EsAdmin: false,
            Password:state.password,


        })
    };
    fetch('https://localhost:44380/api/Usuario/', requestOptions)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    dispatch({
        type: POST_USUARIO,
    })

}

const handleMouseDownPassword = () => {
    dispatch(
        {
            type: SET_VIEW_PASSWORD,
            payload: !state.showPassword
        });

};

const setPassword = () => (event) => {
    dispatch(
        {
            type: SET_PASSWORD_CREATE,
            payload: event.target.value
        });
};
const setNombre = () => (event) => {
    dispatch(
        {
            type: SET_NOMBRE_CREATE,
            payload: event.target.value
        })
}
const setApellido = () => (event) => {
    dispatch(
        {
            type: SET_APELLIDO_CREATE,
            payload: event.target.value
        })
}
const setEmail = () => (event) => {
    dispatch(
        {
            type: SET_EMAIL_CREATE,
            payload: event.target.value
        });
};



return (
    <CreateContext.Provider
        value={{
            loading: state.loading,
            usuarioLogueado: state.usuarioLogueado,
            logueado: state.logueado,
            errorUsuario: state.errorUsuario,
            errorUsuario: state.errorUsuario,
            email: state.email,
            apellido: state.apellido,
            usuarioCreate: state.usuarioCreate,
            nombre: state.nombre,
            password: state.password,
            showPassword: state.showPassword,
            handleClickShowPassword,
            handleMouseDownPassword,
            setEmail,
            setPassword,
            setApellido,
            setNombre,
            getUsuarioByEmail,
        }}>
        {props.children}
    </CreateContext.Provider>
)
        }
export default CreateState;