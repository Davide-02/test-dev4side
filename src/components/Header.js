import React from 'react';

const Header = ({ username }) => {
  return (
    <header className="header">
      <p>Welcome</p>
      <h2>{username}</h2>
    </header>
  );
};

export default Header;
