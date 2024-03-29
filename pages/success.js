import React, {  useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por su compra!</h2>
        <p className="email-msg">Revise su bandeja de entrada del correo electrónico para el recibo.</p>
        <p className="description">
         Si tiene alguna pregunta,por favor envíe un correo electrónico
          <a className="email" href="mailto:order@example.com">
            tiendaElectronica@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
           Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success