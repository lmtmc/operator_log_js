import React from "react";

function OperatorTime(props) {
  return (
    <div>
      <div className="session-header">
        <label className="Input-label">Operation Time</label>
      </div>

      <div className="Session">
        <div className="form-group">
          <label className="Input-label">Operator Name</label>
          <input
            className="Input-box"
            type="text"
            name="operatorName"
            value={props.operatorName}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label">Date</label>
          <input
            className="Input-box"
            type="date"
            name="date"
            value={props.date}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label">Start Time</label>
          <input
            className="Input-box"
            type="time"
            name="startTime"
            value={props.startTime}
            onChange={props.onInputChange}
          />
        </div>

        <div className="form-group">
          <label className="Input-label">End Time</label>
          <input
            className="Input-box"
            type="time"
            name="endTime"
            value={props.endTime}
            onChange={props.onInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default OperatorTime;
