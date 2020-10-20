import React from 'react';
import '../css/Class.css';
import user_blank from '../../img/user_blank.png';

class Class extends React.Component{
  render(){
    return(
      <div className="card">
        <div className="card-body p-0">
          <div className='desc p-2'>
            <p className='lesson-name'>Lesson name here</p>
            <p className='instructor-name'>Instructor name here</p>
            <img src={user_blank} alt='user' className='rounded-circle' />
          </div>
          <div className='info-task p-2 pt-5'>
            <table>
              <tbody>
                <tr>
                  <td className='task-name'>Task name here if there is</td>
                  <td className='deadline'>12 Agt</td>
                </tr>
                <tr>
                  <td className='task-name'>here another task</td>
                  <td className='deadline'>07 Sept</td>
                </tr>
              </tbody>
            </table>
            <p className='text-muted font-italic info-update'>Last update 09:43 02 Agt</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Class;