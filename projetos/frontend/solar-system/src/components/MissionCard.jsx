import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEarthAmericas, faLocationDot } from '@fortawesome/free-solid-svg-icons'


class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className='mission-card'>
        <div className='mission-card-top'>
          <span data-testid="mission-name">{name}</span>
        </div>
        <div className='mission-card-bottom'>
          <div className='icon-text'>
            <FontAwesomeIcon icon={ faCalendar } />
            <span data-testid="mission-year">{year}</span>
          </div>
          <div className='icon-text'>
            <FontAwesomeIcon icon={ faEarthAmericas }/>
            <span data-testid="mission-country">{country}</span>
          </div>
          <div className='icon-text'>
            <FontAwesomeIcon icon={ faLocationDot } />
            <span data-testid="mission-destination">{destination}</span>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default MissionCard;
