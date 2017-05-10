import React from 'react';
import { Button } from 'reactstrap';

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="not-found__container">
        <h1>Ooooops!</h1>
        <img src={process.env.PUBLIC_URL + "../img/source.gif"} alt='' />
        <span className="not_found_emoji">😱😱😱</span>
        <p>Við finnum ekki síðuna sem þú ert að leita af.</p>
        <p>Ýttu á takkan til að komast aftur í þjónakerfið</p>
        <div className="not_found__button-container">
          <a href="/">
            <Button>Þjónar</Button>
          </a>
          <a href="/kitchen">
            <Button>Eldhús</Button>
          </a>
          <a href="/table">
            <Button>Borð</Button>
          </a>
          <a href="/done">
            <Button>Afgreitt</Button>
          </a>
        </div>
        </div>
    </div>
  );
};

export default NotFound;
