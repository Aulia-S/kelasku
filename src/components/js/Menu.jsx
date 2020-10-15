import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component{
  render(){
    return(
      <div className='container my-4'>
        <div className='row justify-content-center menu text-center'>
          <div className='col-2'>
            <button type='button' className='btn menu-item'>
              Kelas
            </button>
          </div>
          <div className='col-2'>
            <button type='button' className='btn menu-item'>
              Daftar Tugas
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;