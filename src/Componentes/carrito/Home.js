import React from 'react';
import { useContext ,useEffect} from 'react';
import LoginContext from '../../Context/Login/LoginContext'
import CarritoContext from '../../Context/Carrito/CarritoContext'
import HeaderCarrito from './carritoHeader/CarritoHeader'
import BodyCarrito from './carritoBody/CarritoBody'
import Error from '../Error/Error'
import Progress from '../progress/Progress'
import TotalCarrito from './carritoTotal/CarritoTotal'
import CompraOk from '../Message/CompraOk'
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';


const useStyles = makeStyles((theme) => ({
    header: {
        color: indigo[500],
    },
}));



const Home = () => {
    const loginContext = useContext(LoginContext);
    const { logueado ,getUsuario,loading,usuarioLogueado} = loginContext;
    const carritoContext = useContext(CarritoContext);
    const { compraOk} = carritoContext;
    const classes = useStyles();

    useEffect(() => {
        getUsuario()
      }, [])


    if(!logueado){
        return (
            <Error/>
        )
    }
    if(loading){
        return (
            <Progress/>
        )
    }

    if(compraOk){
        return(
            <CompraOk Nombre={usuarioLogueado.nombre}/>
        )
    }
    return (

        <>
            <div className="container-fluid cardPrincipal">
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
