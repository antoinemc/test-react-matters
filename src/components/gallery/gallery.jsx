import React from 'react';
import './gallery.scss'
import { Link } from "react-router-dom";

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          catsList: []
        };
      }

      componentDidMount() {
        fetch("https://europe-west1-matters-test.cloudfunctions.net/getCats")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                catsList: result
              });
            },
            (error) => {
                if(error.status === '405') {
                    console.log('woop\'s this a 405 !');
                } else {
                this.setState({
                    isLoaded: true,
                    error
                    });
                }
            }
          )
      }


render() {
        return (
            <div className="gallery">
            {this.state.catsList.map(cat => (
                    <Link to={{pathname: "/cats/id", state: cat}}>
                        <figure className="item">
                            <figcaption className="name">
                                {cat.name}
                            </figcaption>
                            <div className="img-container">
                            <img className="img" src={cat.picturePath} alt={cat.name}/>
                            </div>
                        </figure>
                    </Link>
                ))};
            </div>
        )
    }
};


export default Gallery;
