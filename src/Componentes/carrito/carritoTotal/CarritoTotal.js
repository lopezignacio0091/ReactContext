import React from "react";
import { useContext } from 'react';
import CarritoContext from '../../../Context/Carrito/CarritoContext'
import LoginContext from '../../../Context/Login/LoginContext'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        background: indigo[500],
        color: indigo[50]
    },
    total: {
        background: blueGrey[300],
        color: indigo[50]
    },
    subtotal: {
        background: blueGrey[500],
        color: indigo[50]
    }
}));

const HeaderCarrito = () => {
    const loginContext = useContext(LoginContext);
     const { usuarioLogueado } = loginContext
    const carritoContext = useContext(CarritoContext);
    const { total ,comprar} = carritoContext
    const classes = useStyles();
    return (

        <div className="card bodyCarritoTotal">
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={6} className={classes.total} spacing={1}>
                        <h6>Total: </h6>
                    </Grid>
                    <Grid item xs={6} className={classes.total} spacing={1}>
                        <h6>{usuarioLogueado.carrito.total}</h6>
                    </Grid>
                    <Grid item xs={6} className={classes.subtotal} spacing={1}>
                        <h6>Total: </h6>
                    </Grid>
                    <Grid item xs={6} className={classes.subtotal} spacing={1}>
                        <h6>{usuarioLogueado.carrito.total} </h6>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12} spacing={1}></Grid>
                    <Grid item xs={12} className={classes.footer} spacing={1}>
                        <Button variant="contained" color="primary" onClick={() => comprar(usuarioLogueado.id)}><h5>Comprar</h5></Button>
                    </Grid>

                </Grid>
            </div>
        </div>

    );
};

export default HeaderCarrito;
