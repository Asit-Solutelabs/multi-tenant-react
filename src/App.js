import Tenant from './Components/tenant';
import Root from './Components/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const subdomain = window?.location?.hostname?.split(".")[0]
  const router = createBrowserRouter([
    {
      path: "/",
      Component : subdomain !== 'localhost' && subdomain !== process.env.REACT_APP_DOMAIN ? Tenant : Root 
    },
  ]);
 
  return (
      // <Root/>
      <RouterProvider router={router} />
  );
}

export default App;
