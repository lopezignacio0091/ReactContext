import React from "react";
import { useContext ,useEffect} from 'react';
import Grafico from '../Grafico/Grafico'
import Porcentaje from '../Grafico/Porcentaje'


const bodyAdmin = () => {

    return (
        <>
                <div className="col-md-8 col-sm-12">
                    <Grafico />
                </div>

                <div className="col-md-4 col-sm-12">
                    <Porcentaje />
                </div>
        </>
    );
};

export default bodyAdmin;
