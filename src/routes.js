import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
const Routes = ({ children }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Dashboard />} />
      </Switch>
      {children}
    </Router>
  );
};

export default Routes;
