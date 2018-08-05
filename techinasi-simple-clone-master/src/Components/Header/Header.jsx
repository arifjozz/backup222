import React from 'react';
import { Link } from 'react-router-dom'

//CSS ins JS
const gaya = {
  textAlign: 'center',
  backgroundColor: '#eee'
};

const Header = () => {
  return (
    <nav style={gaya}>
      {/* <h1 style={gaya}>Cloning Tech In Asia</h1> */}
    </nav>
  );
};

export default Header;
