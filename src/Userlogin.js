// UserLogin.js
import React, { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail.endsWith('.ru'));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      console.log('Form submitted successfully');
      // Burada qeydiyyat prosesi yerləşdirilə bilər
    } else {
      console.log('Form submission failed. Please check the fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input type="text" value={email} onChange={handleEmailChange} />
        {!isEmailValid && <p>Yalnız .ru domenlərinə icazə verilir.</p>}
      </label>
      <label>
        Parol:
        <input type="password" value={password} onChange={handlePasswordChange} />
        {!isPasswordValid && <p>Ən azı 8 simvol.</p>}
      </label>
      <button type="submit" disabled={!isEmailValid || !isPasswordValid}>Login</button>
    </form>
  );
};

export default UserLogin;
