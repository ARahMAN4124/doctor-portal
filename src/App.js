import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAppointment from "./Components/AllAppointments/Appointment/AddAppointment";
import Dashboard from "./Components/Deshboard/Deshboard/Deshboard";
import AllPatients from "./Components/Deshboard/AllPatients/AllPatients";
import LogIn from "./Components/LogInForm/LogIn";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/LogInForm/PraviteRoute/PraviteRoute";
import AddDoctor from "./Components/Deshboard/AddDoctor/AddDoctor";
import BuyNow from "./Components/Home/Services/serviceInfoCard/BuyNow";

export const MyContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState([]);
  return (
    <MyContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addAppointment">
            <AddAppointment></AddAppointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/payNow">
            <BuyNow />
          </Route>
          <Route path="/allPatients">
            <AllPatients />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
