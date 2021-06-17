import SubsCard from "./components/SubsCard";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <SubsCard />
        </Route>
        <Route path="/2">
          <SubsCard />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
