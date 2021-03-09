import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Switch, Route } from "react-router-dom";

function App({ state, dispatch}) {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <Navbar sidebar={state.sidebar} />
        <div className='app-column'>
          <div className='app-column__wrapper'>
            <Switch>
              <Route
                path='/profile'
                render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />}
              />
              <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/setting' render={() => <Setting />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
