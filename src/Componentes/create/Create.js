import React from 'react';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateContext from '../../Context/Create/CreateContext';
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import FormControl from '@material-ui/core/FormControl';
import ComputerIcon from '@material-ui/icons/Computer';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import Progress from '../progress/Progress'
import Message from '../Message/CreateMessage'
import Footer from '../home/FooterHome/FooterHome'
const centered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
        left: 750,
        marginTop:'20%',
        marginLeft:'20%'
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
    container: {
        height: '100vh',
        flexDirection: 'column',
        marginTop:'10%',
        ...centered
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
        width: '100%',
        background: grey[100]
    },
    footer: {
        color: grey[100],
        padding: theme.spacing(3),
        textAlign: 'center',
        width: '100%',
        background: grey[100]
    },
    linkCuenta: {
        color: indigo[500],
        padding: theme.spacing(3),
        fontSize:16
    }
}));


const Create = () => {
    const createContext = useContext(CreateContext);
    const { loading,usuarioCreate ,errorUsuario,showPassword, handleClickShowPassword,getUsuarioByEmail, handleMouseDownPassword, setPassword,setNombre,setApellido,nombre,apellido, password, setEmail, email } = createContext;
    const classes = useStyles();
    if(loading){

        return(
            <Progress/>
        )
    }
if(usuarioCreate){
    return (
            <Message Nombre={nombre}/>
    )
}
    return (
        <>
        <div className='container-fluid formulario'>
             <Grid container spacing={3}>  
            <Card className={classes.root}
                justify="center"
                alignItems="center"
                >
                <Paper className={classes.header}><h2>
                    Crear Cuenta</h2><br>
                    </br><h6 className="text-black">EMPAJ ONLINE{' '}<ComputerIcon /></h6></Paper>
                <Divider variant="middle" />
                <CardContent>
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                        <Input
                            required
                            onChange={setNombre('nombre')}
                            endAdornment={<InputAdornment position="end">Nombre</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Nombre</FormHelperText>
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                        <Input
                            required
                            onChange={setApellido('apellido')}
                            endAdornment={<InputAdornment position="end">Apellido</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Apellido</FormHelperText>
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                        <Input
                            required
                            onChange={setEmail('email')}
                            endAdornment={<InputAdornment position="end">Email</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Email</FormHelperText>
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            required
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={setPassword('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id="standard-weight-helper-text">Password</FormHelperText>
                    </FormControl>
                    {(errorUsuario) &&
                        <Alert severity="error">El usuario ya existe por favor verifique lo mismo<a href="#/login">Aqui</a></Alert>
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
                        <Button variant="contained" color="primary" onClick={() => getUsuarioByEmail()} disabled={(!email || !password || !nombre|| !apellido)}>
                            Aceptar
                         </Button>
                    </Grid>
                    <Grid item xs={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <a  className="btn btn-danger" color="secondary" variant="contained"  href='#/'>
                            Cancelar
                             </a>  
                    </Grid>
                </CardActions>
            </Card>
            </Grid>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Create