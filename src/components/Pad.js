import React, { Fragment } from "react";

const Pad = props => {
  return (
    <Fragment>
      <button onClick={() => console.log(props)} className="btn">
        Pad
      </button>
    </Fragment>
  );
};

export default Pad;
