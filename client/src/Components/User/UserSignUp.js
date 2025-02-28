import React, { useState, useContext } from 'react';
import Context from '../../Context';
import { Link, useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const context = useContext(Context.Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'firstName') {
      setFirstName(value);
    }

    if (name === 'lastName') {
      setLastName(value);
    }

    if (name === 'emailAddress') {
      setEmailAddress(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }

  const submit = (event) => {
    event.preventDefault();
    // User object to create a new user
    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
    };

    context.data.createUser(user)
      .then(errors => {
        // If creating a user is unsuccessful, response with errors would be returned
        if (errors.length) {
          setErrors(errors);
        } else {
          context.actions.signIn(emailAddress, password)
            .then(() => {
              navigate('/');
            });
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
      <h2>Registro</h2>
      {errors.length ?
        <div className="validation--errors">
          <h3>Errores de Validacion</h3>
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
        : null
      }
      <form>
        <label htmlFor="firstName">Nombre</label>
        <input id="firstName" name="firstName" type="text" value={firstName} onChange={onChange} />
        <label htmlFor="lastName">Apellido</label>
        <input id="lastName" name="lastName" type="text" value={lastName} onChange={onChange} />
        <label htmlFor="emailAddress">Email</label>
        <input id="emailAddress" name="emailAddress" type="email" value={emailAddress} onChange={onChange} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={password} onChange={onChange} />
        <button className="button" type="submit" onClick={submit}>Registro</button>
        <button className="button button-secondary" onClick={cancel}>Cancelar</button>
      </form>
      <p>Ya tienes cuenta? <Link to='/signin'>Inicia Sesion!</Link></p>

    </div>
  );
}

export default UserSignUp;
