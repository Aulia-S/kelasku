import React from 'react';
import '../css/ListTaskCont.css';
import SortTaskBtn from './SortTaskBtn';
import ItemTask from  './ItemTask';

class ListTaskCont extends React.Component{
  render(){
    return(
      <React.Fragment>
        <SortTaskBtn />
        <div className='row mt-3'>
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
        </div>
      </React.Fragment>
    );
  }
}

export default ListTaskCont;