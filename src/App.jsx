import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Switch, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='app-column'>
          <div className='app-column__wrapper'>
            <Switch>
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/setting' render={() => <Setting />} />
              <Route path='/users' render={() => <Users />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
