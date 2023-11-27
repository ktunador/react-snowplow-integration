import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Snowplow } from "./components/snowplow";
import { Link } from "./components/link";
import { Page } from "./components/page";
import { SNOWPLOW_APP_ID, SNOWPLOW_ENDPOINT } from "./config";

const activateSnowplow = SNOWPLOW_ENDPOINT && SNOWPLOW_APP_ID;

export function App() {
  return (
    <BrowserRouter>
      {activateSnowplow && <Snowplow endpoint={SNOWPLOW_ENDPOINT} appId={SNOWPLOW_APP_ID} />}
      <Switch>
        <Route path="/page-:name" component={Page} />
        <Route path="*" >
          <h1>Home</h1>
          <ul>
            {["A", "B", "C"].map(name => <li key={name}><Link href={`/page-${name}`}>Page {name}</Link></li>)}
            <li>
              <Link href="https://docs.snowplow.io/docs/collecting-data/collecting-from-own-applications/javascript-trackers/web-tracker/">
                Snowplow Web trackers
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
