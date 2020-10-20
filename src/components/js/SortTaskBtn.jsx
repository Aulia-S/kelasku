import React from 'react';
import '../css/SortTaskBtn.css';

class SortTaskBtn extends React.Component{
  render(){
    return(
      <div className="dropdown">
        <button className="btn btn-info btn-sm dropdown-toggle sort-task-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Urut berdasarkan
        </button>
        <div className="dropdown-menu item-sort-cont" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item item-sort" href="#root">Terbaru</a>
          <a className="dropdown-item item-sort" href="#root">Terlama</a>
        </div>
      </div>
    );
  }
}

export default SortTaskBtn;