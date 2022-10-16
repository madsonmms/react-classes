import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';

class App extends Component {

  state = {
    visita: [
      {
        id: 1,
        title: 'Título 1',
        text: 'Título 1 corpo do texto',
      },
      {
        id: 2,
        title: 'Título 2',
        text: 'Título 2 corpo do texto',
      },
      {
        id: 3,
        title: 'Título 3',
        text: 'Título 3 corpo do texto',
      }
    ]
  }

  handlerOptionClick = (event) => {
    const { visita } = this.state;
    const visitaSelecionada = visita.filter(item => item.id == event.currentTarget.id);
    console.log(visitaSelecionada);
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
              <li><a className="dropdown-item" id='1' href="#" onClick={this.handlerOptionClick}>Texto 1</a></li>
              <li><a className="dropdown-item" id='2' href="#" onClick={this.handlerOptionClick}>Texto 2</a></li>
              <li><a className="dropdown-item" id='3' href="#" onClick={this.handlerOptionClick}>Texto 3</a></li>
            </ul>
          </div>
        </div>

      /* aqui vai a div */

      </div>
    );

  }

}

/*   
  handlerPClick = (event) => {
    event.preventDefault();
    this.setState({ texto: 'texto2' });
  }
  */


export default App;
