import React from "react";
import { useContext ,useEffect} from 'react';
import CompraContext from '../../../Context/Compras/CompraContext'
import LoginContext from '../../../Context/Login/LoginContext'
import MUIDataTable from "mui-datatables";
import Loading from '../../progress/Progress'
import Error from '../../Error/Error'
const IconMensaje = require("../../../Img/compras-públicas.jpg");





const Compras = () => {
    const loginContext = useContext(LoginContext);
    const { logueado } = loginContext; 
    const compraContext = useContext(CompraContext);
    const { getCompras,columna,options,loading,compras} = compraContext;
   
   

    useEffect(() => {
        getCompras();
      }, [])



      if(loading){
          return(
            <Loading/>
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
                    <div className="col-sm-12 mt-5">
                        <br />
                        <div className="card mt-4 fondoCompras">
                            <div className="card-body">
                                <div className="container-fluid row">
                                    <div className="col-md-9 col-sm-12">
                                        <h1 className="text-left text-white">Compras</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="row mt-3">
                    <div className="card-body">
                                <div className="container-fluid row">
                                    <div className="col-md-9 col-sm-12 text-white">
                                    <MUIDataTable 
                                        title={"Compras"} 
                                        data={compras} 
                                        columns={columna} 
                                        options={options} 
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default Compras;
