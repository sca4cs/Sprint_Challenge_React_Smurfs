import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Welcome to the Smurfs Village!</h2>
      <Link to={`/smurfs`}>Enter</Link>
    </div>
  );
};
 
export default Header;