import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const NavBar = () => {
  const home = useSelector((state) => state.currency.home);

  return <Heading home={home} />;
};

const Heading = ({ home }) => {
  if (!home) {
    return (
      <div className="heading-container">
        <p>2021</p>
        <p className="NavBar-Title">Top 10 CryptoCurrencies</p>
        <div>
          <i className="fa-icon"><FaMicrophone /></i>
          <i className="fa-icon"><FaCog /></i>
        </div>
      </div>
    );
  }
  return (
    <div className="heading-container">
      <p>
        <NavLink to="/">
          <FaAngleLeft />
        </NavLink>
      </p>
      <p>CryptoCurrency Stats</p>
      <div>
        <i className="fa-icon"><FaMicrophone /></i>
        <i><FaCog /></i>
      </div>
    </div>
  );
};

Heading.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default NavBar;
