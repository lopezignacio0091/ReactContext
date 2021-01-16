import React from 'react';
import { useContext,useEffect } from 'react';
import HomeContext from '../../Context/Home/HomeContext'
import LoginContext from '../../Context/Login/LoginContext'
import AdminHeader from './adminHeader/AdminHeader'
import AdminBody from './adminBody/AdminBody'
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import Progress from '../progress/Progress'
import Error from '../Error/Error'

const useStyles = makeStyles((theme) => ({
    header: {
        color: indigo[500],
    },

}));

const Home = () => {
    const loginContext = useContext(LoginContext);
    const { logueado } = loginContext; 
    const classes = useStyles();
    const homeContext = useContext(HomeContext);
    const { loading,getProductos } = homeContext;

    useEffect(() => {
        getProductos();
      }, [])

    if(loading){
        return(
          <Progress/>
        )
      }  
      if(!logueado){
        return (
            <Error/>
        )
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <br />
                        <AdminHeader></AdminHeader>
                    </div>
                </div>
                <br />
                <div className=''>
                    <div className="row mt-3">
                        <AdminBody></AdminBody>  
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}

export default Home
