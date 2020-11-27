import React, { Component } from 'react';
import slugify from 'slugify';
import CurrencyFormatter from './CurrencyFormatter';

//const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//  style: 'currency',
//  currency: 'USD',
//});
//({USCurrencyFormat.format(item.cost)})

class Features extends Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        console.log(this.props.selected[feature]);
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)} />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} <CurrencyFormatter amount={item.cost}/>
            </label>
          </div>
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
      <div>
        {features}
      </div>
    );
    
  }
}

export default Features;