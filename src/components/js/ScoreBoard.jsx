import React from 'react';
import '../css/ScoreBoard.css';

class ScoreBoard extends React.Component{
  render(){
    return (
      <div className="card card-board mx-auto">
        <div className="card-body">
          <p className='board-title text-center'>Top 10</p>
          <table className="table table-striped board-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Skor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>1156</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>1089</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>1002</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mark</td>
                <td>987</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>945</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>832</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Mark</td>
                <td>810</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Jacob</td>
                <td>700</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Larry</td>
                <td>611</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Mark</td>
                <td>583</td>
              </tr>
            </tbody>
          </table>
        </div>  
      </div>
    );
  }
}

export default ScoreBoard;