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

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case SET_NOMBRE:
            return {
                ...state,
                loading: true,
                Nombre:action.payload
            }
            case SET_EMAIL:
                return {
                    ...state,
                    loading: true,
                    Email:action.payload
                }
                case SET_MENSAJE:
                return {
                    ...state,
                    loading: true,
                    Mensaje:action.payload
                }
                case POST_CONTACTO:
                return {
                    ...state,
                    loading: true,
                    MensajeContacto:"Su Mensaje fue creado , a la brevedad tendra una respuesta del Mismo",
                    ContactoCreado:true,
                    Email:'',
                    Nombre:'',
                    Mensaje:'',
                }
                case MSG_ERROR_VALIDATED:
                    return {
                        ...state,
                        MensajeContacto:"Por favor complete todos los campos",
                        EmailValido:true
                    } 
                    case CLEAN_INPUTS:
                    return {
                        ...state,
                        Email:'',
                        Nombre:'',
                        Mensaje:'',
                    } 
                    case EMAIL_INVALIDO:
                    return {
                        ...state,
                        MensajeContacto:"Email invalido por favor ingrese un Email valido",
                        EmailValido:true
                    } 
                    case SET_USUARIO_LOGUEADO:
                        return {
                            ...state,
                            Email:action.payload.email,
                            Nombre:action.payload.nombre
                        } 
    


                    
    }
}
