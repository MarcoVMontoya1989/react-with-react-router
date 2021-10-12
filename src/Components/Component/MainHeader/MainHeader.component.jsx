import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from '../../../Styles/Component/MainHeader.module.css';

const MainHeaderComponent = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: "/welcome",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
              }}
              activeClassName={classes.active}
            >Welcome</NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderComponent;