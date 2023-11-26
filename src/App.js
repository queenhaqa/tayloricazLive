import { BrowserRouter, HashRouter } from "react-router-dom";
import { Router } from "./components/Router";

export const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};
