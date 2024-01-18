import React from 'react';
import Navbar from "./components/Navbar";
import RegisterLandingPage from "./views/RegisterLandingPage";
import RoutesTree from './routes/Routes';
import SidaBar from './components/SideBar/SidaBar';

// redux
import { store } from './App/store';
import { Provider } from 'react-redux';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Provider store={store}>
          <RoutesTree>
            <RegisterLandingPage />
          </RoutesTree>
        </Provider>
      </div>
  
  );
}

export default App;
 