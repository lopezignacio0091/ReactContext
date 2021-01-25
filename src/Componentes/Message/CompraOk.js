import React from 'react'
import { useContext ,useEffect} from 'react';
import CarritoContext from '../../Context/Carrito/CarritoContext'
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import { BsFillHouseDoorFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    header: {
        color: indigo[500],
    },

}));

const SuccessMessage = (props) => {

    const classes = useStyles();
    const {Nombre} = props
    const carritoContext = useContext(CarritoContext);
    const {limpiarState} = carritoContext;

    // useEffect(() => {
    //     limpiarState()
    //   }, [])



    return(
        <div className='container mt-2'> 
            <br/>
            <div className='card'>
            <div className='card-header'>
              <h3 className={classes.header}>Muchas gracias por su compra {Nombre}</h3>
            </div>
            <div className='card-body'>
                <p>
                     Por email recibira detalles de la misma. 
                </p>
               <p className='msjSuccess'><BsFillHouseDoorFill></BsFillHouseDoorFill>{' '} <a href="#/">Home </a> 
                </p>
            </div>
            </div>
            <br/>
        </div>
       
    )
}
export default SuccessMessage;