import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const profile = Cookies.get('profile');
    if (profile) {
      const { username, email } = JSON.parse(profile);
      setUsername(username);
      setEmail(email);
      setSignedUp(true);
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert('Все поля должны быть заполнены!');
      return;
    }
    Cookies.set('profile', JSON.stringify({ username, email }));
    setSignedUp(true);
  };

  const handleLogout = () => {
    Cookies.remove('profile');
    setUsername('');
    setEmail('');
    setPassword('');
    setSignedUp(false);
  };

  return (
    <div>
      {signedUp ? (
        <div className='loggedinpage'>
          <h2>привет, {username}! 👋</h2>
          <button className='logout-button' onClick={handleLogout}>выйти</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSignUp}>
        <div className="login-container">
          <p>Ваш логин:</p>
          <input
            type="text"
            placeholder="введите логин"
            value={username}
            className='username-input'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email-container">
            <p>Ваш email:</p> 
          <input
            className='email-input'
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>  
        <div className="password-container">
        <p>Введите пароль:</p>
          <input
            className='password-input'
            type="password"
            placeholder="введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button className="CreateAcc"type="submit">Создать аккаунт</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
