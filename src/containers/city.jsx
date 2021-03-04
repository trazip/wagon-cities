import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions'

const City = (props) => {
  return (
    <li className="list-group-item" onClick={() => props.setActiveCity(props.city)}>
      {props.city.name}
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
