import React, { useState } from 'react';
import axios from 'axios';

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    contactNumber: '',
    location: '',
  });

  const { patientName, bloodGroup, contactNumber, location } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/request-blood', {
        patientName,
        bloodGroup,
        contactNumber,
        location,
      });

      // Handle success, redirect user or show a success message
      console.log(res.data);
    } catch (error) {
      // Handle error, display error message to the user
      console.error(error.response.data);
    }
  }

  return (
    <div>
      <h2>Blood Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name</label>
          <input type="text" name="patientName" value={patientName} onChange={handleChange} required />
        </div>
        <div>
          <label>Blood Group</label>
          <select name="bloodGroup" value={bloodGroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label>Contact Number</label>
          <input type="text" name="contactNumber" value={contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={location} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BloodRequest;
