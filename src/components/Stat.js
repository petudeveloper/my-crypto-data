import { PropTypes } from 'prop-types';

const Stat = ({ currency }) => {
  const {
    rank, low, high, price, totalVolume,
  } = currency;

  return (
    <ul className="Stat-Container">
      <li className="stat-item">
        <h2>Rank</h2>
        <p>{rank}</p>
      </li>
      <li className="stat-item">
        <h2>Price</h2>
        <p>{`$${price}`}</p>
      </li>
      <li className="stat-item">
        <h2>24 Hour Low</h2>
        <p>{`$${low}`}</p>
      </li>
      <li className="stat-item">
        <h2>24 Hour High</h2>
        <p>{`$${high}`}</p>
      </li>
      <li className="stat-item">
        <h2>Total Volume</h2>
        <p>{totalVolume}</p>
      </li>
    </ul>
  );
};

Stat.propTypes = {
  currency: PropTypes.isRequired,
};

export default Stat;
