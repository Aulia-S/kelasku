import React from "react";
import "./App.css";
import Header from "./components/js/Header";
import Menu from './components/js/Menu';
import ClassCont from './components/js/ClassCont';
import ScoreBoard from './components/js/ScoreBoard';
import ListTaskCont from './components/js/ListTaskCont';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      isListTaskOpen: false
    }
  }

  renderClass = () => {
    return <ClassCont />;
  }

  renderListTask = () => {
    return <ListTaskCont />;
  }

  handleClickClassBtn(){
    this.setState({
      isListTaskOpen: false
    });
  }

  handleClickListTaskBtn(){
    this.setState({
      isListTaskOpen: true
    });
  }

  render() {
    let main= null;
    if (!this.state.isListTaskOpen) {
      main = this.renderClass();
    }else{
      main= this.renderListTask();
    }

    return (
      <React.Fragment>
        <Header />
        <Menu
          onClickClassBtn={() => this.handleClickClassBtn()}
          onClickListTaskBtn={() => this.handleClickListTaskBtn()}
        />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-9'>
              {main}
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
