import Login from "./src/components/login";
import Signup from "./src/components/signup";
import Home  from "./src/components/home";


 
 const routes = [

  { path: '/login', name: 'Login', element: Login },
  { path: '/signup', name:'Signup', element: Signup },
  { path: '/home', name:'Home', element: Home }
    ]
export default routes;
