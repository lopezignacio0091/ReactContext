import React from 'react';
import { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactoContext from '../../Context/Contacto/ContactoContext';
import LoginContext from '../../Context/Login/LoginContext'
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import Footer from '../home/FooterHome/FooterHome'
import FooterPagos from '../home/FooterEnvio/FooterEnvio'
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import Error from '../Error/Error'
const carrito = require("../../Img/contacto.png");


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 745,
        left: 450,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%'
    },
    textField: {
        maxWidth: '100%',
        width: '80%'
    },
    header: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: indigo[500],
        background: grey[100],
        width: '100%'
    },
    footer: {
        background: grey[100],
        padding: theme.spacing(3),
        textAlign: 'center',
        width: '100%'
    }

}));


const FormularioContacto = () => {

    const contactoContext = useContext(ContactoContext);
    const {MensajeContacto,setMensaje, postContacto, ContactoCreado, EmailValido ,getUsuario,Nombre,Email} = contactoContext;
    const loginContext = useContext(LoginContext);
    const {usuarioLogueado,logueado} = loginContext;
    
    if(!logueado){
        return (
            <Error/>
        )
    }


    const classes = useStyles();

    useEffect(() => {
        getUsuario(usuarioLogueado)
    }, [])

    return (
        <div className="text-center mt-4 ml-5" >
            <Card className={classes.root}
                justify="center"
                alignItems="center">
                <Paper className={classes.header}><h2>
                    <img
                        alt=""
                        src={carrito}
                        width="50"
                        height="50"
                        color="white"
                        className="d-inline-block align-top"
                    />{" "}Formulario Contacto</h2></Paper>
                <Divider variant="middle" />
                <CardContent>
                    <Grid item md={12}
                        container
                    >

                        <TextField
                            label="Nombre"
                            id="margin-none"
                            className={classes.textField}
                            helperText="Ingrese su Nombre"
                            disabled
                            value={Nombre}
                        />

                    </Grid>


                    <Grid item xs={12}
                        container
                    >

                        <TextField
                            label="Email"
                            id="margin-none"
                            className={classes.textField}
                            helperText="Ingrese su Email"
                            disabled
                            value={Email}
                        />

                    </Grid>
                    <Grid item xs={12}
                        container
                    >

                        <TextField
                            id="outlined-multiline-static"
                            label="Mensaje"
                            multiline
                            rows={4}
                            helperText="Ingrese su Mensaje"
                            variant="outlined"
                            onChange={setMensaje}
                            className={classes.textField}
                        />
                    </Grid>
                    {(EmailValido) &&
                        <Alert severity="error">{MensajeContacto}</Alert>
                    }

                </CardContent>
                <Divider variant="middle" />

                <CardActions disableSpacing
                    className={classes.footer}
                >
                    <Grid item xs={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Paper>
                            <Button variant="contained" color="primary" onClick={() => postContacto()}>
                                Aceptar
                         </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Paper >
                            <Button variant="contained" color="secondary" to='/'>
                                <Link ></Link>
                                Cancelar
                             </Button>
                        </Paper>
                    </Grid>
                </CardActions>
                {(ContactoCreado) &&
                    <Alert severity="success">{MensajeContacto}</Alert>
                }
            </Card>
            <FooterPagos></FooterPagos>
            <Footer></Footer>
        </div>
    )
}
export default FormularioContacto