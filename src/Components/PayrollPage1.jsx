import React from "react";
import "./Page1.css";

const PayrollPage1 = () => {
  return (
    <div className="page1-container">
      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <h3>Attendance</h3>
          <p className="number blue">120</p>
        </div>
        <div className="card">
          <h3>Absent</h3>
          <p className="number red">10</p>
        </div>
        <div className="card">
          <h3>Leave</h3>
          <p className="number orange">5</p>
        </div>
        <div className="card">
          <h3>Total Salaries</h3>
          <p className="number green">$50,000</p>
        </div>
        <div className="card">
          <h3>Total HRA</h3>
          <p className="number blue">$5,000</p>
        </div>
        <div className="card">
          <h3>Total Bonus</h3>
          <p className="number purple">$2,000</p>
        </div>
        <div className="card">
          <h3>Total EPF</h3>
          <p className="number teal">$3,500</p>
        </div>
        <div className="card">
          <h3>Total ESI</h3>
          <p className="number pink">$1,200</p>
        </div>
        <div className="card">
          <h3>Insurance</h3>
          <p className="number gray">$800</p>
        </div>
      </div>

      {/* Manage Payroll Options Section */}
      <div className="payroll-options-section">
        <h4>Manage Payroll Options</h4>
        <div className="options">
          <div className="option view-details">View Details</div>
          <div className="option edit-records">Edit Records</div>
          <div className="option generate-report">Generate Report</div>
          <div className="option settings">Settings</div>
        </div>
      </div>

      {/* Select Options Section */}
      <div className="select-options-section">
        <h4>Select Options</h4>
        <div className="dropdowns">
          <div className="dropdown-group">
            <label>Choose Office</label>
            <select>
              <option>Headquarters</option>
              <option>Site Location</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Site Location</label>
            <select>
              <option>New York</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Teams</label>
            <select>
              <option>Engineering</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage1;