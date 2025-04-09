import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();//makes sure react or to be precise browser dosent send a http request.
    
    if (event.target.email.value)
      { dispatch(authActions.login());}/*login is executed because this is 
a action creator returning the actual action object which should be dispatched.*/
   else {return}
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
