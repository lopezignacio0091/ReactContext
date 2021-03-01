import React from 'react';
import { useReducer } from 'react';


import LoginContext from './LoginContext';
import LoginReducer from './LoginReducer';

import {
  SET_LOADING,
  SET_VIEW_PASSWORD,
  SET_PASSWORD_LOGIN,
  SET_EMAIL_LOGIN,
  GET_USER_LOGUEADO,
  MSG_ERROR_VALIDATED,
  CLOSE_SESION,
  CLEAN_INPUTS,
  SET_PASSWORD_RECOVERY,
  CLEAN_ERROR,
  SET_VIEW_PASSWORD_REPEAT,
  
} from '../types/types'


const LoginState = props => {

  const initialState = {
    loading: false,
    password: '',
    email: '',
    passwordRepeat: '',
    showPassword: false,
    usuarioLogueado: {},
    errorUsuario: false,
    logueado: false,
    showPasswordRepeat: false,

  }

  const [state, dispatch] = useReducer(LoginReducer, initialState);
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

  const handleMouseDownPassword = () => {
    dispatch(
      {
        type: SET_VIEW_PASSWORD,
        payload: !state.showPassword
      });

  };


  const ClickShowPasswordRepeat = () => {
    dispatch(
      {
        type: SET_VIEW_PASSWORD_REPEAT,
        payload: !state.showPasswordRepeat
      }
    );
  };

  const MouseDownPasswordRepeat = () => {
    dispatch(
      {
        type: SET_VIEW_PASSWORD_REPEAT,
        payload: !state.showPasswordRepeat
      });

  };

  const handleChange = () => (event) => {
    dispatch(
      {
        type: SET_PASSWORD_LOGIN,
        payload: event.target.value
      })
  };
  const setPasswordRepeat = () => (event) => {
    dispatch(
      {
        type: SET_PASSWORD_RECOVERY,
        payload: event.target.value
      })
  };
  const setEmail = () => (event) => {
    dispatch(
      {
        type: SET_EMAIL_LOGIN,
        payload: event.target.value
      });
  };


  const getUsuario = () => {
    if (state.email && state.password) {
      setLoading()
      fetch("https://localhost:44380/api/Usuario/" + state.email + "," + state.password).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
        .then((result) => {
          dispatch({
            type: GET_USER_LOGUEADO,
            payload: result
          });
        })
        .catch((error) => {
          dispatch({
            type: MSG_ERROR_VALIDATED,
          })
        });
    }

  }

  const deleteProduct = (item) => {
    setLoading()
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: item.id,
          Cantidad:item.cantidad
        })
      };
      fetch('https://localhost:44380/api/CarritoProducto/', requestOptions)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => getUsuario())
}


  const cleanComponentes = () => {
    dispatch({
      type: CLEAN_INPUTS,

    });
  }
  const cleanError = () => {
    dispatch({
      type: CLEAN_ERROR,
    });
  }



  const logout = () => {
    dispatch({
      type: CLOSE_SESION,

    });
  }

  const recoveryPassword = () => {
    if (validandoContraseñas()) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Email: state.email,
          Password: state.password,
        })
      };
      fetch('https://localhost:44380/api/Usuario/', requestOptions)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => dispatch({
          type: GET_USER_LOGUEADO,
          payload: response
        }));
    } else {
      dispatch({
        type: MSG_ERROR_VALIDATED,
      })
    }
  }

  const validandoContraseñas = () => {

    if (state.password == state.passwordRepeat) {
      return true;
    }
    return false;
  }





  return (
    <LoginContext.Provider
      value={{
        loading: state.loading,
        usuarioLogueado: state.usuarioLogueado,
        logueado: state.logueado,
        errorUsuario: state.errorUsuario,
        email: state.email,
        passwordRepeat: state.passwordRepeat,
        password: state.password,
        showPassword: state.showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        ClickShowPasswordRepeat,
        MouseDownPasswordRepeat,
        showPasswordRepeat: state.showPasswordRepeat,
        getUsuario,
        setEmail,
        handleChange,
        deleteProduct,
        logout,
        cleanComponentes,
        setPasswordRepeat,
        cleanError,
        recoveryPassword
      }}>
      {props.children}
    </LoginContext.Provider>
  )
}
export default LoginState;