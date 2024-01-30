import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/get-form-data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]); // Set data to an empty array in case of an error
      });
  }, []);

  const toggleModal = () => setShowModal(!showModal);

  function convertToCSV(objArray) {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let str = "";

    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let index in array[i]) {
        if (line !== "") line += ",";

        line += array[i][index];
      }

      str += line + "\r\n";
    }

    return str;
  }

  function downloadCSV(data) {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "download.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <button className="open-button" onClick={toggleModal}>
        Show Previous Data
      </button>

      <Modal show={showModal} onClose={toggleModal}>
        
        <table>
          <thead>
            <tr>
              <th>Operator Name</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Cancel Start</th>
              <th>Cancel End</th>
              <th>Cancel Reason</th>
              <th>Lost Start</th>
              <th>Lost End</th>
              <th>Lost Reason</th>
              <th>Instrument1</th>
              <th>Instrument2</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.operatorName}</td>
                  <td>{item.date}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.cancelStart}</td>
                  <td>{item.cancelEnd}</td>
                  <td>{item.cancelReason}</td>
                  <td>{item.lostStart}</td>
                  <td>{item.lostEnd}</td>
                  <td>{item.lostReason}</td>
                  <td>{item.instrument1}</td>
                  <td>{item.instrument2}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button className="download-button" onClick={() => downloadCSV(data)}>
          Download Data
        </button>
      </Modal>
    </div>
  );
}

export default DataDisplay;
