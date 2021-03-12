import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Switch, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='app-column'>
          <div className='app-column__wrapper'>
            <Switch>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/setting' render={() => <Setting />} />
              <Route path='/users' render={() => <UsersContainer />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
