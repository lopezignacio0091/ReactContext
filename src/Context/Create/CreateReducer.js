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
                case SET_PASSWORD_CREATE:
                return {
                    ...state,
                    password: action.payload
                }
                case SET_EMAIL_CREATE:
                return {
                    ...state,
                    email: action.payload
                }
                case SET_APELLIDO_CREATE:
                return {
                    ...state,
                    apellido: action.payload
                }
                case SET_NOMBRE_CREATE:
                return {
                    ...state,
                    nombre: action.payload
                }
                case EXISTE_USUARIO:
                return {
                    ...state,
                    errorUsuario: true,
                }
                case POST_USUARIO:
                return {
                    ...state,
                    loading:false,
                    usuarioCreate: true,
                }
                
    }
}
