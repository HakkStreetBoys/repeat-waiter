import React from 'react';
import { Link, Route } from 'react-router';

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__list-container">
          <ul className="nav__list">
            <li>
              <Link to="/">
                <div className="nav__waiter"></div>
                Drykkir
              </Link>
            </li>
            <li>
              <Link to="/kitchen">
                <div className="nav__kitchen"></div>
                Matur
              </Link>
            </li>
            <li>
              <Link to="/table">
                <div className="nav__table"></div>
                Borð
              </Link>
            </li>
            <li>
              <Link to="/done">
                <div className="nav__done"></div>
                Afgreitt
              </Link>
            </li>
          </ul>
          {/* <Link to="/">
            <div className="nav__logo">
            </div>
          </Link> */}
        </div>

      </div>
    </nav>

)
};
export default Header;
