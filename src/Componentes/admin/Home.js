import React from 'react';
import { useContext,useEffect } from 'react';
import HomeContext from '../../Context/Home/HomeContext'
import AdminHeader from './adminHeader/AdminHeader'
import AdminBody from './adminBody/AdminBody'
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import Progress from '../progress/Progress'

const useStyles = makeStyles((theme) => ({
    header: {
        color: indigo[500],
    },

}));

const Home = () => {
    const classes = useStyles();
    const homeContext = useContext(HomeContext);
    const { loading,getImagen } = homeContext;

    useEffect(() => {
        getImagen();
    
      }, [])

    if(loading){
        return(
          <Progress/>
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
