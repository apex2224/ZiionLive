import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFilled, resetForm } from '../../store/studentSlice';
import styles from './form.module.css';

function Form() {
  const formData = useSelector(state => state.student);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(FormFilled({ field: name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully');
        dispatch(resetForm());
      } else {
        alert('Failed to submit form');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <div className={styles.staticWrapper}>
      <div className={styles.leftBanner}>
        <img src="/logo192.png" alt="Tutort Academy" className={styles.logo} />
        <h3>ZIION TECHNOLOGY</h3>
      </div>

      <div className={styles.formContainer}>
        <h2>Apply Free Counselling</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course*</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Designing">Web Designing</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
