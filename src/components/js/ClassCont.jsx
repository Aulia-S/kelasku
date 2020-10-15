import React from 'react';
import '../css/ClassCont.css';
import Class from './Class';

class ClassCont extends React.Component{
  render(){
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
          <div className='col-4'>
            <Class />
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCont;