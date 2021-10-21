import {
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import { statPageSuccess } from '../redux/currencies/currencies';

const Currency = ({ currency }) => {
  const dispatch = useDispatch();

  const {
    id, name, marketCap,
  } = currency;

  return (
    <li className="Currency">
      <Link
        key={id}
        to={`/details/${id}`}
        onClick={() => {
          dispatch(statPageSuccess(true));
        }}
        value={id}
      >
        <div className="Currency-Container">
          <div className="Currency-Picture">
            <div className="logo-currency-container">
              <div className="logo-container">
                <img src={currency.image} alt="Logo" className="currency-logo" />
              </div>
              <FiArrowRightCircle className="Arrow" />
            </div>
          </div>
          <div className="Currency-Name">
            <h2>{name}</h2>
            <p>{`$${marketCap}`}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

Currency.propTypes = {
  id: PropTypes.any,
  symbol: PropTypes.any,
  name: PropTypes.any,
  image: PropTypes.any,
  price: PropTypes.any,
  marketCap: PropTypes.any,
  rank: PropTypes.any,
  totalVolume: PropTypes.any,
  high: PropTypes.any,
  low: PropTypes.any,
}.isRequired;

export default Currency;
