import React from 'react';
import { useContext} from 'react';
import CarritoContext from '../../../Context/Carrito/CarritoContext'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from 'react-bootstrap/Alert';
const MessageCarrito = ({color,mensaje}) => {
    const carritoContext = useContext(CarritoContext);
    const { handleCloseMessage, messageAddCarrito } = carritoContext

    return (
        <Snackbar open={messageAddCarrito} autoHideDuration={6000} onClose={handleCloseMessage}>
            <Alert severity={color}>
                {mensaje}
            </Alert>
        </Snackbar>
    );
}

export default MessageCarrito



