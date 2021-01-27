import React from 'react';
import { useContext ,useEffect} from 'react';
import CarritoContext from '../../Context/Carrito/CarritoContext'
import Footer from './FooterHome/FooterHome'
import FooterEnvio from './FooterEnvio/FooterEnvio'
import Carousel from './Carousel'





const Home = () => { 

  const carritoContext = useContext(CarritoContext);
    const {limpiarState} = carritoContext;

    useEffect(() => {
      limpiarState()
    }, [])

  return (
  <> 
      <Carousel/>
      <FooterEnvio></FooterEnvio>
      <Footer></Footer>
    </>
  );
};


export default Home