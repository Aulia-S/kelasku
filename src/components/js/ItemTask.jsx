import React from 'react'
import '../css/ItemTask.css';

class ItemTask extends React.Component{
  render(){
    return(
      <div className='col-12 mb-3'>
        <div className="card card-item-task">
          <div className='container-fluid p-0'>
            <div className='row'>
              <div className='col-2 pr-0'>
                <div className='task-bg'>.</div>
              </div>
              <div className='col-10 pl-0'>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-8'>
                      <p className='task-task-name mb-1'>Menghitung luas lingkaran</p>
                      <p className='task-class-name'>Matematika</p>
                    </div>
                    <div className='col-4'>
                      <p className='text-muted font-italic m-4 task-deadline'>Deadline 09:00 24 Agt</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTask;