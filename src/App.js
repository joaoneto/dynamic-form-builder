import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./styles.css";
import routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </Switch>
      </Router>
    </div>
  );
}
