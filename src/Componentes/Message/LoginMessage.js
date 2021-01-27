import React from 'react'
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
    const { Nombre } = props

    return (
        <div className='container cardPrincipal'>
            <br />
            <div className='card'>
                <div className='card-header'>
                    <h3 className={classes.header}>Bienvenid@ - {Nombre}</h3>
                </div>
                <div className='card-body'>
                    <p>
                        Gracias por volver a elegirnos ...
                </p>
                    <p className='msjSuccess'><BsFillHouseDoorFill></BsFillHouseDoorFill>{' '} <a href="#/">Home </a>
                    </p>
                </div>
            </div>

            <br />
        </div>

    )
}
export default SuccessMessage;