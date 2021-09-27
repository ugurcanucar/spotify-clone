import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Views from "views";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
