import styles from './Login.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className={styles.input} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className={styles.input} />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.green_btn}>Login</button>
        </form>
        <div className={styles.redirect}>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
