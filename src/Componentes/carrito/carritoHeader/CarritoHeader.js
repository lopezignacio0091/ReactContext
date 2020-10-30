import React from "react";
import "../../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
const carrito = require("../../../Img/carritoCompra.png");
 const useStyles = makeStyles((theme) => ({
        header: {
            color: indigo[500],
       },    
    }));
const HeaderCarrito = () => {
    const classes = useStyles();
   
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container-fluid row">
                        <div className="col-md-9 col-sm-12">
                            <h2 className={classes.header}>Carrito{" "}<img
                                alt=""
                                src={carrito}
                                width="50"
                                height="50"
                                color="white"
                                className="d-inline-block align-top"
                            /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderCarrito;
