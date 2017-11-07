import React, { Component } from 'react';

class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page product">
        <h1>Product: {this.props.match.params.itemid}</h1>
      </div>
    );
  }
}

export default ProductComponent;