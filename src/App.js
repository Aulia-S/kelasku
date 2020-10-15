import React from "react";
import "./App.css";
import Header from "./components/js/Header";
import Menu from './components/js/Menu';
import ClassCont from './components/js/ClassCont';
import ScoreBoard from './components/js/ScoreBoard';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-9'>
              <ClassCont />
            </div>
            <div className='col-3'>
              <ScoreBoard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
