import React from "react";

function LostObservation(props) {
  return (
    <div>
      <div className="session-header">
        <label>Lost Observation</label>
      </div>

      <div className="Session">
        <div className="form-group">
          <label className="Input-label"> Lost Start</label>
          <input
            className="Input-box"
            type="time"
            name="lostStart"
            value={props.lostStart}
            onChange={props.onInputChange}
          />
        </div>
        <div className="form-group">
          <label className="Input-label"> Lost End</label>
          <input
            className="Input-box"
            type="time"
            name="lostEnd"
            value={props.lostEnd}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label">Lost Reason</label>
          <select
            className="Input-box"
            name="lostReason"
            value={props.lostReason}
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

export default LostObservation;
