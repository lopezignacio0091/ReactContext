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
    CLOSE_SESION
} from '../types/types'


const LoginState = props => {

    const initialState = {
        loading: false,
        password: '',
        email:'',
        showPassword: false,
        usuarioLogueado:{},
        errorUsuario:false,
        logueado:false,
        
    }

    const [state, dispatch] = useReducer(LoginReducer, initialState);
    const setLoading = () =>{
        dispatch(
            { type: SET_LOADING }
        );
        }

        const handleClickShowPassword = () => {
            dispatch(
                { type: SET_VIEW_PASSWORD,
                    payload: !state.showPassword  }
            );
          };
        
          const handleMouseDownPassword = () => {
            dispatch(
                { type: SET_VIEW_PASSWORD, 
                  payload:!state.showPassword 
                });
            
          };

          const handleChange = () => (event) => {
            dispatch(
                { type: SET_PASSWORD_LOGIN,
                  payload: event.target.value     
            }) ;
      };
      const setEmail = () => (event) => {
        dispatch(
            { type: SET_EMAIL_LOGIN,
              payload: event.target.value     
        }) ;
  }; 
  
  
  const getUsuario = () => {
    setLoading()
    fetch("https://localhost:44380/api/Usuario/"+state.email+","+state.password).then((response) => {
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
    

  
  

  const logout= () => {
    dispatch({
        type: CLOSE_SESION,
        
    });
  }

 


    return (
        <LoginContext.Provider
            value={{
                loading: state.loading,
                usuarioLogueado:state.usuarioLogueado,
                logueado:state.logueado,
                errorUsuario:state.errorUsuario,
                email:state.email,
                password:state.password,
                showPassword:state.showPassword,
                handleClickShowPassword,
                handleMouseDownPassword,
                getUsuario,
                setEmail,
                handleChange,
                logout
            }}>
            {props.children}
        </LoginContext.Provider>
    )
}
export default LoginState;