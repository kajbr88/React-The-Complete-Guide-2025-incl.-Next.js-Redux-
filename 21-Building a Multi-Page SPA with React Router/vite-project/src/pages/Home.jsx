import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      {/* <MainNavigation /> */}
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products" >the list of products</Link>.
        {/* what the link component does under the hood is it does render an anchor element
 but it basically listens for clicks on that element, prevents the browser default of sending 
 a HTTP request if the link is clicked, and instead simply takes a look at the route definitions
 to update the page accordingly and load the appropriate content. It will also change the URL 
 but without sending a new HTTP request. */}
        <p>
          <button onClick={navigateHandler}>Navigate</button>
        </p>
      </p>
    </>
  );
}

export default HomePage;
