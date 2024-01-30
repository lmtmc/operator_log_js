import "./App.css";
import React, { useState } from "react";
import Header from "./components/header.jsx";
import OperatorTime from "./components/OperatorTime.jsx";
import CancelObservation from "./components/CancelObservation.jsx";
import LostObservation from "./components/LostObservation.jsx";
import Instruments from "./components/Instruments.jsx";
import DataDisplay from "./components/DataDisplay.jsx";

function App() {
  const [formData, setFormData] = useState({
    operatorName: "Summer",
    date: new Date().toISOString().slice(0, 10),
    startTime: "",
    endTime: "",
    cancelStart: "",
    cancelEnd: "",
    cancelReason: "",
    lostStart: "",
    lostEnd: "",
    lostReason: "",
    instrument1: "",
    instrument2: "",
  });

  const handInputChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };

    //validate start and end time
    if (name === "startTime" || name === "endTime") {
      if (newFormData.startTime && newFormData.endTime) {
        if (newFormData.startTime > newFormData.endTime) {
          alert("Start time should be earlier than end time");
          return;
        }
      }
    }
    // validate cancel start and end time
    if (name === "cancelStart" || name === "cancelEnd") {
      if (newFormData.cancelStart && newFormData.cancelEnd) {
        if (newFormData.cancelStart > newFormData.cancelEnd) {
          alert("Cancel start time should be earlier than cancel end time");
          return;
        }
      }
    }
    // validate lost start and end time
    if (name === "lostStart" || name === "lostEnd") {
      if (newFormData.lostStart && newFormData.lostEnd) {
        if (newFormData.lostStart > newFormData.lostEnd) {
          alert("Lost start time should be earlier than lost end time");
          return;
        }
      }
    }
    //update state
    setFormData(newFormData);
  };

  const isFormValid = () => {
    if (!formData.operatorName) {
      alert("Please enter operator name");
      return false;
    }
    if (!formData.date) {
      alert("Please enter date");
      return false;
    }
    if (!formData.startTime) {
      alert("Please enter start time");
      return false;
    }
    if (!formData.endTime) {
      alert("Please enter end time");
      return false;
    }
    if (!formData.instrument1) {
      alert("Please enter instrument1 status");
      return false;
    }
    if (!formData.instrument2) {
      alert("Please enter instrument2 status");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("form is valid");
      //save data to a database
      console.log(formData);
      try {
        fetch("http://localhost:5000/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        alert("form submitted");
      } catch (error) {
        console.log(error);
      }

      //clear form
      setFormData({
        operatorName: "",
        date: "",
        startTime: "",
        endTime: "",
        cancelStart: "",
        cancelEnd: "",
        cancelReason: "",
        lostStart: "",
        lostEnd: "",
        lostReason: "",
        instrument1: "",
        instrument2: "",
      });
    } else console.log("form is not valid");
  };

  return (
    <div className="App">
      <Header />
      <DataDisplay />
      <form onSubmit={handleSubmit}>
        <OperatorTime
          operatorName={formData.operatorName}
          date={formData.date}
          startTime={formData.startTime}
          endTime={formData.endTime}
          onInputChange={handInputChange}
        />
        <CancelObservation
          cancelStart={formData.cancelStart}
          cancelEnd={formData.cancelEnd}
          cancelReason={formData.cancelReason}
          onInputChange={handInputChange}
        />

        <LostObservation
          lostStart={formData.lostStart}
          lostEnd={formData.lostEnd}
          lostReason={formData.lostReason}
          onInputChange={handInputChange}
        />

        <Instruments
          instrument1={formData.instrument1}
          instrument2={formData.instrument2}
          onInputChange={handInputChange}
        />

        <div>
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
}

export default App;
