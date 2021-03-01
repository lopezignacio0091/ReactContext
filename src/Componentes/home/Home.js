import React from 'react';
import { useContext ,useEffect} from 'react';
import CarritoContext from '../../Context/Carrito/CarritoContext'
import ContactoContext from '../../Context/Contacto/ContactoContext'
import Footer from './FooterHome/FooterHome'
import FooterEnvio from './FooterEnvio/FooterEnvio'
import Carousel from './Carousel'

const Home = () => { 
  const carritoContext = useContext(CarritoContext);
    const {limpiarState} = carritoContext;
    const contactoContext = useContext(ContactoContext);
    const {cleanInputs} = contactoContext;

    useEffect(() => {
      limpiarState(),
      cleanInputs()
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