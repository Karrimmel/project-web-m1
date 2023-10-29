import Books from './Compenants/Books';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <Router>
        <Route exact path={"/"}>
          <Books/>
        </Route>
    </Router>
    </div>
  );
}


