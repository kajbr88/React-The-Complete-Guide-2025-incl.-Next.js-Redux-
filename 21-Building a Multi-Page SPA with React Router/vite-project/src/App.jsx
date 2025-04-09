import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([//Array of route definitions objects //storing the value in "router constant".
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,    
    children: [
      { index: true, element: <HomePage /> },// router will next take a look at our URL see what the currently active path is and load the appropriate element will be loaded, if active path is supported.
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },//":productId" is a identifier or path parameter for the dynamic path segment.
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;