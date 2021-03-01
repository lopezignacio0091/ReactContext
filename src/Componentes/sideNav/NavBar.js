import * as React from 'react';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LoginContext from '../../Context/Login/LoginContext'
import CarritoContext from '../../Context/Carrito/CarritoContext'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import BuildIcon from '@material-ui/icons/Build';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
// import imageFondo from '../../Img/navsLateral.jpg'
import blueGrey from '@material-ui/core/colors/blueGrey';
import indigo from '@material-ui/core/colors/indigo';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  links:{
    color:indigo[500]
  },

  drawerPaper: {
    width: drawerWidth,
    // backgroundImage:'url('+imageFondo+')',
    backgroundColor:blueGrey[50],
    color:indigo[500]
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {

  const loginContext = useContext(LoginContext);
  const carritoContext = useContext(CarritoContext);
  const { usuarioLogueado, logueado, logout } = loginContext;
  const {checkLogoutCarrito}=carritoContext
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerCloseSesion = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            EMAPJ ONLINE <ComputerIcon />{' '}
          </Typography>
        </Toolbar> 
      
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {(logueado == true) ? <Typography variant="h7" noWrap>
            <AccountCircle />Bienvenido{' '}
            {usuarioLogueado.nombre} </Typography> : <span></span>
          }
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.links}  /> : <ChevronRightIcon  className={classes.links}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.links} to='/'>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <HomeRoundedIcon className={classes.links} />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>
          <Link  className={classes.links} to='/card'>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <AssignmentIndRoundedIcon className={classes.links}/>
              </ListItemIcon>
              <ListItemText primary='Nuestros Productos' />
            </ListItem>
          </Link>
          {(logueado && usuarioLogueado.esAdmin==false) ?
            <Link  className={classes.links} to='/carrito'>
              <ListItem button onClick={handleDrawerClose}>
                < ListItemIcon>
                  <ShoppingCartIcon className={classes.links} />
                </ListItemIcon>
                <ListItemText primary='Carrito' />
              </ListItem>
            </Link> : <span></span>}
          {(logueado) ?
            <Link className={classes.links} to='/Contacto'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <ComputerIcon className={classes.links} />
                </ListItemIcon>
                <ListItemText primary='Contacto' />
              </ListItem>
            </Link> : <span></span>}
          {(usuarioLogueado.esAdmin == true) ?
            <Link  className={classes.links} to='/admin'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <BuildIcon  className={classes.links}/>
                </ListItemIcon>
                <ListItemText primary='Admin' />
              </ListItem>
            </Link> : <span></span>}
        </List>
        <Divider />
        <List>
          {(logueado == false) ? <Link className={classes.links} to='/Login'>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <AccountCircle className={classes.links} />
              </ListItemIcon>
              <ListItemText primary='Login' />
            </ListItem>
          </Link> : <Link className={classes.links}>
              <ListItem button onClick={handleDrawerCloseSesion}>
                <ListItemIcon>
                  <AccountCircle className={classes.links} />
                </ListItemIcon>
                <ListItemText primary='Cerrar Sesion' />
              </ListItem>
            </Link>}
        </List>
      </Drawer>
    </div>
  );
}