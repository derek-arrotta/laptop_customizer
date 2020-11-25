import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';
import Summary from './Summary';
import Features from './Features';
import Total from './Total';

// This object will allow us to
// easily convert numbers into US dollar values
/*
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
*/

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.props.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {

    // Main App Section (leave here)
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
              features={this.props.features}
              selected={this.state.selected} />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
              selected={this.state.selected} />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total 
                  selected={this.state.selected} />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
