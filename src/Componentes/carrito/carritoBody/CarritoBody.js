import React from 'react';
import { useContext } from 'react';
import CarritoContext from '../../../Context/Carrito/CarritoContext'
import LoginContext from '../../../Context/Login/LoginContext'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageItems from '../messageItems/MessageItems'
import Grid from '@material-ui/core/Grid';
import { IoIosCalendar } from "react-icons/io";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0,.00)',
    '&$expanded': {
      margin: '12px 0',

    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const loginContext = useContext(LoginContext);
  const { usuarioLogueado } = loginContext
  const carritoContext = useContext(CarritoContext);
  const {deleteProduct } = carritoContext
  const classes = useStyles();
  if (usuarioLogueado.carrito.listaCarritoProductos == 0) {
    return (
      <>
        <MessageItems />
      </>
    );
  }
  return (
    <div >
      {usuarioLogueado.carrito.listaCarritoProductos.map(itemCO => (
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.root}
          >
            <Grid item xs={6}>
              <Typography className={classes.heading}>Nombre:{' '}{itemCO.producto.nombre}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" size="small" onClick={() => deleteProduct(itemCO)}>
                Eliminar
              </Button>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.content}>
            <Grid item xs={6}>
              <Typography><IoIosCalendar /> {' '}Precio:{itemCO.precio} </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.heading}>Cantidad:{' '}{itemCO.cantidad}</Typography>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
