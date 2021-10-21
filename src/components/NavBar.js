/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

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
    <div className="NavBar-Container">
      <p>
        <NavLink to="/">
          <FaAngleLeft />
        </NavLink>
      </p>
      <p>Top CryptoCurrencies Market Capitalization</p>
      <div>
        <i className="fa-icon"><FaMicrophone /></i>
        <i><FaCog /></i>
      </div>
    </div>
  );
};

export default NavBar;
