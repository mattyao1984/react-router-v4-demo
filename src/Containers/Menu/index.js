import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class MenuComponent extends Component {
  render() {
    return (
      <div className="page menu">
        <h2>Menu</h2>
        <Link to="/menu/food">Food</Link>
        <Link to="/menu/drinks">Drinks</Link>
        <Link to="/menu/deserts">Deserts</Link>
        <Route
          path="/menu/:menuItem"
          render={({match}) => <h2>You have chosen: {match.params.menuItem}</h2>}
        />
      </div>
    );
  }
}

export default MenuComponent;