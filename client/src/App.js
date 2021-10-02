import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Result from './components/Result/Result';

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/result' component={Result} />
    </div>
  );
}

export default App;
