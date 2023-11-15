import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './Home.css';
import Loader from './Loader';
import Flight from './Flight';

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getFlight = async () => {
      try {
        const res = await axios.get('http://localhost:3002/');
        if (res.status !== 200) {
          throw new Error(`Failed to fetch flight with status ${res.status}`);
        } else {
          setFlights(res.data.flights);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getFlight();
  }, []);

  return (
    <div className="home-box">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {flights.length > 0 ? (
        flights.map((flight, index) => <Flight key={index} flight={flight} />)
      ) : (
        <p>No Flight </p>
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
