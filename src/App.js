import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';

class App extends Component {

  /*   state = { texto: 'texto1' } */

  /*   handlerPClick = (event) => {
      event.preventDefault();
      this.setState({ texto: 'texto2' });
    } */

  handlerChangeText = (event) => {
    event.preventDefault();
    const getValue = event.target.value;
    console.log(getValue);
  }

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Muda Texto
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" value='1' href="#" onClick={(e) => (this.handlerChangeText(e))}>Texto</a></li>
              <li><a className="dropdown-item" value='2' href="#"></a></li>
              <li><a className="dropdown-item" value='3' href="#"></a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
        </div>
      </div>
    );

  }

}

export default App;
