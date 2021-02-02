import React from 'react';
import Appointment from '../appointment/appointment';
import './cat.scss';

class Cats extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.name =  this.props.name;
      }

      toggleModal = (state) => {
        this.setState({
          isOpen: !state.isOpen
        });
      }

      render() {
          if(!this.props.location && !this.props.location.state) {
              return false;
          }
          return(
            <div className="cat-container">
            <div className="cat">
                <img src={this.props.picturePath} alt={this.name} className="cat__image"></img>
                <div className="cat__description">
                    <ul>
                        <li>Nom : {this.name}</li>
                        <li>Date de naissance : {this.props.birthdate} </li>
                        <li>Genre : {this.props.gender}</li>
                        <li>Race : {this.props.breed} </li>
                    </ul>
                <button className="cat__button" onClick={this.toggleModal}>
                    Prendre RDV
                </button>
                </div>
            </div>
                <div>
                <Appointment show={this.state.isOpen} onClose={this.toggleModal}>
                </Appointment>
                </div>
            </div>
          )
      } 
} 

export default Cats;
