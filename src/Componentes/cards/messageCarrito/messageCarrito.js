import React from 'react';
import { useContext} from 'react';
import CarritoContext from '../../../Context/Carrito/CarritoContext'
import Alert from 'react-bootstrap/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const MessageCarrito = () => {
    const carritoContext = useContext(CarritoContext);
    const { handleCloseMessage, messageAddCarrito } = carritoContext

    return (
        <Snackbar open={messageAddCarrito} autoHideDuration={6000} onClose={handleCloseMessage}>
            <Alert onClose={handleCloseMessage} severity="success">
                El producto se agrego al carrito
            </Alert>
        </Snackbar>
    );
}

export default MessageCarrito



