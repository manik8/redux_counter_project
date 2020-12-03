import React from "react";
import {connect} from 'react-redux';
import {decrease, increase, reset, modalOpen} from './actions';

function Counter({count, increase, decrease, reset, modalOpen}) {

  return (
    <div className="container">
      <h1>counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={decrease}>Decrease</button>
        <button type="button" className="btn" onClick={() => {
          reset()
          modalOpen(
            "manik", 
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam Sed Quis Totam Saepe Mollitia Tempore, Modi Eveniet Repellat! Odio, Non!"
            );
          }}>Reset</button>
        <button type="button" className="btn" onClick={increase}>Increase</button>
      </div>
    </div>
  );
}

function mapStateToProps({countState: {count}}) {
  return {count: count};
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset())
//       dispatch(modalOpen("manik", "kansmnamnamnsamsanmnasmnmasnma mnasmnamnma mansmnamna mnamnsmsn nawmnsmn"));
//     },
//   }
// }

export default connect(mapStateToProps, {
  increase, 
  decrease, 
  reset, 
  modalOpen
})(Counter);
