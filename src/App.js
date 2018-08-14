import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import axios from 'axios';
import Portada from './componets/Portada';

class App extends Component {

  constructor(props){
    super(props);

    this.state = ({

      title: 'React News',

      items: []

    })

  }

  componentWillMount(){

    axios.get('http://webhose.io/filterWebContent?token=78e51919-15a4-41a2-916f-287cd5d4b2ab&format=json&sort=crawled&q=language%3Aspanish').then(data => {

      console.log(data.data.posts)
      this.setState({ //se establece un nuevo estado para el componente
        items: data.data.posts
      })

    })

  }


  render() {
    return (

      <div className="App">
        <Navbar title={this.state.title}/>

         <Portada />

        <div className="container">


        <div className="row">


        {
          
          this.state.items.map((item) => {

              //filtro los resultados evitando desplegar las imagenes sin titulo y sin imagen
              //para mantener un patron equitativo

              if(item.title != '' && item.thread.main_image){

                return <div className="col-md-4" key={item.uuid}><div className="card">
                      <div className="card-body">
                        <img className="card-img-top" src={item.thread.main_image} />
                        <h5 className="card-title">{item.title}</h5>
                        <a href="#" className="btn btn-primary">ver noticia completa</a>
                      </div>
                    </div>
                    </div>

              }
                      })

                    
          }

        </div>  

        </div>
        
      </div>
    );
  }
}

export default App;
