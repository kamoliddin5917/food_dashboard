import "./App.scss";
import { Switch, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Header/Sidebar";

// Pages
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default App;
