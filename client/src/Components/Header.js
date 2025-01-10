import React, { useContext } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';

const Header = () => {
  const context = useContext(Context.Context);
  const authUser = context.authenticatedUser;

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo"><Link to='/'>CURSOS ESCOM</Link></h1>
        <nav>
          {authUser ?
            <ul className="header--signedin">
              <li>Bienvenido, {authUser.firstName} {authUser.lastName}!</li>
              <li><Link to='/signout'>Salir</Link></li>
            </ul>
            :
            <ul className="header--signedout">
              <li><Link to='/signup'>Registro</Link></li>
              <li><Link to='/signin'>Iniciar Sesion</Link></li>
            </ul>
          }
        </nav>
      </div>
    </header>
  )
}

export default Header;