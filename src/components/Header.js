import React from 'react';
import { Link, Route } from 'react-router';
import NavLink from './NavLink';

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__list-container">
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="WaiterLink" activeClassName="active">
                <div className="nav__waiter"></div>
                Drykkir
              </NavLink>
            </li>
            <li>
              <NavLink to="/kitchen" className="KitchenLink" activeClassName="active">
                <div className="nav__kitchen"></div>
                Matur
              </NavLink>
            </li>
            <li>
              <NavLink to="/table" className="TableLink" activeClassName="active">
                <div className="nav__table"></div>
                Borð
              </NavLink>
            </li>
            <li>
              <NavLink to="/done" className="DoneLink" activeClassName="active">
                <div className="nav__done"></div>
                Afgreitt
              </NavLink>
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
