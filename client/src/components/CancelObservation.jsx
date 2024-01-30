import React from "react";

function CancelObservation(props) {
  return (
    <div>
      <div className="session-header">
        <label>Cancel Observation</label>
      </div>

      <div className="Session">
        <div className="form-group">
          <label className="Input-label"> Cancel Start</label>
          <input
            className="Input-box"
            type="time"
            name="cancelStart"
            value={props.cancelStart}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label"> Cancel End</label>
          <input
            className="Input-box"
            type="time"
            name="cancelEnd"
            value={props.cancelEnd}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label">Cancel Reason</label>
          <select
            className="Input-box"
            name="cancelReason"
            value={props.cancelReason}
            onChange={props.onInputChange}
          >
            <option value="Select">Select</option>
            <option value="No Show">Weather</option>
            <option value="Late">Technical</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CancelObservation;
