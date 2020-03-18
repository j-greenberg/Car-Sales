
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creator
export const addFeature = (feature) => {
  // create and return action objects
  return { 
        type: ADD_FEATURE,
        payload: feature
    }
};

export const removeFeature = (feature) => {
  return { 
        type: REMOVE_FEATURE, 
        payload:  feature
    }
};
