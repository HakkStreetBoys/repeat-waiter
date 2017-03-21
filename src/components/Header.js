import React from 'react';

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a className="nav__logo-link" href="/">
          <div className="nav__logo">
          </div>
        </a>
        <div className="nav__list-container">
          <ul className="nav__list">
            <li>
              <a className="nav__links" href="/">
                Þjónar
                <div className="nav__waiter"></div>
              </a>
            </li>
            <li>
              <a className="nav__links" href="/kitchen">
                Eldhús
                <div className="nav__kitchen"></div>
              </a>
            </li>
            <li>
              <a className="nav__links" href="/table">
                Borð
                <div className="nav__table"></div>
              </a>
            </li>
            <li>
              <a className="nav__links" href="/done">
                Afgreitt
                <div className="nav__done"></div>
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div className="nav__sub-container">
        <div className="nav__sub-header">
          Nýjustu panntanir
        </div>
        <div className="nav__sub-icon">
        </div>
      </div>
    </nav>

)
};
export default Header;
