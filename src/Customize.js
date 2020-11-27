import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import slugify from 'slugify';
import Features from './Features';
import CustomOption from './CustomOption'

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
      
      console.log(feature);
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    console.log(features);
    return (
      <CustomOption 
        features={features}
      />
    );
  }
}

export default Customize;
