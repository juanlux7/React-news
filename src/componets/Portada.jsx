import React, { Component } from 'react';
import axios from 'axios';
import './Portada.css';

class Portada extends Component {

    constructor(props){
        super(props);

        this.state = {
            slides: []
      
          }
      
    }

    componentWillMount(){
        axios.get('http://webhose.io/filterWebContent?token=78e51919-15a4-41a2-916f-287cd5d4b2ab&format=json&sort=crawled&q=language%3Aspanish').then(data => {

      this.setState({ //se establece un nuevo estado para el componente
        slides: data.data.posts
      })


    })


    }

    render() {


      return (

        <div id="carouselExampleSlides" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-slide" src="./images/akash_bangladesh.jpg" alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Explotación infantil en Bangladesh</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slide" src="./images/burma_cyclone.jpg" alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Hhaing The Yu</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slide" src="./images/moyer_egypt.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Explotación infantil en Egipto</h5>
            </div>
          </div>
        </div>
      </div>

      )
    }
  }

  export default Portada;