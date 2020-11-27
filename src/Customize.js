import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import slugify from 'slugify';
import Features from './Features';

class Customize extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Features
            itemHash={itemHash}
            inputName={slugify(feature)}
            onChange={(e) => this.props.updateFeature(feature, item)}
            checked={item.name === this.props.selected[feature].name}
            itemName={item.name}
            itemCost={<CurrencyFormatter amount={item.cost} />}
          />
        );
      });
      
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default Customize;
