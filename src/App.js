import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import appStore from './utils/store';
import {Provider} from 'react-redux'




function App() {
  return (
    <Provider store={appStore}>
  <div>
    <Body/>
  </div>
  </Provider>
  );
}

export default App;
