import * as React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import successImg from '../../assets/imgs/success.png';

const NavContainer = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <img alt=" " src={successImg} />
      </li>
      <li>
        <Link to="/detail">Detail</Link>
      </li>
    </ul>
  </nav>
);

export default NavContainer;
