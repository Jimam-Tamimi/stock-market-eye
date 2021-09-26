import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"

import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";
import Home from "./pages/dashboard/Home";

function App() {
  
  
  return (
    <>
      <Layout>
        <PrivateRoute>
          <Route path='/' component={Home} />

        </PrivateRoute>
        <GuestRoute>
          <Route path='/signup/' component={Signup} />
          <Route path='/reset-password/' component={ResetPassword} />
          <Route path='/activate/:uid/:token/' component={Activate} />
        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


