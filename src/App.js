import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/mainActions";

const mapStateToProps = state => {
  return {
   additionalPrice: state.additionalPrice,
   car: state.car,
   additionalFeatures: state.additionalFeatures
  };
}

const App = ({car, additionalPrice, additionalFeatures, addFeature, removeFeature }) => {

  const buyItem = item => {
    // dispatch an action here to add an item
    addFeature(item)
  };

  const removeItem = item => {
    // dispatch an action here to remove an item
    removeFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

//export default App;
export default connect(mapStateToProps, { addFeature, removeFeature })(App);