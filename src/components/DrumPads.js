import React from "react";
import Pad from "./Pad";

const DrumPads = props => {
  return (
    <div className="drum-pads">
      {props.banks.map(bank => (
        <Pad key={bank.id} bank={bank} />
      ))}
    </div>
  );
};

export default DrumPads;
