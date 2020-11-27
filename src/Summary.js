import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import Option from './Option';
import Total from './Total';

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <Option
          featureHash={featureHash}
          name={feature}
          description={selectedOption.name}
          cost={<CurrencyFormatter amount={selectedOption.cost} />}
        />
      );
    });



    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total 
          currency={this.props.currency}
          selected={this.props.selected}
        />
      </section>
    );
  }
}

export default Summary;
