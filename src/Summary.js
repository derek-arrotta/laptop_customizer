import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import Option from './Option';

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

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            <CurrencyFormatter amount={total} />
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;
