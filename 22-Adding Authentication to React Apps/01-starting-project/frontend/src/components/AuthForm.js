import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  // useSearchParams here returns an array and hence we can use array destructuring
  // to get access to the elements in that array. And there are two elements in that array.
  //** */ The first element is an object i.e. "searchParams" that gives us access to
  // the currently set query parameters.
  // And the second value we get from that array is a function that allows us to update the currently set query parameters.
  // Now, we don't need that function here because we will update the query parameter 
  // with help of that link that sets the query parameter,

  const isLogin = searchParams.get('mode') === 'login';
  // here we can get the information whether we are in log in mode or not by accessing 
  // this search params object here. And then there is a get method which allows us to 
  // retrieve the value for a specific query parameter. And here it's the mode query 
  // parameter we wanna retrieve the value for,
  //** */ mode is mode query parameter and here we are checking if the value is login.
  // so here we are in log in mode if the mode query parameter is currently set to login.

  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
