import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class CurrencyFormatter extends React.Component {
  render() {
      return (
          <>
              {USCurrencyFormat.format(this.props.amount)}
          </>
      )
  }
}

export default CurrencyFormatter;