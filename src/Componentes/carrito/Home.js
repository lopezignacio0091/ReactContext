import React from 'react';
import HeaderCarrito from './carritoHeader/CarritoHeader'
import BodyCarrito from './carritoBody/CarritoBody'
import TotalCarrito from './carritoTotal/CarritoTotal'
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';


const useStyles = makeStyles((theme) => ({
    header: {
        color: indigo[500],
    },
}));

const Home = () => {
    const classes = useStyles();
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <br />
                        <HeaderCarrito></HeaderCarrito>
                    </div>
                    <div className="col-sm-12">
                        <br />
                        <div className='card card-body mt-3 text-center'>
                            <p className={classes.header}>Mis Productos</p>
                            <div className="row">
                            <div className='col-sm-8 text-center'>
                                <BodyCarrito></BodyCarrito>
                            </div>
                            <div className='col-sm-4  text-center'>
                                <TotalCarrito/>
                            </div>
                        </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
