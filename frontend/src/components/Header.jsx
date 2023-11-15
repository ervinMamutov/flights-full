import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return <div>{title}</div>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
