import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Switch, Route } from "react-router-dom";

function App({ state, addPost, updateNewPostText }) {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <Navbar sidebar={state.sidebar} />
        <div className='app-column'>
          <div className='app-column__wrapper'>
            {/* <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/setting' component={Setting} /> */}

            <Switch>
              <Route
                path='/profile'
                render={() => <Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />}
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
