import React from "react";
import { useContext ,useEffect} from 'react';
import ContactoContext from '../../../Context/Contacto/ContactoContext'
import LoginContext from '../../../Context/Login/LoginContext'
import MUIDataTable from "mui-datatables";
import Loading from '../../progress/Progress'
import Error from '../../Error/Error'
const IconMensaje = require("../../../Img/icons8-email-open-48.png");

const Mensaje = () => {
    const loginContext = useContext(LoginContext);
    const { logueado } = loginContext; 
    const contactoContext = useContext(ContactoContext);
    const { getMensajes,columna,mensaje,options,loading} = contactoContext;
    
    useEffect(() => {
        getMensajes();
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
                    <div className="col-sm-12 mt-2">
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid row">
                                    <div className="col-md-9 col-sm-12">
                                        <h3><img
                                alt=""
                                src={IconMensaje}
                                width="50"
                                height="50"
                                color="white"
                                className="d-inline-block align-top"
                            />{" "}Mensajes</h3>
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
                                        title={"Mensajes"} 
                                        data={mensaje} 
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

export default Mensaje;
