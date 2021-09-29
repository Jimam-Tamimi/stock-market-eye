import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"

import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";
import Home from "./pages/dashboard/Home";
import Portfolio from "./pages/dashboard/Portfolio";



function App() {
  
  
  return (
    <>
      <Layout>
        <PrivateRoute>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio/:id/' component={Portfolio} />

        </PrivateRoute>
        <GuestRoute>
          <Route exact path='/signup/' component={Signup} />
          <Route exact path='/reset-password/' component={ResetPassword} />
          <Route exact path='/activate/:uid/:token/' component={Activate} />
        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


