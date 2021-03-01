import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HttpsIcon from '@material-ui/icons/Https';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    root: {
        top: 200,
        width:'100%'
    },
    paper: {
        margin: 20,

    },
    control: {
        padding: theme.spacing(2),
    },
    estilos:{
        marginBottom:50
    }
}));



const FooterEnvio = () => {

    const classes = useStyles();

    return (
            <div className="mt-5 mb-5">
                <Grid container justify="center" className={classes.estilos}>
                    <Grid item spacing={2} className={classes.paper}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6"><AirportShuttleIcon></AirportShuttleIcon> ENVIO GRATIS EN TUS PEDIDOS</Typography>
                        </ThemeProvider>
                        <p>Entregas a todo el país</p>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item spacing={2} className={classes.paper}>
                    <ThemeProvider theme={theme}>
                            <Typography variant="h6"><CreditCardIcon></CreditCardIcon> PAGÁ COMO QUIERAS</Typography>
                        </ThemeProvider>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item spacing={2} className={classes.paper}>
                    <ThemeProvider theme={theme}>
                            <Typography variant="h6"><HttpsIcon></HttpsIcon> COMPRÁ CON SEGURIDAD</Typography>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </div>
      
    )
}
export default FooterEnvio