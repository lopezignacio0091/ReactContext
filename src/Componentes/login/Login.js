import React from 'react';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginContext from '../../Context/Login/LoginContext';
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
import Message from '../Message/LoginMessage'
import CircularProgress from '@material-ui/core/CircularProgress';
import { IoMdContact } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
        left: 750,
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

const Login = () => {

    const loginContext = useContext(LoginContext);
    const { loading, showPassword,logueado, handleClickShowPassword, handleMouseDownPassword, handleChange, password, setEmail, usuarioLogueado,getUsuario, errorUsuario, email,cleanComponentes } = loginContext;
    const classes = useStyles();

    useEffect(() => {
        cleanComponentes();
    
      }, [])

    if(logueado){
       return (
           <Message Nombre={usuarioLogueado.nombre} />
       )
    }

    return (
        <div className="text-center mt-5 ml-5" >
            <Card className={classes.root}
                justify="center"
                alignItems="center">
                <Paper className={classes.header}><h2>
                    Bienvenido</h2><br>
                    </br><h6 className="text-black">EMPAJ ONLINE{' '}<ComputerIcon /></h6></Paper>
                <Divider variant="middle" />
                <CardContent>
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
                            onChange={handleChange('password')}
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
                        <Alert severity="error">Password o Email invalido</Alert>
                    }
                </CardContent>
                <Divider variant="middle" />
                <Grid item xs={12}
                        container
                        justify="center"
                        alignItems="center"
                    >
                         {(!loading)? <a className={classes.linkCuenta} href="#/create"><IoMdContact/>{' '}Crear Cuenta</a>
                     :<CircularProgress color="secondary" />
                     }
                        
                    </Grid>
                <Divider variant="middle" />
                <CardActions disableSpacing
                    className={classes.footer}
                >
                    <Grid item xs={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Button variant="contained" color="primary" onClick={() => getUsuario()} disabled={(!email || !password)}>
                            Aceptar
                         </Button>
                    </Grid>
                    <Grid item xs={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Button variant="contained" color="secondary" to='/'>
                            <Link ></Link>
                                Cancelar
                             </Button>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    )
}
export default Login