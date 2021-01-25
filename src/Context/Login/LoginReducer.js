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
    SET_VIEW_PASSWORD_REPEAT
} from '../types/types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            case SET_VIEW_PASSWORD:
                return {
                    ...state,
                    showPassword: action.payload
                }
                case SET_VIEW_PASSWORD_REPEAT:
                return {
                    ...state,
                    showPasswordRepeat: action.payload
                }
                case SET_PASSWORD_LOGIN:
                return {
                    ...state,
                    password: action.payload
                }
                case SET_PASSWORD_RECOVERY:
                return {
                    ...state,
                    passwordRepeat: action.payload
                }
                case SET_EMAIL_LOGIN:
                return {
                    ...state,
                    email: action.payload
                }
                case GET_USER_LOGUEADO:
                return {
                    ...state,
                    usuarioLogueado: action.payload,
                    errorUsuario:false,
                    logueado:true,
                    loading: false,
                }
                case MSG_ERROR_VALIDATED:
                    return {
                        ...state,
                        errorUsuario:true,
                        loading: false
                    }
                    case CLEAN_ERROR:
                        return {
                            ...state,
                            errorUsuario:false,
                        }
                    case CLOSE_SESION:
                        return {
                            ...state,
                            usuarioLogueado:{},
                            errorUsuario:false,
                            logueado:false,
                            password:"",
                            email:""
                        }
                        case CLEAN_INPUTS:
                            return {
                                ...state,
                                email:'',
                                password:'',
                               
                            }
    }
}
