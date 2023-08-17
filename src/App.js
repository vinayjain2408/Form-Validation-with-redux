import './App.css';
import Home from './Form without validation/Home'
import { Provider } from 'react-redux';
import store from "./Form without validation/app/store"

function App() {
  return (
  <Provider store={store}>
  <Home />
  </Provider>
  );
}

export default App;
 