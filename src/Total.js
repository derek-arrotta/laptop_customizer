import React, { Component } from 'react';
import CurrencyFormatter from './CurrencyFormatter';

//const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//  style: 'currency',
//  currency: 'USD',
//});

class Total extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
    return (
      <div>
        <CurrencyFormatter amount={total}/>
      </div>
    );
  }
}

export default Total;