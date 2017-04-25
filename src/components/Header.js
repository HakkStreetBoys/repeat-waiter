import React from 'react';
import { Link, Route } from 'react-router';

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/">
          <div className="nav__logo">
          </div>
        </Link>
        <div className="nav__list-container">
          <ul className="nav__list">
            <li>
              <Link to="/">
                Þjónar
                <div className="nav__waiter"></div>
              </Link>
            </li>
            <li>
              <Link to="/kitchen">
                Eldhús
                <div className="nav__kitchen"></div>
              </Link>
            </li>
            <li>
              <Link to="/table">
                Borð
                <div className="nav__table"></div>
              </Link>
            </li>
            <li>
              <Link to="/done">
                Afgreitt
                <div className="nav__done"></div>
              </Link>
            </li>
          </ul>

        </div>
      </div>
      <div className="nav__sub-container">
        <div className="nav__sub-header">
          Nýjustu pantanir
        </div>
        <div className="nav__sub-icon">
        </div>
      </div>
    </nav>

)
};
export default Header;
