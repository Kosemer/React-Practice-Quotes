import { Redirect, Route, Switch } from "react-router";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>{" "}
        {/* A csillag karakter azt jelzi a Routernek, hogy bármilyen URL elérési útnak meg kell egyeznie ezzel az útvonallal. Ezért ennek az utolsónak kell lennie, hogy ne használja fel egy valós útvonalra. Szóval bármit beírhatsz az URL-be, ha nem talál egyezést akkor itt fog kikötni. */}
      </Switch>
    </Layout>
  );
}

export default App;
