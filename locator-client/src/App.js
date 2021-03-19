
import './App.css';
import Treasure from '../src/views/screens/Treasure/treasure'
import Location from '../src/views/screens/Location/location'
import SaveLocation from '../src/views/screens/Location/saveLocation'
import NotFound from '../src/views/components/NotFound/NotFound'
import EditLocation from '../src/views/screens/Location/editLocation'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Treasure /> */}
      <Switch>
      <Route path="/" component={Treasure} exact />
      <Route path="/locations/" component={Location} exact/>
      <Route path="/locations/save" component={SaveLocation} exact />
      <Route path="/locations/edit" component={EditLocation} exact />
      <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
