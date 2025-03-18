import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case 'usd':
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            case 'eur':
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            case 'pln':
                setCurrency({ name: 'pln', symbol: 'zł' });
                break;
            default:
                setCurrency({ name: 'usd', symbol: '$' });
        }
    };

    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='logo' src={logo} alt="Logo" />
            </Link>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/news'><li>News</li></Link>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="pln">PLN</option>
                </select>
                <Link to='/login'><button>Login <img src={arrow_icon} alt="Arrow Icon" /></button></Link>
                <Link to='/register'><button>Register <img src={arrow_icon} alt="Arrow Icon" /></button></Link>
            </div>
        </div>
    );
};

export default Navbar;
