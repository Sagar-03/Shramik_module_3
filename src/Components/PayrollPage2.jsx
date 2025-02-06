import React from "react";
import "./Page2.css";

const PayrollPage2 = () => {
  const employees = [
    {
      name: "Alice Johnson",
      attendance: "95%",
      absent: "3%",
      leave: "2%",
      salary: "$5,000",
      hra: "$1,000",
      epf: "$500",
      esiBonus: "$250",
      insurance: "$750",
    },
    {
      name: "Bob Carter",
      attendance: "90%",
      absent: "5%",
      leave: "5%",
      salary: "$6,000",
      hra: "$1,200",
      epf: "$600",
      esiBonus: "$300",
      insurance: "$800",
    },
    {
      name: "Catherine Green",
      attendance: "92%",
      absent: "4%",
      leave: "4%",
      salary: "$5,500",
      hra: "$1,100",
      epf: "$550",
      esiBonus: "$275",
      insurance: "$775",
    },
  ];

  return (
    <div className="page2-container">
      {/* Navbar */}
      <div className="page2-navbar">
        <div className="page2-navbar-left">
          <h2>Company Dashboard</h2>
        </div>
        <div className="page2-navbar-right">
          <button className="page2-nav-btn page2-home">Home</button>
          <button className="page2-nav-btn page2-settings">Settings</button>
          <button className="page2-nav-btn page2-logout">Logout</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="page2-cards-section">
        {/* Row 1 */}
        <div className="page2-card">
          <h3>Total Attendance</h3>
          <p className="page2-number">95%</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
        <div className="page2-card">
          <h3>Absent</h3>
          <p className="page2-number">3%</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
        <div className="page2-card">
          <h3>Leave</h3>
          <p className="page2-number">2%</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>

        {/* Row 2 */}
        <div className="page2-card">
          <h3>Total Salaries</h3>
          <p className="page2-number">$200,000</p>
          <p className="page2-status">Status: Done</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
        <div className="page2-card">
          <h3>Total HRA</h3>
          <p className="page2-number">$50,000</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
        <div className="page2-card">
          <h3>EPF</h3>
          <p className="page2-number">$10,000</p>
          <p className="page2-status">Status: Done</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>

        {/* Row 3 */}
        <div className="page2-card">
          <h3>ESI Bonus</h3>
          <p className="page2-number">$5,000</p>
          <p className="page2-status">Status: Done</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
        <div className="page2-card">
          <h3>Insurance</h3>
          <p className="page2-number">$15,000</p>
          <button className="page2-download-btn">Download Excel</button>
        </div>
      </div>

      {/* Employee Details Section */}
      <div className="employee-details-section">
        <h3>Employee Details</h3>
        <div className="employee-details-card">
          <div className="employee-details-header">
            <span>Name</span>
            <span>Attendance</span>
            <span>Absent</span>
            <span>Leave</span>
            <span>Salary</span>
            <span>HRA</span>
            <span>EPF</span>
            <span>ESI Bonus</span>
            <span>Insurance</span>
            <span>Actions</span>
          </div>
          {employees.map((employee, index) => (
            <div key={index} className="employee-details-row">
              <span>{employee.name}</span>
              <span>{employee.attendance}</span>
              <span>{employee.absent}</span>
              <span>{employee.leave}</span>
              <span>{employee.salary}</span>
              <span>{employee.hra}</span>
              <span>{employee.epf}</span>
              <span>{employee.esiBonus}</span>
              <span>{employee.insurance}</span>
              <button className="employee-download-btn">Download Slip</button>
            </div>
          ))}
        </div>
        <button className="download-all-btn">Download All Salary Slips</button>
      </div>
    </div>
  );
};

export default PayrollPage2;