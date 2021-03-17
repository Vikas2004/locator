
import './App.css';
import Treasure from '../src/views/screens/Treasure/treasure'
import Location from '../src/views/screens/Location/location'
import SaveLocation from '../src/views/screens/Location/saveLocation'
import NotFound from '../src/views/components/NotFound/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Treasure /> */}
      <Switch>
      <Route path="/" component={Treasure} exact />
      <Route path="/locations/" component={Location} exact/>
      <Route path="/locations/save" component={SaveLocation} exact />
      <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
