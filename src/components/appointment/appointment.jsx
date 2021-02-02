import React from 'react';
import './appointment.scss';
import PropTypes from 'prop-types';

class Appointment extends React.Component {

    render () {
        if(!this.props.show) {
            return null;
          };

          return (
            <div className="container">
                <div className="appointment">
                    <p>Merci ! <br/>
                    Rencontrons nous au Refuge de Paris pour finaliser l'adoption de votre chat !
                    </p>
                    <button onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>
            )
          }
    }

Appointment.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
};

export default Appointment;