import React, { useState, useContext } from 'react';
import Context from '../../Context';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const UserSignIn = () => {
  const context = useContext(Context.Context);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'emailAddress') {
      setEmailAddress(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }

  const submit = (event) => {
    event.preventDefault();
    // Navigate to where the user visited the Sign In page "from", if applicable
    const { from } = location.state || { from: { pathname: '/' } };

    context.actions.signIn(emailAddress, password)
      .then((response) => {
        if (response !== null && response.id) {
          navigate(from);
        } else {
          setErrors(response.message);
        }
      })
      .catch((error) => {
        console.error(error);
        navigate('/error');
      });
  }

  const cancel = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div className="form--centered">
      <h2>Inicia Sesion</h2>
      {errors.length ?
        <div className="validation--errors">
          <h3>Error</h3>
          <p>Checa tu email o contraseña.</p>
        </div>
        : null
      }
      <form>
        <label htmlFor="emailAddress">Email</label>
        <input id="emailAddress" name="emailAddress" type="email" value={emailAddress} onChange={onChange} />
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" value={password} onChange={onChange} />
        <button className="button" type="submit" onClick={submit}>Inicia Sesion </button>
        <button className="button button-secondary" onClick={cancel}>Cancelar</button>
      </form>
      <p>No tienes cuenta?  <Link to='/signup'>Registrate!</Link></p>

    </div>
  );
}

export default UserSignIn;
