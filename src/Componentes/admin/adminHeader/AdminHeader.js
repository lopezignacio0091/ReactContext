import React from "react";
import "../../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import { VscMail } from "react-icons/vsc";
import { FaDollarSign } from "react-icons/fa";

 const useStyles = makeStyles((theme) => ({
        header: {
            color: indigo[100],
        },
    
    }));
const HeaderAdmin = () => {
    const classes = useStyles();
   
    return (
        <>
            <div className="card headerAdmin">
                <div className="card-body">
                    <div className="container-fluid row">
                        <div className="col-md-8 col-sm-10 text-white">
                            <h1 >Admin</h1>
                        </div>
                        <div className="col-md-2 col-sm-2 text-white">
                        <a  className="btn btn-danger" variant="contained"  href='#/compras'>
                      <FaDollarSign/>{' '} Compras
                             </a>  
                        </div>
                        <div className="col-md-2 col-sm-2 text-white">
                        <a  className="btn btn-secondary" variant="contained"  href='#/mensaje'>
                      <VscMail/>{' '} Mensajes
                             </a>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
