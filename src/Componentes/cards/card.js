import React from 'react';
import { useContext, useEffect } from 'react';
import LoginContext from '../../Context/Login/LoginContext'
import HomeContext from '../../Context/Home/HomeContext';
import CarritoContext from '../../Context/Carrito/CarritoContext'
import Progress from '../progress/Progress'
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import TextField from '@material-ui/core/TextField';
import Footer from '../home/FooterHome/FooterHome'
import FooterEnvio from '../home/FooterEnvio/FooterEnvio'
import Filter from './Filter/Filter'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MessageCarrito from './messageCarrito/messageCarrito'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
  },
  media: {
    borderRadius: 6,
  },
  alto: {
    height: '100%',

  },
  button: {
    padding: theme.spacing(3),
    marginLeft: theme.spacing(4)
  }
}));


const CardProducto = () => {
  const loginContext = useContext(LoginContext);
  const homeContext = useContext(HomeContext);
  const carritoContext = useContext(CarritoContext);
  const { loading, listaImagenes,getProductos,addCantidad,removeCantidad } = homeContext;
  const { agregarProductoCarrito,messageAddCarrito} = carritoContext
  const {logueado,usuarioLogueado}=loginContext
  const classes = useStyles();
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });


  useEffect(() => {
    getProductos();

  }, [])

  if(loading){
    return(
      <Progress/>
    )
  }
  return (
    <div className="container cardPrincipal">
      <Filter></Filter>
      <div className="row">
        {listaImagenes.map((elem, index) => (
          <div className="col-lg-4 h-100 mt-5">
            <Card className={cx(styles.root, shadowStyles.root, styles.alto)}>
              <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={elem.ImagenUrl}
              />
              <CardContent>
                <TextInfoContent
                  style={{ height: '100%' }}
                  classes={textCardContentStyles}
                  overline={'EMAPJ ONLINE'}
                  heading={elem.Nombre}
                  body={
                    elem.Descripcion
                  }
                />
              </CardContent>
              <CardActions>
              {(logueado==true)?
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={6} spacing={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      startIcon={<AddIcon />}
                      onClick={() => addCantidad(elem.Id)}
                    >
                    </Button>
                    {' '}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<RemoveIcon />}
                      onClick={() => removeCantidad(elem.Id)}
                    >
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      disabled
                      id="filled-number"
                      type="number"
                      value={elem.Cantidad}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.button}
                    justify="center"
                    alignItems="center">
                   <Button
                      variant="contained"
                      size="small"
                      startIcon={<AddShoppingCartIcon />}
                      disabled={elem.Cantidad == 0}
                      onClick={() =>agregarProductoCarrito(elem,usuarioLogueado)}
                    >
                      Agregar al Carrito
                          </Button>
                   
                  </Grid>
                  <MessageCarrito></MessageCarrito>
                </Grid>:<span></span>}
              </CardActions>
            </Card>
          </div>

        )
        )}
        <FooterEnvio></FooterEnvio>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CardProducto;






