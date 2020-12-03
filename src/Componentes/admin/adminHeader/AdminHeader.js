import React from "react";
import "../../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import indigo from '@material-ui/core/colors/indigo';
import { VscMail } from "react-icons/vsc";
// const carrito = require("../../../Img/carritoCompra.png");
 const useStyles = makeStyles((theme) => ({
        header: {
            color: indigo[100],
        },
    
    }));
const HeaderAdmin = () => {
    const classes = useStyles();
   
    return (
        <>
            <div className="card headerAdmin ">
                <div className="card-body">
                    <div className="container-fluid row">
                        <div className="col-md-10 col-sm-10 text-white">
                            <h1 >Admin{/* {" "}<img
                                alt=""
                                src={carrito}
                                width="50"
                                height="50"
                                color="white"
                                className="d-inline-block align-top"
                            /> */}</h1>
                        </div>
                        <div className="col-md-2 col-sm-2 text-white">
                        <Button variant="contained"  to='/mensaje'>
                        <Link > </Link><VscMail/>{' '} Mensajes
                             </Button> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
