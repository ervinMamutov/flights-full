import './Loader.css';
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <div className="newtons-cradle">
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
