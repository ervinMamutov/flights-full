import './Flight.css';
import PropTypes from 'prop-types';

const Flight = ({ flight }) => {
  return (
    <div className="flight-box">
      <h3>{flight.flight_number}</h3>
      <h4>{flight.airline}</h4>
      <h4>{flight.departure_city}</h4>
      <h4>{flight.departure_airport}</h4>
      <h4>{flight.arrival_city}</h4>
      <h4>{flight.arrival_airport}</h4>
      <h4>{flight.departure_time}</h4>
      <h4>{flight.arrival_time}</h4>
      <h4>{flight.duration}</h4>
      <h4>{flight.price}</h4>
    </div>
  );
};

Flight.propTypes = {
  flight: PropTypes.shape({
    flight_number: PropTypes.string.isRequired,
    airline: PropTypes.string.isRequired,
    departure_city: PropTypes.string.isRequired,
    departure_airport: PropTypes.string.isRequired,
    arrival_city: PropTypes.string.isRequired,
    arrival_airport: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
};

export default Flight;
