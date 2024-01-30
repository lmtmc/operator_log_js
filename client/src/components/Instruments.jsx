import React from "react";

function Instruments(props) {
  return (
    <div>
      <div className="session-header">
        <label className="Input-label">Instruments Status</label>
      </div>

      <div className="Session">
        <div className="form-group">
          <label className="Input-label">Instrument1</label>
          <select
            className="Input-box"
            name="instrument1"
            value={props.instrument1}
            onChange={props.onInputChange}
          >
            <option value="Select">Select</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="Input-label">Instrument2</label>
          <select
            className="Input-box"
            name="instrument2"
            value={props.instrument2}
            onChange={props.onInputChange}
          >
            <option value="Select">Select</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Instruments;
