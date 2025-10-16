// src/StudentForm.js
import React, { useState } from "react";
import  './studentform.css'; // You can keep same CSS or rename if needed
import { useNavigate } from "react-router-dom";

const FIREBASE_URL = "https://studentdata-18fe7-default-rtdb.firebaseio.com/"; // Replace with your Firebase DB URL

const Studentform = () => {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    referenceNumber: "",
    name: "",
    course: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

  
    try {
      const response = await fetch(`${FIREBASE_URL}/studentData.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("✅ Data saved to Firebase!");
        alert("✅ Student data submitted successfully.");

        // Clear the form
        setFormData({
          referenceNumber: "",
          name: "",
          course: "",
          startDate: "",
          endDate: "",
        });
       navigate('/')
      }
      
      else {
        console.error("❌ Failed to save data");
        alert("❌ Failed to submit. Try again.");
      }
    } catch (error) {
      console.error("⚠️ Error submitting data:", error);
      alert("⚠️ Error submitting form.");
    }
  };
   
  return (
    <div className="maindiv" >
      {/* <h2>📝 Student Form</h2><br /> */}

      <form onSubmit={handleSubmit} >
         <h2>📝 Student Form</h2><br />
        <label>Reference Number:</label><br />
        <input
          type="text"
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Course:</label><br />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Start Date:</label><br />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        /><br /><br />

        <label>End Date:</label><br />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit" disabled={loading} >
                     {loading ? 'Submitting...' : 'Submit'}
                   </button>
      </form>
    </div>
  );
};

export default Studentform;